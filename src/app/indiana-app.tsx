'use client';

import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import 'leaflet/dist/leaflet.css';
import indianaBoundary from '@/json/indiana-boundary.json';
import type { FeatureCollection, GeoJsonObject } from 'geojson';
import { useMap, useMapEvents } from 'react-leaflet';

const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  {
    ssr: false,
    loading: () => (
      <div
        className="flex h-full min-h-[240px] w-full items-center justify-center bg-white text-slate-400"
        aria-hidden
      />
    ),
  }
);
const GeoJSON = dynamic(() => import('react-leaflet').then((mod) => mod.GeoJSON), {
  ssr: false,
});

const LOADING_STATUS_MESSAGES = [
  '🌾 Analyzing field conditions for this region…',
  '🌱 Estimating optimal nitrogen rate…',
  '📊 Evaluating nitrogen response…',
  '🧪 Refining nitrogen recommendation…',
  '🚜 Finalizing your nitrogen response curve…',
] as const;

function ProviderTiles({ provider }: { provider: string }) {
  const map = useMap();
  const layerRef = useRef<import('leaflet').TileLayer | null>(null);

  type TileLayerProviderModule = {
    tileLayer: {
      provider: (name: string) => import('leaflet').TileLayer;
    };
  };

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const leaflet = await import('leaflet');
      await import('leaflet-providers');

      if (cancelled) return;

      // `leaflet-providers` augments the Leaflet instance with `tileLayer.provider`.
      // Depending on ESM/CommonJS interop, `leaflet` may be exposed via `.default` or directly.
      const leafletTyped = leaflet as unknown as TileLayerProviderModule & {
        default?: TileLayerProviderModule;
      };
      const L = leafletTyped.default ?? leafletTyped;

      const layer = L.tileLayer.provider(provider);
      layerRef.current = layer;
      layer.addTo(map);
    })();

    return () => {
      cancelled = true;
      if (layerRef.current) map.removeLayer(layerRef.current);
      layerRef.current = null;
    };
  }, [map, provider]);

  return null;
}

function SimulationLoadingOverlay({
  showBackendWake,
  statusMessage,
}: {
  showBackendWake: boolean;
  statusMessage: string;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div className="flex max-w-sm flex-col items-center gap-4 rounded-2xl bg-white/70 px-6 py-6 text-center backdrop-blur-sm">
        <div
          className="h-8 w-8 shrink-0 animate-spin rounded-full border-4 border-[#CEB888]/30 border-t-[#CEB888]"
          aria-label="Loading"
        />
        {showBackendWake && (
          <p className="text-sm font-medium leading-snug text-slate-800">{statusMessage}</p>
        )}
      </div>
    </div>
  );
}

function MapTapToContinue({ onTap }: { onTap: () => void }) {
  useMapEvents({
    click: () => onTap(),
  });
  return null;
}

/** After the map panel is shown (e.g. switching to On-Farm Trials on a phone), fix tile/layout sizing. */
function MapInvalidateSize({ trigger }: { trigger: unknown }) {
  const map = useMap();
  useEffect(() => {
    const t = window.setTimeout(() => {
      map.invalidateSize({ animate: true });
    }, 150);
    return () => window.clearTimeout(t);
  }, [map, trigger]);
  return null;
}

function CellsLayer({
  selectedCellId,
  onSelectCell,
}: {
  selectedCellId: number | null;
  onSelectCell: (id: number | null) => void;
}) {
  const map = useMap();
  const [cells, setCells] = useState<GeoJsonObject | null>(null);
  const [isMapReady, setIsMapReady] = useState(() =>
    Boolean((map as unknown as { _loaded?: boolean })._loaded)
  );

  const selectedCellIdRef = useRef<number | null>(selectedCellId);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const res = await fetch('/json/cells_indiana.geojson');
      if (!res.ok) throw new Error(`Failed to load cells: ${res.status}`);
      if (cancelled) return;
      const raw = await res.text();
      if (cancelled) return;
      setCells(JSON.parse(raw) as GeoJsonObject);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    selectedCellIdRef.current = selectedCellId;
  }, [selectedCellId]);

  useMapEvents({
    load: () => setIsMapReady(true),
  });

  if (!cells || !isMapReady) return null;

  const baseStyle: import('leaflet').PathOptions = {
    // Use an almost-invisible fill so the whole cell captures hover (not just the border).
    fill: true,
    fillColor: '#ffffff',
    fillOpacity: 0.001,
    color: 'rgba(0,0,0,0.18)',
    weight: 0.75,
  };

  const hoverStyle: import('leaflet').PathOptions = {
    fill: true,
    fillColor: '#000000',
    fillOpacity: 0.28,
    color: 'rgba(0,0,0,0.9)',
    weight: 3,
  };

  const selectedStyle: import('leaflet').PathOptions = {
    fill: true,
    fillColor: '#000000',
    fillOpacity: 0.2,
    color: 'rgba(0,0,0,0.75)',
    weight: 2,
  };

  const getCellId = (feature: unknown): number | null => {
    const f = feature as { properties?: { id_cell?: unknown } };
    const id = f.properties?.id_cell;
    return typeof id === 'number' ? id : null;
  };

  return (
    <GeoJSON
      data={cells}
      interactive
      pane="overlayPane"
      style={(feature) => (getCellId(feature) === selectedCellId ? selectedStyle : baseStyle)}
      onEachFeature={(feature, layer) => {
        layer.on({
          click: () => {
            const l = layer as unknown as {
              setStyle?: (s: import('leaflet').PathOptions) => void;
              bringToFront?: () => void;
            };
            const cellId = getCellId(feature);
            onSelectCell(cellId);
            l.setStyle?.(selectedStyle);
            l.bringToFront?.();
          },
          mouseover: () => {
            const featureId = getCellId(feature);
            const activeSelectedId = selectedCellIdRef.current;
            // Before selection: all cells hover.
            // After selection: only the selected cell keeps hover behavior.
            if (activeSelectedId !== null && activeSelectedId !== featureId) return;
            const l = layer as unknown as {
              setStyle?: (s: import('leaflet').PathOptions) => void;
              bringToFront?: () => void;
            };
            l.setStyle?.(hoverStyle);
            l.bringToFront?.();
          },
          mouseout: () => {
            const l = layer as unknown as {
              setStyle?: (s: import('leaflet').PathOptions) => void;
            };
            const featureId = getCellId(feature);
            const activeSelectedId = selectedCellIdRef.current;
            if (activeSelectedId !== null && activeSelectedId === featureId) {
              l.setStyle?.(selectedStyle);
            } else {
              l.setStyle?.(baseStyle);
            }
          },
        });
      }}
    />
  );
}

let countiesGeoJsonCache: GeoJsonObject | null = null;

async function loadCountiesGeoJson(): Promise<GeoJsonObject> {
  if (countiesGeoJsonCache) return countiesGeoJsonCache;
  const res = await fetch('/json/regions_info.geojson');
  if (!res.ok) throw new Error(`Failed to load region map: ${res.status}`);
  const data = (await res.json()) as unknown;
  if (!data || typeof data !== 'object' || (data as { type?: string }).type !== 'FeatureCollection') {
    throw new Error('Unexpected region map format.');
  }
  countiesGeoJsonCache = data as GeoJsonObject;
  return countiesGeoJsonCache;
}

type CountyFeatureProps = {
  countyname?: string;
  region?: string;
  color?: string;
};

function getCountyFeatureProps(feature: unknown): {
  name: string | null;
  region: string | null;
  fillColor: string;
} {
  const p = (feature as { properties?: CountyFeatureProps }).properties;
  const countyname = typeof p?.countyname === 'string' ? p.countyname : null;
  const region = typeof p?.region === 'string' ? p.region : null;
  const name = countyname ?? region;
  const fillColor = typeof p?.color === 'string' && /^#[0-9a-fA-F]{6}$/.test(p.color) ? p.color : '#94a3b8';
  return { name, region, fillColor };
}

function countyPathStyle(
  feature: unknown,
  selectedName: string | null,
  hover: boolean
): import('leaflet').PathOptions {
  const { name, fillColor } = getCountyFeatureProps(feature);
  const selected = name !== null && name === selectedName;
  let fillOpacity = 0.72;
  let weight = 0.85;
  let stroke = '#ffffff';
  if (selected) {
    fillOpacity = 0.92;
    weight = 2.5;
    stroke = '#0f172a';
  } else if (hover) {
    fillOpacity = 0.88;
    weight = 1.4;
  }
  return {
    fill: true,
    fillColor,
    fillOpacity,
    color: stroke,
    weight,
  };
}

function CountiesLayer({
  selectedCountyName,
  onSelectCounty,
  onLoadError,
}: {
  selectedCountyName: string | null;
  onSelectCounty: (name: string | null, region: string | null, fillColor: string) => void;
  onLoadError?: (message: string | null) => void;
}) {
  const map = useMap();
  const [counties, setCounties] = useState<GeoJsonObject | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [isMapReady, setIsMapReady] = useState(() =>
    Boolean((map as unknown as { _loaded?: boolean })._loaded)
  );

  const selectedNameRef = useRef<string | null>(selectedCountyName);
  const onLoadErrorRef = useRef(onLoadError);
  onLoadErrorRef.current = onLoadError;

  useEffect(() => {
    selectedNameRef.current = selectedCountyName;
  }, [selectedCountyName]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await loadCountiesGeoJson();
        if (!cancelled) {
          setCounties(data);
          setLoadError(null);
          onLoadErrorRef.current?.(null);
        }
      } catch (e) {
        if (!cancelled) {
          const msg = e instanceof Error ? e.message : 'Failed to load region map.';
          setLoadError(msg);
          onLoadErrorRef.current?.(msg);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useMapEvents({
    load: () => setIsMapReady(true),
  });

  if (loadError) return null;

  if (!counties || !isMapReady) return null;

  return (
    <GeoJSON
      key={selectedCountyName ?? 'none'}
      data={counties}
      interactive
      pane="overlayPane"
      style={(feature) => countyPathStyle(feature, selectedCountyName, false)}
      onEachFeature={(feature, layer) => {
        const { name, region, fillColor } = getCountyFeatureProps(feature);
        layer.on({
          click: () => {
            if (name) onSelectCounty(name, region, fillColor);
          },
          mouseover: () => {
            const l = layer as unknown as {
              setStyle?: (s: import('leaflet').PathOptions) => void;
              bringToFront?: () => void;
            };
            const active = selectedNameRef.current;
            if (name && active === name) return;
            l.setStyle?.(countyPathStyle(feature, active, true));
            l.bringToFront?.();
          },
          mouseout: () => {
            const l = layer as unknown as {
              setStyle?: (s: import('leaflet').PathOptions) => void;
            };
            const active = selectedNameRef.current;
            l.setStyle?.(countyPathStyle(feature, active, false));
          },
        });
      }}
    />
  );
}

type SimulationResult = {
  nitroKgHa: number;
  yieldKgHa: number;
  nitroLbAc: number;
  yieldBsAc: number;
  profitDol: number;
};

const toNumber = (value: unknown): number | null =>
  typeof value === 'number' && Number.isFinite(value) ? value : null;

const pickNumber = (row: Record<string, unknown>, keys: string[]): number | null => {
  for (const key of keys) {
    const v = toNumber(row[key]);
    if (v !== null) return v;
  }
  return null;
};

const normalizeSimulation = (raw: unknown): SimulationResult | null => {
  if (!raw || typeof raw !== 'object') return null;
  const row = raw as Record<string, unknown>;

  const nitroKgHa = pickNumber(row, ['nitro_kg_ha', 'NitroKgHa']);
  const yieldKgHa = pickNumber(row, ['yield_kg_ha', 'YieldKgHa']);
  const nitroLbAc = pickNumber(row, ['nitro_lb_ac', 'NitroLbAc']);
  const yieldBsAc = pickNumber(row, ['yield_bs_ac', 'YieldBsAc']);
  const profitDol = pickNumber(row, ['profit_dol', 'Profit_dol', 'ProfitDol']);

  if (nitroKgHa === null || yieldKgHa === null || nitroLbAc === null || yieldBsAc === null) {
    return null;
  }

  return {
    nitroKgHa,
    yieldKgHa,
    nitroLbAc,
    yieldBsAc,
    profitDol: profitDol ?? 0,
  };
};

type EonrHistogramBin = {
  lo: number;
  hi: number;
  count: number;
};

type EonrHistogramStats = {
  count: number;
  min: number;
  max: number;
  median: number;
  p25: number;
  p75: number;
  stdDev: number;
};

/**
 * Summary stats from binned histogram data: bin midpoints for mean/std; uniform
 * distribution within each bin for min/max and quantiles.
 */
function computeEonrHistogramStats(bins: EonrHistogramBin[]): EonrHistogramStats | null {
  const sorted = [...bins].filter((b) => b.count > 0).sort((a, b) => a.lo - b.lo);
  if (sorted.length === 0) return null;
  const total = sorted.reduce((s, b) => s + b.count, 0);
  if (total === 0) return null;

  const min = sorted[0]!.lo;
  const max = sorted[sorted.length - 1]!.hi;

  const mid = (b: EonrHistogramBin) => (b.lo + b.hi) / 2;
  let sum = 0;
  let sumSq = 0;
  for (const b of sorted) {
    const m = mid(b);
    sum += m * b.count;
    sumSq += m * m * b.count;
  }
  const mean = sum / total;
  let sumDevSq = 0;
  for (const b of sorted) {
    const m = mid(b);
    sumDevSq += b.count * (m - mean) ** 2;
  }
  const stdDev = total > 1 ? Math.sqrt(sumDevSq / (total - 1)) : 0;

  const quantile = (q: number): number => {
    if (q <= 0) return min;
    if (q >= 1) return max;
    const target = q * total;
    let cum = 0;
    for (const b of sorted) {
      const next = cum + b.count;
      if (next >= target) {
        const frac = b.count > 0 ? (target - cum) / b.count : 0;
        return b.lo + frac * (b.hi - b.lo);
      }
      cum = next;
    }
    return max;
  };

  return {
    count: total,
    min,
    max,
    median: quantile(0.5),
    p25: quantile(0.25),
    p75: quantile(0.75),
    stdDev,
  };
}

function binNitrogenObservations(rates: number[], binWidthLbAc: number): EonrHistogramBin[] {
  if (rates.length === 0 || !(binWidthLbAc > 0)) return [];
  const min = Math.min(...rates);
  const max = Math.max(...rates);
  const lo0 = Math.floor(min / binWidthLbAc) * binWidthLbAc;
  const hiEdge = Math.ceil(max / binWidthLbAc) * binWidthLbAc;
  const nBins = Math.max(1, Math.round((hiEdge - lo0) / binWidthLbAc));
  const counts = new Array<number>(nBins).fill(0);
  for (const r of rates) {
    let i = Math.floor((r - lo0) / binWidthLbAc);
    if (i < 0) i = 0;
    if (i >= nBins) i = nBins - 1;
    counts[i]!++;
  }
  return counts
    .map((count, i) => ({
      lo: lo0 + i * binWidthLbAc,
      hi: lo0 + (i + 1) * binWidthLbAc,
      count,
    }))
    .filter((b) => b.count > 0);
}

function tryParseHistogramRow(row: Record<string, unknown>): EonrHistogramBin | null {
  const count = pickNumber(row, ['count', 'n', 'freq', 'frequency', 'trials', 'num']);
  if (count === null || count < 0) return null;
  const c = Math.max(0, Math.round(count));
  if (c === 0) return null;

  const lo =
    pickNumber(row, ['bin_low', 'lo', 'min', 'from', 'start', 'edge_left', 'left']) ??
    pickNumber(row, ['bin_start', 'lower']);
  const hi =
    pickNumber(row, ['bin_high', 'hi', 'max', 'to', 'end', 'edge_right', 'right']) ??
    pickNumber(row, ['bin_end', 'upper']);

  if (lo !== null && hi !== null && hi > lo) {
    return { lo, hi, count: c };
  }

  const center = pickNumber(row, [
    'eonr_lb_ac',
    'nitro_lb_ac',
    'n_rate',
    'rate',
    'mid',
    'x',
    'eonr',
    'center',
  ]);
  if (center !== null) {
    const half = pickNumber(row, ['half_width', 'bin_half', 'width']) ?? 5;
    return { lo: center - half, hi: center + half, count: c };
  }

  return null;
}

function parseBinnedRows(rows: unknown[]): EonrHistogramBin[] {
  const out: EonrHistogramBin[] = [];
  for (const row of rows) {
    if (!row || typeof row !== 'object' || Array.isArray(row)) continue;
    const b = tryParseHistogramRow(row as Record<string, unknown>);
    if (b) out.push(b);
  }
  return out.sort((a, b) => a.lo - b.lo);
}

/** Backend `/onfarmtrials/eonr_count` returns trial rows with `eonr` (lb/ac) and `profit`. */
function extractEonrRatesFromTrialRows(rows: unknown[]): number[] {
  const rates: number[] = [];
  for (const row of rows) {
    if (!row || typeof row !== 'object' || Array.isArray(row)) continue;
    const e = pickNumber(row as Record<string, unknown>, ['eonr', 'Eonr', 'EONR', 'eonr_lb_ac']);
    if (e !== null && e >= 0) rates.push(e);
  }
  return rates;
}

/** Accepts several backend shapes: pre-binned rows, N-rate keys, raw observation list, numpy-style edges/counts. */
function parseEonrCountPayload(raw: unknown, binWidthFallback = 25): EonrHistogramBin[] {
  if (raw === null || raw === undefined) return [];

  if (Array.isArray(raw)) {
    if (raw.length === 0) return [];
    const fromTrials = extractEonrRatesFromTrialRows(raw);
    if (fromTrials.length > 0) {
      return binNitrogenObservations(fromTrials, binWidthFallback);
    }
    if (raw.every((x) => typeof x === 'number')) {
      return binNitrogenObservations(raw as number[], binWidthFallback);
    }
    if (raw.every((x) => Array.isArray(x) && x.length >= 2)) {
      const pairs: EonrHistogramBin[] = [];
      for (const pair of raw as unknown[][]) {
        const lo = toNumber(pair[0]);
        const c = toNumber(pair[1]);
        const maybeHi = pair.length >= 3 ? toNumber(pair[2]) : null;
        if (lo === null || c === null || c <= 0) continue;
        if (maybeHi !== null && maybeHi > lo) pairs.push({ lo, hi: maybeHi, count: Math.round(c) });
        else pairs.push({ lo, hi: lo + binWidthFallback, count: Math.round(c) });
      }
      return pairs.sort((a, b) => a.lo - b.lo);
    }
    const fromObjects = parseBinnedRows(raw as unknown[]);
    if (fromObjects.length > 0) return fromObjects;
  }

  if (typeof raw === 'object' && !Array.isArray(raw)) {
    const o = raw as Record<string, unknown>;

    if (Array.isArray(o.bins)) {
      const b = parseEonrCountPayload(o.bins, binWidthFallback);
      if (b.length > 0) return b;
    }
    if (Array.isArray(o.data)) {
      const b = parseEonrCountPayload(o.data, binWidthFallback);
      if (b.length > 0) return b;
    }

    const edges = o.edges ?? o.bin_edges;
    const counts = o.counts ?? o.histogram;
    if (Array.isArray(edges) && Array.isArray(counts) && edges.length === counts.length + 1) {
      const bins: EonrHistogramBin[] = [];
      for (let i = 0; i < counts.length; i++) {
        const lo = toNumber(edges[i]);
        const hi = toNumber(edges[i + 1]);
        const c = toNumber(counts[i]);
        if (lo === null || hi === null || c === null || hi <= lo || c <= 0) continue;
        bins.push({ lo, hi, count: Math.round(c) });
      }
      if (bins.length > 0) return bins;
    }

    const numericEntries: { rate: number; count: number }[] = [];
    for (const [k, v] of Object.entries(o)) {
      if (/^(-?\d+(\.\d+)?)$/.test(k) && typeof v === 'number' && Number.isFinite(v) && v > 0) {
        numericEntries.push({ rate: Number(k), count: Math.round(v) });
      }
    }
    if (numericEntries.length >= 1) {
      numericEntries.sort((a, b) => a.rate - b.rate);
      const bins: EonrHistogramBin[] = [];
      for (let i = 0; i < numericEntries.length; i++) {
        const cur = numericEntries[i]!;
        const next = numericEntries[i + 1];
        const hi = next ? (cur.rate + next.rate) / 2 : cur.rate + binWidthFallback;
        const lo = i === 0 ? cur.rate - binWidthFallback / 2 : (numericEntries[i - 1]!.rate + cur.rate) / 2;
        bins.push({ lo, hi, count: cur.count });
      }
      return bins;
    }
  }

  return [];
}

const DEFAULT_HISTOGRAM_ACCENT = '#CEB888';
const REGION_DISPLAY_LABELS: Record<string, string> = {
  SW: 'South West',
  SE: 'South East',
  NW: 'North West',
  NE: 'North East',
  WC: 'West Center',
};

function parseHexRgb(hex: string): [number, number, number] | null {
  const m = /^#?([0-9a-fA-F]{6})$/.exec(hex.trim());
  if (!m) return null;
  const n = parseInt(m[1], 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function rgbToHex(r: number, g: number, b: number): string {
  const c = (x: number) => Math.max(0, Math.min(255, Math.round(x)));
  return `#${[c(r), c(g), c(b)].map((x) => x.toString(16).padStart(2, '0')).join('')}`;
}

function mixRgb(
  a: [number, number, number],
  b: [number, number, number],
  t: number
): [number, number, number] {
  return [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t,
    a[2] + (b[2] - a[2]) * t,
  ];
}

/** Bar fill gradient stops derived from the map region color. */
function regionHistogramBarGradient(hex: string): { dark: string; mid: string; light: string } {
  const p = parseHexRgb(hex);
  if (!p) {
    return { dark: '#a88958', mid: DEFAULT_HISTOGRAM_ACCENT, light: '#e8dcc4' };
  }
  const dark = rgbToHex(p[0] * 0.68, p[1] * 0.68, p[2] * 0.68);
  const light = rgbToHex(...mixRgb(p, [255, 255, 255], 0.42));
  return { dark, mid: rgbToHex(...p), light };
}

function EonrHistogramChart({
  bins,
  regionLabel,
  isMobile,
  accentHex,
}: {
  bins: EonrHistogramBin[];
  regionLabel: string;
  isMobile: boolean;
  accentHex: string;
}) {
  const uid = useId().replace(/:/g, '');
  const gradId = `eonrBarGrad-${uid}`;
  const filterId = `eonrBarShadow-${uid}`;
  const [hoveredBar, setHoveredBar] = useState<{ count: number; lo: number; hi: number; x: number; y: number } | null>(null);
  const barColors = useMemo(() => regionHistogramBarGradient(accentHex), [accentHex]);
  const maxCount = Math.max(...bins.map((b) => b.count), 1);
  const width = isMobile ? 340 : 520;
  const height = isMobile ? 248 : 224;
  const padL = 46;
  const padR = 14;
  const padT = 36;
  const padB = 52;
  const chartW = width - padL - padR;
  const chartH = height - padT - padB;
  const xMin = Math.min(...bins.map((b) => b.lo));
  const xMax = Math.max(...bins.map((b) => b.hi));
  const xSpan = Math.max(xMax - xMin, 1);

  const xAt = (x: number) => padL + ((x - xMin) / xSpan) * chartW;
  const yBase = padT + chartH;
  const yTicks = useMemo(() => {
    const steps = [0, 0.25, 0.5, 0.75, 1];
    return steps.map((t) => ({
      y: yBase - t * chartH,
      value: Math.round(maxCount * t),
      t,
    }));
  }, [chartH, maxCount, yBase]);

  const xticks = useMemo(() => {
    const n = isMobile ? 5 : 6;
    return Array.from({ length: n }, (_, i) => xMin + (xSpan * i) / (n - 1));
  }, [xMin, xSpan, isMobile]);

  const cardTint = useMemo(() => {
    const p = parseHexRgb(accentHex);
    if (!p) return undefined;
    const soft = rgbToHex(...mixRgb(p, [255, 255, 255], 0.88));
    return `linear-gradient(145deg, #ffffff 0%, rgb(248 250 252 / 0.96) 42%, ${soft} 100%)`;
  }, [accentHex]);

  const stats = useMemo(() => computeEonrHistogramStats(bins), [bins]);
  const fmt = (v: number) => v.toFixed(1);

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-slate-200/80 px-3 pb-2 pt-4 shadow-md sm:px-5"
      style={{
        borderColor: `${accentHex}44`,
        background: cardTint ?? 'linear-gradient(145deg, #ffffff 0%, rgb(248 250 252 / 0.96) 100%)',
      }}
    >
      <div className="mb-1 px-1">
        <div>
          <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
            EONR distribution
          </h3>
          <p className="mt-0.5 text-sm font-semibold text-slate-800">
            On-farm trials — region{' '}
            <span style={{ color: accentHex }} className="font-semibold">
              {regionLabel}
            </span>
          </p>
        </div>
      </div>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="mx-auto h-auto w-full"
        role="img"
        aria-label={`Histogram of economic optimum nitrogen rates for region ${regionLabel}`}
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor={barColors.dark} stopOpacity="0.95" />
            <stop offset="50%" stopColor={barColors.mid} stopOpacity="1" />
            <stop offset="100%" stopColor={barColors.light} stopOpacity="1" />
          </linearGradient>
          <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodColor="#0f172a" floodOpacity="0.12" />
          </filter>
        </defs>

        {/* grid */}
        {yTicks.filter((tick) => tick.t > 0).map((tick) => {
          const y = tick.y;
          return (
            <line
              key={tick.t}
              x1={padL}
              x2={padL + chartW}
              y1={y}
              y2={y}
              stroke="#e2e8f0"
              strokeWidth={1}
            />
          );
        })}

        <line
          x1={padL}
          x2={padL + chartW}
          y1={yBase}
          y2={yBase}
          stroke="#94a3b8"
          strokeWidth={1.25}
        />
        <line x1={padL} x2={padL} y1={padT} y2={yBase} stroke="#94a3b8" strokeWidth={1.25} />
        {yTicks.map((tick) => (
          <text
            key={`yt-${tick.t}`}
            x={padL - 8}
            y={tick.y + 3}
            textAnchor="end"
            className="fill-slate-500"
            style={{ fontSize: 10, fontWeight: 600 }}
          >
            {tick.value}
          </text>
        ))}

        {bins.map((b, i) => {
          const x0 = xAt(b.lo);
          const x1 = xAt(b.hi);
          const bw = Math.max(3, x1 - x0 - (bins.length > 12 ? 0.5 : 1.25));
          const h = (b.count / maxCount) * chartH;
          const bx = x0 + (x1 - x0 - bw) / 2;
          const by = yBase - h;
          return (
            <motion.g
              key={`${b.lo}-${b.hi}-${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.04, duration: 0.35 }}
            >
              <motion.rect
                x={bx}
                width={bw}
                rx={5}
                ry={5}
                fill={`url(#${gradId})`}
                filter={`url(#${filterId})`}
                initial={{ height: 0, y: yBase }}
                animate={{ height: h, y: by }}
                transition={{ type: 'spring', stiffness: 420, damping: 28, delay: i * 0.04 }}
                onMouseEnter={() =>
                  setHoveredBar({
                    count: b.count,
                    lo: b.lo,
                    hi: b.hi,
                    x: bx + bw / 2,
                    y: by,
                  })
                }
                onMouseLeave={() => setHoveredBar(null)}
              />
            </motion.g>
          );
        })}
        {hoveredBar && (
          <g>
            <rect
              x={Math.max(padL + 4, Math.min(padL + chartW - 214, hoveredBar.x - 107))}
              y={Math.max(6, hoveredBar.y - 58)}
              width={214}
              height={44}
              rx={10}
              fill="#ffffff"
              stroke={`${accentHex}66`}
              strokeWidth={1}
              style={{ filter: 'drop-shadow(0px 6px 14px rgba(15, 23, 42, 0.16))' }}
            />
            <text
              x={Math.max(padL + 14, Math.min(padL + chartW - 204, hoveredBar.x - 97))}
              y={Math.max(22, hoveredBar.y - 38)}
              className="fill-slate-800"
              style={{ fontSize: 11, fontWeight: 700 }}
            >
              {`${hoveredBar.count} trial${hoveredBar.count === 1 ? '' : 's'}`}
            </text>
            <text
              x={Math.max(padL + 14, Math.min(padL + chartW - 204, hoveredBar.x - 97))}
              y={Math.max(38, hoveredBar.y - 22)}
              className="fill-slate-500"
              style={{ fontSize: 10, fontWeight: 600 }}
            >
              {`${hoveredBar.lo.toFixed(1)}-${hoveredBar.hi.toFixed(1)} lb/ac`}
            </text>
          </g>
        )}

        {xticks.map((xv) => (
          <text
            key={xv}
            x={xAt(xv)}
            y={height - 18}
            textAnchor="middle"
            className="fill-slate-500"
            style={{ fontSize: 10, fontWeight: 600 }}
          >
            {Number.isInteger(xv) ? xv : xv.toFixed(0)}
          </text>
        ))}

        <text
          x={padL + chartW / 2}
          y={height - 4}
          textAnchor="middle"
          className="fill-slate-600"
          style={{ fontSize: 11, fontWeight: 700 }}
        >
          Nitrogen rate (lb/ac)
        </text>

        <text
          x={14}
          y={padT + chartH / 2}
          textAnchor="middle"
          transform={`rotate(-90 14 ${padT + chartH / 2})`}
          className="fill-slate-600"
          style={{ fontSize: 10, fontWeight: 700 }}
        >
          Trials
        </text>
      </svg>
      {stats && (
        <div className="mt-4 border-t border-slate-200/90 px-1 pb-2 pt-3">
          <p className="mb-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
            EONR summary (lb/ac)
          </p>
          <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm sm:grid-cols-3">
            <div className="flex flex-col gap-0.5">
              <dt className="text-[11px] font-medium text-slate-500">Median</dt>
              <dd className="font-semibold tabular-nums text-slate-900">{fmt(stats.median)}</dd>
            </div>
            <div className="flex flex-col gap-0.5">
              <dt className="text-[11px] font-medium text-slate-500">Std dev</dt>
              <dd className="font-semibold tabular-nums text-slate-900">{fmt(stats.stdDev)}</dd>
            </div>
            <div className="flex flex-col gap-0.5">
              <dt className="text-[11px] font-medium text-slate-500">Minimum</dt>
              <dd className="font-semibold tabular-nums text-slate-900">{fmt(stats.min)}</dd>
            </div>
            <div className="flex flex-col gap-0.5">
              <dt className="text-[11px] font-medium text-slate-500">25th percentile</dt>
              <dd className="font-semibold tabular-nums text-slate-900">{fmt(stats.p25)}</dd>
            </div>
            <div className="flex flex-col gap-0.5">
              <dt className="text-[11px] font-medium text-slate-500">75th percentile</dt>
              <dd className="font-semibold tabular-nums text-slate-900">{fmt(stats.p75)}</dd>
            </div>
            <div className="flex flex-col gap-0.5">
              <dt className="text-[11px] font-medium text-slate-500">Maximum</dt>
              <dd className="font-semibold tabular-nums text-slate-900">{fmt(stats.max)}</dd>
            </div>
            <div className="flex flex-col gap-0.5">
              <dt className="text-[11px] font-medium text-slate-500">Count of trials in the region</dt>
              <dd className="font-semibold tabular-nums text-slate-900">{stats.count}</dd>
            </div>
          </dl>
        </div>
      )}
    </div>
  );
}

function EonrHistogramEmptyChart({ isMobile }: { isMobile: boolean }) {
  const width = isMobile ? 340 : 520;
  const height = isMobile ? 248 : 224;
  const padL = 46;
  const padR = 14;
  const padT = 36;
  const padB = 52;
  const chartW = width - padL - padR;
  const chartH = height - padT - padB;
  const yBase = padT + chartH;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 px-3 pb-2 pt-4 shadow-md sm:px-5">
      <div className="mb-1 px-1">
        <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
          EONR distribution
        </h3>
        <p className="mt-0.5 text-sm font-semibold text-slate-600">On-farm trials — select a region</p>
      </div>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="mx-auto h-auto w-full"
        role="img"
        aria-label="Empty histogram placeholder for on-farm trials"
      >
        {[0.25, 0.5, 0.75, 1].map((t) => {
          const y = yBase - t * chartH;
          return (
            <line key={t} x1={padL} x2={padL + chartW} y1={y} y2={y} stroke="#e2e8f0" strokeWidth={1} />
          );
        })}
        <line x1={padL} x2={padL + chartW} y1={yBase} y2={yBase} stroke="#94a3b8" strokeWidth={1.25} />
        <line x1={padL} x2={padL} y1={padT} y2={yBase} stroke="#94a3b8" strokeWidth={1.25} />
        <text
          x={padL + chartW / 2}
          y={height - 4}
          textAnchor="middle"
          className="fill-slate-600"
          style={{ fontSize: 11, fontWeight: 700 }}
        >
          Nitrogen rate (lb/ac)
        </text>
        <text
          x={14}
          y={padT + chartH / 2}
          textAnchor="middle"
          transform={`rotate(-90 14 ${padT + chartH / 2})`}
          className="fill-slate-600"
          style={{ fontSize: 10, fontWeight: 700 }}
        >
          Trials
        </text>
      </svg>
      <p className="mt-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-center text-sm text-slate-600">
        Select a region on the map to load trial data.
      </p>
    </div>
  );
}

/** Darker Purdue header gold (#CEB888) — paired EONR / price panels share the same tone. */
const PURDUE_HEADER_BEIGE_PANEL =
  'linear-gradient(165deg, #d2bc88 0%, #CEB888 45%, #b89452 100%)';

const GAUGE_TRACK = '#44403c';
const GAUGE_FILL = '#0c0a09';
const GAUGE_TICK_DIM = 'rgba(12, 10, 9, 0.38)';
const GAUGE_READOUT = '#0c0a09';

/** F1-style arched gauge for EONR: dark arc on beige, high-contrast readout. */
function EonrTachometerGauge({
  eonrLbAc,
  minRate,
  maxRate,
  isMobile,
}: {
  eonrLbAc: number | null;
  minRate: number;
  maxRate: number;
  isMobile: boolean;
}) {
  const cx = 200;
  const cy = 170;
  const rOuter = 88;
  const rInnerTicks = 74;
  const arcPath = `M ${cx - rOuter} ${cy} A ${rOuter} ${rOuter} 0 1 1 ${cx + rOuter} ${cy}`;
  const arcLen = Math.PI * rOuter;
  const progress =
    eonrLbAc === null
      ? 0
      : Math.max(0, Math.min(1, (eonrLbAc - minRate) / Math.max(maxRate - minRate, 1e-6)));
  const dashFill = arcLen * progress;

  const tickAngles = useMemo(() => {
    const n = 14;
    const out: { x1: number; y1: number; x2: number; y2: number; inFilled: boolean }[] = [];
    for (let i = 0; i < n; i++) {
      const t = i / (n - 1);
      const θ = Math.PI * (1 - t);
      const xo = cx + rOuter * Math.cos(θ);
      const yo = cy - rOuter * Math.sin(θ);
      const xi = cx + rInnerTicks * Math.cos(θ);
      const yi = cy - rInnerTicks * Math.sin(θ);
      out.push({
        x1: xo,
        y1: yo,
        x2: xi,
        y2: yi,
        inFilled: t <= progress + 1e-6,
      });
    }
    return out;
  }, [progress]);

  const mainText = eonrLbAc === null ? '—' : `${eonrLbAc.toFixed(1)} lb`;
  const fontSizeMain = isMobile ? 26 : 34;

  const uid = useId().replace(/:/g, '');
  const filterGlow = `eonrTachGlow-${uid}`;
  const filterText = `eonrTextSoft-${uid}`;

  return (
    <div className="relative w-full min-w-0 text-left">
        <p className="mb-0 text-left text-[11px] font-black uppercase leading-tight tracking-[0.14em] text-stone-950 sm:text-xs">
          EONR{' '}
          <span className="font-semibold normal-case tracking-normal text-stone-900">
            (Economic Optimum Nitrogen Rate)
          </span>
        </p>
        <svg
          viewBox="0 0 400 182"
          className="h-auto w-full max-h-[142px]"
          role="img"
          aria-label={
            eonrLbAc === null
              ? 'Economic optimum nitrogen rate gauge'
              : `Economic optimum nitrogen rate ${eonrLbAc.toFixed(1)} lb`
          }
        >
          <defs>
            <filter id={filterGlow} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="1.4" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id={filterText} x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0.6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Track (unfilled arc) */}
          <path
            d={arcPath}
            fill="none"
            stroke={GAUGE_TRACK}
            strokeOpacity={0.55}
            strokeWidth={11}
            strokeLinecap="round"
          />
          {/* Filled progress arc */}
          <path
            d={arcPath}
            fill="none"
            stroke={GAUGE_FILL}
            strokeWidth={9.5}
            strokeLinecap="round"
            strokeDasharray={`${dashFill} ${arcLen}`}
            filter={`url(#${filterGlow})`}
          />

          {/* Segmented ticks */}
          {tickAngles.map((seg, i) => (
            <line
              key={i}
              x1={seg.x1}
              y1={seg.y1}
              x2={seg.x2}
              y2={seg.y2}
              stroke={seg.inFilled ? GAUGE_FILL : GAUGE_TICK_DIM}
              strokeWidth={seg.inFilled ? 2.1 : 1.4}
              strokeLinecap="round"
            />
          ))}

          {/* Center readout */}
          <text
            x={cx}
            y={cy + 4}
            textAnchor="middle"
            fill={GAUGE_READOUT}
            style={{
              fontSize: fontSizeMain,
              fontWeight: 600,
              fontFamily: 'ui-sans-serif, system-ui, sans-serif',
              letterSpacing: '-0.03em',
            }}
            filter={`url(#${filterText})`}
          >
            {mainText}
          </text>
        </svg>
    </div>
  );
}

let cellsGeoJsonCache: FeatureCollection | null = null;

async function loadCellsGeoJson(): Promise<FeatureCollection> {
  if (cellsGeoJsonCache) return cellsGeoJsonCache;
  const res = await fetch('/json/cells_indiana.geojson');
  if (!res.ok) throw new Error(`Failed to load cells: ${res.status}`);
  const data = (await res.json()) as unknown;
  if (!data || typeof data !== 'object' || (data as { type?: string }).type !== 'FeatureCollection') {
    throw new Error('Unexpected cell map format.');
  }
  cellsGeoJsonCache = data as FeatureCollection;
  return cellsGeoJsonCache;
}

/** Ray-cast; ring is GeoJSON linear ring [lng, lat][] */
function pointInRing(lng: number, lat: number, ring: number[][]): boolean {
  if (ring.length < 3) return false;
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const xi = ring[i][0]!;
    const yi = ring[i][1]!;
    const xj = ring[j][0]!;
    const yj = ring[j][1]!;
    if (yi === yj) continue;
    const denom = yj - yi;
    const crosses =
      (yi > lat) !== (yj > lat) && denom !== 0 && lng < ((xj - xi) * (lat - yi)) / denom + xi;
    if (crosses) inside = !inside;
  }
  return inside;
}

function pointInPolygonRings(lng: number, lat: number, rings: number[][][]): boolean {
  if (rings.length === 0) return false;
  if (!pointInRing(lng, lat, rings[0]!)) return false;
  for (let h = 1; h < rings.length; h++) {
    if (pointInRing(lng, lat, rings[h]!)) return false;
  }
  return true;
}

function findCellIdForLngLat(lng: number, lat: number, fc: FeatureCollection): number | null {
  for (const feature of fc.features) {
    const rawId = feature.properties && (feature.properties as { id_cell?: unknown }).id_cell;
    if (typeof rawId !== 'number') continue;
    const geom = feature.geometry;
    if (!geom) continue;
    if (geom.type === 'Polygon' && pointInPolygonRings(lng, lat, geom.coordinates)) {
      return rawId;
    }
    if (geom.type === 'MultiPolygon') {
      for (const poly of geom.coordinates) {
        if (pointInPolygonRings(lng, lat, poly)) return rawId;
      }
    }
  }
  return null;
}

export default function Home() {
  const [showDashboard, setShowDashboard] = useState(false);
  /** Must match server first paint (no `window`); real value set in useEffect below. */
  const [isMobile, setIsMobile] = useState(false);
  const [continueEnabled, setContinueEnabled] = useState(false);
  const [showAONR, setShowAONR] = useState(false);
  const [selectedCellId, setSelectedCellId] = useState<number | null>(null);
  const [cellSimulations, setCellSimulations] = useState<SimulationResult[] | null>(null);
  const [cellDataLoading, setCellDataLoading] = useState(false);
  const [cellDataError, setCellDataError] = useState<string | null>(null);
  const [mobileMapOpen, setMobileMapOpen] = useState(true);
  const aonrRef = useRef<HTMLDivElement | null>(null);
  const mapPanelRef = useRef<HTMLDivElement | null>(null);
  const continueTimerRef = useRef<number | null>(null);
  const [showBackendWakeUi, setShowBackendWakeUi] = useState(false);
  const [loadingWakeMessageIndex, setLoadingWakeMessageIndex] = useState(0);
  const [nPrice, setNPrice] = useState(0.65);
  const [cornPrice, setCornPrice] = useState(4.5);
  const simRequestPricesRef = useRef({ nPrice, cornPrice });
  simRequestPricesRef.current = { nPrice, cornPrice };
  const [showLocationOptions, setShowLocationOptions] = useState(false);
  const [resultsSection, setResultsSection] = useState<'optimize' | 'trials'>('optimize');
  const [mobileTrialsView, setMobileTrialsView] = useState<'map' | 'results'>('map');
  const [selectedCountyName, setSelectedCountyName] = useState<string | null>(null);
  const [selectedCountyRegion, setSelectedCountyRegion] = useState<string | null>(null);
  const [countiesMapError, setCountiesMapError] = useState<string | null>(null);
  const [eonrHistogramBins, setEonrHistogramBins] = useState<EonrHistogramBin[]>([]);
  const [eonrHistogramLoading, setEonrHistogramLoading] = useState(false);
  const [eonrHistogramError, setEonrHistogramError] = useState<string | null>(null);
  const [selectedRegionMapColor, setSelectedRegionMapColor] = useState<string | null>(null);

  const trialsRegionApiParam = useMemo(() => {
    const code = (selectedCountyRegion ?? selectedCountyName)?.trim();
    return code || null;
  }, [selectedCountyRegion, selectedCountyName]);
  const trialsRegionDisplayLabel = useMemo(() => {
    if (!trialsRegionApiParam) return null;
    const normalized = trialsRegionApiParam.toUpperCase();
    return REGION_DISPLAY_LABELS[normalized] ?? trialsRegionApiParam;
  }, [trialsRegionApiParam]);
  const [geoError, setGeoError] = useState<string | null>(null);
  const [geoLocating, setGeoLocating] = useState(false);
  /** null until mounted; geolocation only gets a real prompt on secure contexts (HTTPS or localhost). */
  const [geoSecureContext, setGeoSecureContext] = useState<boolean | null>(null);
  const pendingGeoCellIdRef = useRef<number | null>(null);
  /** Survives React Strict Mode’s double effect run so we don’t wipe geo-chosen cell on the 2nd pass. */
  const openedDashboardWithGeoRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setGeoSecureContext(window.isSecureContext);
  }, []);

  useEffect(() => {
    import('leaflet').then((leaf) => {
      // Leaflet's internal icon helper name isn't present in the TS types.
      delete (leaf.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl;
      leaf.Icon.Default.mergeOptions({
        iconRetinaUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });
    });
  }, []);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    if (!showDashboard) {
      setShowBackendWakeUi(false);
      setLoadingWakeMessageIndex(0);
      setShowLocationOptions(false);
      setGeoError(null);
      setGeoLocating(false);
      pendingGeoCellIdRef.current = null;
      openedDashboardWithGeoRef.current = false;
      setContinueEnabled(false);
      setShowAONR(false);
      setResultsSection('optimize');
      setMobileTrialsView('map');
      setMobileMapOpen(true);
      setSelectedCellId(null);
      setCellSimulations(null);
      setCellDataError(null);
      setSelectedCountyName(null);
      setSelectedCountyRegion(null);
      setCountiesMapError(null);
      setEonrHistogramBins([]);
      setEonrHistogramError(null);
      setEonrHistogramLoading(false);
      setSelectedRegionMapColor(null);
      if (continueTimerRef.current !== null) {
        window.clearTimeout(continueTimerRef.current);
        continueTimerRef.current = null;
      }
      return;
    }

    const pendingCell = pendingGeoCellIdRef.current;
    if (pendingCell !== null) {
      pendingGeoCellIdRef.current = null;
      openedDashboardWithGeoRef.current = true;
      setSelectedCellId(pendingCell);
      setContinueEnabled(true);
      setShowAONR(true);
      setResultsSection('optimize');
      setMobileMapOpen(false);
      setCellSimulations(null);
      setCellDataError(null);
      if (continueTimerRef.current !== null) {
        window.clearTimeout(continueTimerRef.current);
        continueTimerRef.current = null;
      }
      setShowBackendWakeUi(false);
      setLoadingWakeMessageIndex(0);
      return;
    }

    if (openedDashboardWithGeoRef.current) {
      // Second Strict Mode invocation (or any re-run) after geo init: keep cell + AONR.
      return;
    }

    setContinueEnabled(false);
    setShowAONR(false);
    setResultsSection('optimize');
    setMobileTrialsView('map');
    setMobileMapOpen(true);
    setSelectedCellId(null);
    setCellSimulations(null);
    setCellDataError(null);
    setSelectedCountyName(null);
    setSelectedCountyRegion(null);
    setCountiesMapError(null);
    setEonrHistogramBins([]);
    setEonrHistogramError(null);
    setEonrHistogramLoading(false);
    setSelectedRegionMapColor(null);

    if (continueTimerRef.current !== null) {
      window.clearTimeout(continueTimerRef.current);
      continueTimerRef.current = null;
    }
    setShowBackendWakeUi(false);
    setLoadingWakeMessageIndex(0);
  }, [showDashboard]);

  useEffect(() => {
    if (resultsSection === 'optimize') {
      setCountiesMapError(null);
      setEonrHistogramBins([]);
      setEonrHistogramError(null);
      setEonrHistogramLoading(false);
    }
  }, [resultsSection]);

  useEffect(() => {
    if (!showDashboard || !showAONR || resultsSection !== 'trials' || !trialsRegionApiParam) {
      setEonrHistogramBins([]);
      setEonrHistogramError(null);
      setEonrHistogramLoading(false);
      return;
    }

    const controller = new AbortController();
    setEonrHistogramLoading(true);
    setEonrHistogramError(null);

    (async () => {
      try {
        const params = new URLSearchParams({
          region: trialsRegionApiParam.toLowerCase(),
          nitro_price: String(nPrice),
          grain_price: String(cornPrice),
        });
        const res = await fetch(`/api/onfarmtrials/eonr_count?${params.toString()}`, {
          signal: controller.signal,
        });
        if (!res.ok) {
          const text = await res.text();
          throw new Error(text.slice(0, 240) || `Request failed (${res.status})`);
        }
        const raw: unknown = await res.json();
        const bins = parseEonrCountPayload(raw);
        setEonrHistogramBins(bins);
      } catch (err) {
        if ((err as { name?: string }).name === 'AbortError') return;
        setEonrHistogramBins([]);
        setEonrHistogramError(
          err instanceof Error ? err.message : 'Failed to load EONR distribution.'
        );
      } finally {
        if (!controller.signal.aborted) setEonrHistogramLoading(false);
      }
    })();

    return () => controller.abort();
  }, [showDashboard, showAONR, resultsSection, trialsRegionApiParam, nPrice, cornPrice]);

  /** Cold-start hint only after 3s waiting on this request (not tied to Continue). */
  useEffect(() => {
    if (!cellDataLoading) {
      setShowBackendWakeUi(false);
      return;
    }
    const id = window.setTimeout(() => setShowBackendWakeUi(true), 3000);
    return () => window.clearTimeout(id);
  }, [cellDataLoading]);

  useEffect(() => {
    if (!showBackendWakeUi || !cellDataLoading) {
      setLoadingWakeMessageIndex(0);
      return;
    }
    setLoadingWakeMessageIndex(0);
    const id = window.setInterval(() => {
      setLoadingWakeMessageIndex((i) => (i + 1) % LOADING_STATUS_MESSAGES.length);
    }, 8000);
    return () => window.clearInterval(id);
  }, [showBackendWakeUi, cellDataLoading]);

  useEffect(() => {
    if (selectedCellId === null) {
      setCellSimulations(null);
      setCellDataError(null);
      setCellDataLoading(false);
      return;
    }

    const controller = new AbortController();
    const { nPrice: nP, cornPrice: cP } = simRequestPricesRef.current;
    const params = new URLSearchParams({
      cell: String(selectedCellId),
      nitro_price: String(nP),
      grain_price: String(cP),
    });

    setCellDataLoading(true);
    setCellDataError(null);

    (async () => {
      try {
        const res = await fetch(`/api/simresults?${params.toString()}`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(`Request failed (${res.status})`);

        const raw = (await res.json()) as unknown;
        if (!Array.isArray(raw)) throw new Error('Unexpected response format from backend.');

        const parsed = raw
          .map((entry) => normalizeSimulation(entry))
          .filter((entry): entry is SimulationResult => entry !== null);
        setCellSimulations(parsed);
      } catch (error) {
        if ((error as { name?: string }).name === 'AbortError') return;
        setCellSimulations(null);
        setCellDataError(
          error instanceof Error ? error.message : 'Failed to load selected cell data.'
        );
      } finally {
        if (!controller.signal.aborted) setCellDataLoading(false);
      }
    })();

    return () => controller.abort();
  }, [selectedCellId]);

  const dualCurveData = useMemo(() => {
    if (!cellSimulations || cellSimulations.length === 0) return [];
    return cellSimulations
      .map((row) => ({
        x: row.nitroLbAc,
        yield: row.yieldBsAc,
        profit: cornPrice * row.yieldBsAc - nPrice * row.nitroLbAc,
      }))
      .sort((a, b) => a.x - b.x);
  }, [cellSimulations, nPrice, cornPrice]);
  const aonrRow = useMemo(() => {
    if (!cellSimulations || cellSimulations.length === 0) return null;
    return cellSimulations.reduce((best, row) =>
      row.yieldBsAc > best.yieldBsAc ? row : best
    );
  }, [cellSimulations]);
  const eonrRow = useMemo(() => {
    if (!cellSimulations || cellSimulations.length === 0) return null;
    return cellSimulations.reduce((best, row) => {
      const bestMargin = cornPrice * best.yieldBsAc - nPrice * best.nitroLbAc;
      const rowMargin = cornPrice * row.yieldBsAc - nPrice * row.nitroLbAc;
      return rowMargin > bestMargin ? row : best;
    });
  }, [cellSimulations, nPrice, cornPrice]);
  const priceRatio = useMemo(() => (cornPrice > 0 ? nPrice / cornPrice : null), [nPrice, cornPrice]);

  const eonrGaugeScale = useMemo(() => {
    const min = 0;
    if (!cellSimulations?.length) return { min, max: 350 };
    const maxN = Math.max(350, ...cellSimulations.map((r) => r.nitroLbAc));
    return { min, max: maxN };
  }, [cellSimulations]);

  const handleMapInteraction = () => {
    if (showAONR) return;

    setContinueEnabled(true);
  };

  const handleContinue = () => {
    if (isMobile) {
      if (showAONR && resultsSection === 'trials') {
        setMobileTrialsView('results');
        requestAnimationFrame(() => {
          aonrRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        return;
      }

      // On phone: scroll first, then reveal plots (avoid instant pop-in).
      window.scrollTo({ top: 0, behavior: 'smooth' });

      if (continueTimerRef.current !== null) window.clearTimeout(continueTimerRef.current);
      continueTimerRef.current = window.setTimeout(() => {
        setShowAONR(true);
        setMobileMapOpen(false);
        continueTimerRef.current = null;
      }, 450);
      return;
    }

    setShowAONR(true);
  };

  const handleOpenMapFromFloatingButton = () => {
    if (resultsSection === 'trials') {
      setMobileTrialsView('map');
      setMobileMapOpen(true);
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      return;
    }

    setShowAONR(false);
    setResultsSection('optimize');
    setMobileTrialsView('map');
    setContinueEnabled(false);
    setMobileMapOpen(true);
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  };

  const handleChooseMapSelection = () => {
    setGeoError(null);
    pendingGeoCellIdRef.current = null;
    setShowDashboard(true);
  };

  const handleChooseCurrentLocation = () => {
    setGeoError(null);
    if (typeof navigator === 'undefined' || !navigator.geolocation) {
      setGeoError('Location is not available in this browser.');
      return;
    }
    if (typeof window !== 'undefined' && !window.isSecureContext) {
      setGeoError(
        [
          'This address is not a “secure” page (it must be https:// or localhost for GPS).',
          'On Wi‑Fi dev URLs like http://10.x… or http://192.168…, Safari and Chrome block location and may not show any allow prompt—that looks like “permission denied”.',
          'What to do: tap “Select location on map”, or deploy with HTTPS. On a computer, http://localhost:3000 can use current location.',
        ].join('\n\n')
      );
      return;
    }
    setGeoLocating(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
          const fc = await loadCellsGeoJson();
          const id = findCellIdForLngLat(longitude, latitude, fc);
          if (id === null) {
            setGeoError(
              'Your position is outside the Indiana analysis grid. Select a cell on the map instead.'
            );
            setGeoLocating(false);
            return;
          }
          pendingGeoCellIdRef.current = id;
          setShowDashboard(true);
        } catch {
          setGeoError('Could not load cell boundaries. Try again or use the map.');
        } finally {
          setGeoLocating(false);
        }
      },
      (err) => {
        setGeoLocating(false);
        if (err.code === 1) {
          const httpsHint =
            typeof window !== 'undefined' && !window.isSecureContext
              ? 'You are not on HTTPS/localhost, so the browser will not offer location.\n\n'
              : '';
          setGeoError(
            [
              httpsHint +
                'Location was blocked. The browser never showed (or you tapped Block) the location prompt.',
              'iPhone: Settings → Safari → Location, or open the ··· / aA menu → Website Settings → Location → Allow.',
              'Android: tap the lock icon in the address bar → Site settings → Location → Allow.',
              'Or tap “Select location on map” and choose your cell.',
            ].join('\n\n')
          );
        } else if (err.code === 2) {
          setGeoError('Position unavailable. Try the map or check your device settings.');
        } else {
          setGeoError('Could not get your location in time. Try again or use the map.');
        }
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 60000 }
    );
  };

  // Render only Indiana boundary. The map itself will be clamped to these bounds.
  const indianaMask = indianaBoundary as unknown as GeoJsonObject;

  /** On small screens, Continue hides the map to show charts; On-Farm Trials needs the map to pick a region. */
  const showMapPanel =
    !isMobile || mobileMapOpen || !showAONR || (resultsSection === 'trials' && mobileTrialsView === 'map');

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <AnimatePresence mode="wait">
        {!showDashboard ? (
          <motion.div
            key="pre-dashboard"
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] overflow-y-auto overflow-x-hidden overscroll-y-contain bg-black text-[#CEB888]"
          >
            <div
              className="flex min-h-full w-full flex-col items-center justify-center px-4 py-10 text-center"
              style={{
                paddingTop: 'max(2.5rem, env(safe-area-inset-top))',
                paddingBottom: 'max(2.5rem, env(safe-area-inset-bottom))',
              }}
            >
            <h1 className="mb-6 max-w-4xl font-sans text-2xl font-black uppercase leading-tight tracking-tight text-[#CEB888] sm:mb-8 sm:text-3xl md:mb-10 md:text-5xl md:leading-[1.15] md:tracking-wide lg:text-6xl">
              <span className="block">Optimum nitrogen rate</span>
              <span className="mt-2 block text-white md:mt-3">for corn</span>
            </h1>
            {!showLocationOptions ? (
              <motion.button
                type="button"
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 520, damping: 32 }}
                onClick={() => setShowLocationOptions(true)}
                style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
                className="relative z-10 shrink-0 cursor-pointer rounded-full bg-[#CEB888] px-8 py-4 text-lg font-bold text-black shadow-[0_0_30px_rgba(206,184,136,0.3)] sm:px-10 sm:py-5 sm:text-xl sm:hover:scale-105"
              >
                Start Analysis →
              </motion.button>
            ) : (
              <div className="flex w-full max-w-lg flex-col gap-6">
                <p className="text-center text-sm font-semibold uppercase tracking-widest text-[#CEB888]/90">
                  How do you want to choose your field?
                </p>
                {geoSecureContext === false && (
                  <p className="rounded-xl border border-amber-500/35 bg-amber-950/30 px-4 py-3 text-left text-xs leading-relaxed text-amber-100">
                    <span className="font-bold text-amber-200">GPS on your phone: </span>
                    This page is opened as <strong className="text-amber-200">http://</strong> on a network
                    address. Browsers <strong>will not show</strong> the location allow/deny sheet for that—use{' '}
                    <strong>Select location on map</strong>. For GPS, use <strong>https://</strong> (production)
                    or <strong>localhost</strong> on your computer.
                  </p>
                )}
                <div className="grid gap-4 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={handleChooseMapSelection}
                    style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
                    className="flex flex-col items-center gap-4 rounded-2xl border-2 border-[#CEB888]/40 bg-black/40 px-6 py-8 text-center transition hover:border-[#CEB888] hover:bg-[#CEB888]/10"
                  >
                    <IndianaMapOptionIcon className="h-16 w-16 text-[#CEB888]" />
                    <span className="text-sm font-bold uppercase leading-snug text-white">
                      Select location on map
                    </span>
                    <span className="text-xs font-medium text-[#CEB888]/80">Indiana grid</span>
                  </button>
                  <button
                    type="button"
                    disabled={geoLocating}
                    onClick={handleChooseCurrentLocation}
                    style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
                    className="flex flex-col items-center gap-4 rounded-2xl border-2 border-[#CEB888]/40 bg-black/40 px-6 py-8 text-center transition hover:border-[#CEB888] hover:bg-[#CEB888]/10 disabled:cursor-wait disabled:opacity-60"
                  >
                    <CompassLocationIcon className="h-16 w-16 text-[#CEB888]" />
                    <span className="text-sm font-bold uppercase leading-snug text-white">
                      Use current location
                    </span>
                    <span className="text-xs font-medium text-[#CEB888]/80">
                      {geoLocating ? 'Getting location…' : 'GPS — Indiana only'}
                    </span>
                  </button>
                </div>
                {geoError && (
                  <p className="max-h-[40vh] overflow-y-auto rounded-xl border border-rose-500/40 bg-rose-950/40 px-4 py-3 text-left text-sm leading-relaxed text-rose-100 whitespace-pre-line">
                    {geoError}
                  </p>
                )}
                <button
                  type="button"
                  onClick={() => {
                    setShowLocationOptions(false);
                    setGeoError(null);
                  }}
                  className="text-center text-xs font-bold uppercase tracking-wide text-white/70 underline-offset-4 transition hover:text-white hover:underline"
                >
                  ← Back
                </button>
              </div>
            )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="dashboard"
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, pointerEvents: 'none' }}
            transition={{ duration: 0.2 }}
          >
            <nav className="sticky top-0 z-[1200] flex items-center justify-between border-b-4 border-black bg-[#CEB888] p-4 shadow-md">
              <div className="flex items-center gap-3">
                <Image
                  src="/logos/indnrate-new.png"
                  alt="INDNRATE logo"
                  width={80}
                  height={80}
                  className="h-12 w-12 object-contain md:h-16 md:w-16"
                  priority
                />
                <Image
                  src="/logos/purdue-wordmark.svg"
                  alt="Purdue University"
                  className="h-8 w-auto md:h-10"
                  width={160}
                  height={40}
                  priority
                />
              </div>
              <button
                onClick={() => setShowDashboard(false)}
                className="text-xs font-bold uppercase underline transition-opacity hover:opacity-70"
              >
                Back to Home
              </button>
            </nav>

            <main className="container mx-auto px-6 py-12">
              <div className="grid items-start gap-10 lg:grid-cols-12">
                {showMapPanel && (
                  <div ref={mapPanelRef} className="lg:col-span-5 lg:sticky lg:top-28">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                    <div className="relative z-0 aspect-[3/4] overflow-hidden rounded-xl border-2 border-black">
                      <MapContainer
                        key={isMobile ? 'ind-map-mobile' : 'ind-map-desktop'}
                        center={[39.774333, -86.430955]}
                        zoom={isMobile ? 6.3 : 7}
                        minZoom={isMobile ? 6.3 : 7}
                        bounds={[
                          [37.788942, -88.060345],
                          [41.759724, -84.801565],
                        ]}
                        maxBounds={[
                          [37.788942, -88.060345],
                          [41.759724, -84.801565],
                        ]}
                        maxBoundsViscosity={1}
                        worldCopyJump
                        style={{
                          height: '100%',
                          width: '100%',
                          backgroundColor: 'white',
                        }}
                      >
                        <ProviderTiles provider="OpenStreetMap.Mapnik" />
                        <MapInvalidateSize trigger={`${showMapPanel}-${resultsSection}`} />
                        <MapTapToContinue onTap={handleMapInteraction} />
                        {(!showAONR || resultsSection === 'optimize') && (
                          <CellsLayer selectedCellId={selectedCellId} onSelectCell={setSelectedCellId} />
                        )}
                        {showAONR && resultsSection === 'trials' && (
                          <CountiesLayer
                            selectedCountyName={selectedCountyName}
                            onSelectCounty={(name, region, fillColor) => {
                              setSelectedCountyName(name);
                              setSelectedCountyRegion(region);
                              setSelectedRegionMapColor(fillColor);
                              if (isMobile) {
                                setMobileTrialsView('results');
                                setMobileMapOpen(false);
                                requestAnimationFrame(() => {
                                  aonrRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                });
                              }
                            }}
                            onLoadError={setCountiesMapError}
                          />
                        )}
                        <GeoJSON
                          data={indianaMask}
                          interactive={false}
                          style={{
                            fillOpacity: 0,
                            color: '#CEB888',
                            weight: 5,
                          }}
                        />
                      </MapContainer>
                    </div>

                    {!showAONR && (
                      <div className="mt-4">
                        <button
                          disabled={!continueEnabled}
                          onClick={handleContinue}
                          className={`w-full rounded-xl px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors ${
                            continueEnabled
                              ? 'bg-emerald-500 text-white hover:bg-emerald-400'
                              : 'cursor-not-allowed bg-slate-200 text-slate-500'
                          }`}
                        >
                          Continue
                        </button>
                        <p className="mt-3 text-center text-xs text-slate-500">
                          Tap the map to continue
                        </p>
                      </div>
                    )}
                  </div>
                  </div>
                )}

                <div className="space-y-12 pb-32 lg:col-span-7">
                  {showAONR && (
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                      <div className="grid gap-6 md:grid-cols-2">
                        <PriceInput
                          label="N-Price ($/lb)"
                          value={nPrice}
                          min={0.2}
                          max={1.5}
                          step={0.01}
                          onChange={setNPrice}
                          color="accent-black"
                        />
                        <PriceInput
                          label="Corn Price ($/bu)"
                          value={cornPrice}
                          min={3}
                          max={10}
                          step={0.1}
                          onChange={setCornPrice}
                          color="accent-green-600"
                        />
                      </div>
                    </div>
                  )}
                  <div ref={aonrRef} className="mb-4 flex flex-wrap justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setResultsSection('optimize');
                        setMobileTrialsView('map');
                      }}
                      className={`inline-flex items-center rounded-2xl px-4 py-3 text-[11px] font-bold uppercase tracking-wide transition md:text-xs ${
                        resultsSection === 'optimize'
                          ? 'bg-[#CEB888] text-black shadow-sm'
                          : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      Optimize Your Nitrogen Rate
                    </button>
                    <button
                      type="button"
                      disabled={!showAONR}
                      onClick={() => {
                        setResultsSection('trials');
                        if (isMobile) setMobileTrialsView('map');
                      }}
                      className={`inline-flex items-center rounded-2xl px-4 py-3 text-[11px] font-bold uppercase tracking-wide transition md:text-xs ${
                        !showAONR
                          ? 'cursor-not-allowed border border-slate-200 bg-slate-200 text-slate-500'
                          : resultsSection === 'trials'
                            ? 'bg-[#CEB888] text-black shadow-sm'
                            : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      On-Farm Trials
                    </button>
                  </div>

                  {!showAONR ? (
                    <div className="hidden lg:block">
                      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl sm:p-6 lg:p-10">
                        <DualAxisNitrogenChart
                          points={
                            selectedCellId !== null && dualCurveData.length > 0
                              ? dualCurveData
                              : PREVIEW_DUAL_POINTS
                          }
                          eonrX={null}
                          aonrX={null}
                          isMobile={false}
                          hideCurve
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      {resultsSection === 'optimize' ? (
                        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl sm:p-6 lg:p-10">
                          {cellDataError && (
                            <p className="mb-6 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700">
                              Backend error: {cellDataError}
                            </p>
                          )}
                          <div className="relative">
                            {!cellDataError && dualCurveData.length > 1 && (
                              <DualAxisNitrogenChart
                                points={dualCurveData}
                                eonrX={eonrRow?.nitroLbAc ?? null}
                                aonrX={aonrRow?.nitroLbAc ?? null}
                                isMobile={isMobile}
                              />
                            )}
                            {cellDataLoading && (
                              <SimulationLoadingOverlay
                                showBackendWake={showBackendWakeUi}
                                statusMessage={LOADING_STATUS_MESSAGES[loadingWakeMessageIndex]}
                              />
                            )}
                          </div>
                          {!cellDataError && (
                            <div className="mt-4 grid grid-cols-1 gap-2 sm:mt-5 sm:grid-cols-2 sm:gap-2">
                              <div
                                className="flex min-h-[132px] min-w-0 flex-col justify-center rounded-2xl border border-black/15 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_1px_3px_rgba(0,0,0,0.12)] sm:min-h-[138px] sm:p-2.5"
                                style={{ background: PURDUE_HEADER_BEIGE_PANEL }}
                              >
                                <EonrTachometerGauge
                                  eonrLbAc={eonrRow?.nitroLbAc ?? null}
                                  minRate={eonrGaugeScale.min}
                                  maxRate={eonrGaugeScale.max}
                                  isMobile={isMobile}
                                />
                              </div>
                              <div
                                className="flex min-h-[132px] min-w-0 flex-col justify-center rounded-2xl border border-black/15 p-2 text-right shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_1px_3px_rgba(0,0,0,0.12)] sm:min-h-[138px] sm:p-2.5"
                                style={{ background: PURDUE_HEADER_BEIGE_PANEL }}
                              >
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-950">
                                  Price ratio
                                </p>
                                <p className="mt-0.5 text-xs font-medium text-stone-900">N / Corn</p>
                                <p className="mt-1.5 border-t border-black/15 pt-1.5 font-mono text-[1.2rem] font-semibold leading-none tracking-tight text-stone-950 tabular-nums sm:text-[1.3rem]">
                                  {priceRatio === null ? '—' : priceRatio.toFixed(3)}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <section
                          className="overflow-hidden rounded-3xl border border-dashed border-slate-300 bg-slate-50/80 p-8 shadow-inner sm:p-10"
                          aria-labelledby="on-farm-trials-heading"
                        >
                          {countiesMapError && (
                            <p className="mt-3 text-sm text-red-700" role="alert">
                              {countiesMapError}
                            </p>
                          )}
                          {isMobile && mobileTrialsView === 'map' && !countiesMapError && (
                            <p className="mt-6 rounded-xl border border-slate-200 bg-white px-4 py-5 text-center text-sm text-slate-600 shadow-sm">
                              Select your region on the map, then tap Continue.
                            </p>
                          )}
                          {!isMobile || mobileTrialsView === 'results' ? (
                            <div className="mt-8">
                              {!trialsRegionApiParam && (
                                <EonrHistogramEmptyChart isMobile={isMobile} />
                              )}
                              {trialsRegionApiParam &&
                                eonrHistogramLoading &&
                                eonrHistogramBins.length === 0 && (
                                <div
                                  className="flex min-h-[200px] flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-slate-200 bg-white/60 px-6 py-10"
                                  aria-busy
                                >
                                  <div
                                    className="h-9 w-9 shrink-0 animate-spin rounded-full border-4"
                                    style={{
                                      borderColor: `${selectedRegionMapColor ?? DEFAULT_HISTOGRAM_ACCENT}35`,
                                      borderTopColor: selectedRegionMapColor ?? DEFAULT_HISTOGRAM_ACCENT,
                                    }}
                                    aria-hidden
                                  />
                                  <p className="text-center text-sm font-medium text-slate-600">
                                    Loading EONR trial counts for region {trialsRegionDisplayLabel}…
                                  </p>
                                </div>
                              )}
                              {trialsRegionApiParam && eonrHistogramError && !eonrHistogramLoading && (
                                <p className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-800">
                                  {eonrHistogramError}
                                </p>
                              )}
                              {trialsRegionApiParam &&
                                !eonrHistogramLoading &&
                                !eonrHistogramError &&
                                eonrHistogramBins.length === 0 && (
                                  <p className="rounded-xl border border-slate-200 bg-white px-4 py-5 text-center text-sm text-slate-600 shadow-sm">
                                    No EONR histogram data for this region yet. The database may still
                                    be filling in trial summaries, or the region code may not match
                                    the backend.
                                  </p>
                                )}
                              {trialsRegionApiParam && eonrHistogramBins.length > 0 && (
                                <div className="relative">
                                  <EonrHistogramChart
                                    bins={eonrHistogramBins}
                                    regionLabel={trialsRegionDisplayLabel ?? trialsRegionApiParam}
                                    isMobile={isMobile}
                                    accentHex={selectedRegionMapColor ?? DEFAULT_HISTOGRAM_ACCENT}
                                  />
                                  {eonrHistogramLoading && (
                                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-2xl bg-white/35 backdrop-blur-[1px]">
                                      <div
                                        className="h-9 w-9 shrink-0 animate-spin rounded-full border-4"
                                        style={{
                                          borderColor: `${selectedRegionMapColor ?? DEFAULT_HISTOGRAM_ACCENT}35`,
                                          borderTopColor: selectedRegionMapColor ?? DEFAULT_HISTOGRAM_ACCENT,
                                        }}
                                        aria-label="Updating histogram"
                                      />
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          ) : null}
                        </section>
                      )}
                    </>
                  )}
                </div>
              </div>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
      {isMobile && showAONR && !mobileMapOpen && (
        <button
          type="button"
          onClick={handleOpenMapFromFloatingButton}
          className="fixed bottom-5 right-5 z-[300] inline-flex items-center gap-2 rounded-full bg-[#CEB888] px-4 py-3 text-sm font-semibold text-black shadow-lg transition hover:opacity-90"
        >
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="h-4 w-4 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3.8 6.2 11.9 3l8.3 3.2v11.6L12 21l-8.2-3.2z" />
            <path d="M11.9 3v18" />
            <path d="M20.2 6.2 12 9.3 3.8 6.2" />
          </svg>
          Select another location
        </button>
      )}
    </div>
  );
}

function IndianaMapOptionIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      {/* Stylized Indiana outline + map frame */}
      <rect x="6" y="10" width="52" height="44" rx="4" />
      <path
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        d="M22 18h14l2 4v24l-3 6H24l-3-5V22z"
      />
      <circle cx="44" cy="24" r="3.5" fill="currentColor" stroke="none" />
      <path d="M44 27.5v8M40 34h8" strokeWidth="1.5" />
    </svg>
  );
}

function CompassLocationIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="32" cy="34" r="22" />
      <path d="M32 12v6M32 50v6M10 34h6M48 34h6" strokeLinecap="round" />
      <path
        fill="currentColor"
        fillOpacity="0.25"
        stroke="currentColor"
        strokeLinejoin="round"
        d="m32 18 8 20-8 6-8-6z"
      />
      <text x="32" y="15" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="700">
        N
      </text>
    </svg>
  );
}

type PriceInputProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  color: string;
};

type DualRatePoint = { x: number; yield: number; profit: number };

type PreviewYieldPoint = { x: number; y: number };
const PREVIEW_PLOT_POINTS: PreviewYieldPoint[] = [
  { x: 100, y: 170 },
  { x: 125, y: 182 },
  { x: 150, y: 198 },
  { x: 175, y: 212 },
  { x: 200, y: 225 },
  { x: 225, y: 236 },
  { x: 250, y: 245 },
  { x: 275, y: 252 },
  { x: 300, y: 258 },
];

const PREVIEW_DUAL_POINTS: DualRatePoint[] = PREVIEW_PLOT_POINTS.map((p) => ({
  x: p.x,
  yield: p.y,
  profit: 4.5 * p.y - 0.65 * p.x,
}));

function interpolateDualAtX(points: DualRatePoint[], x: number): DualRatePoint | null {
  if (points.length === 0) return null;
  if (x <= points[0]!.x) return points[0]!;
  const last = points[points.length - 1]!;
  if (x >= last.x) return last;
  for (let i = 0; i < points.length - 1; i++) {
    const a = points[i]!;
    const b = points[i + 1]!;
    if (x >= a.x && x <= b.x) {
      const t = (x - a.x) / (b.x - a.x || 1);
      return {
        x,
        yield: a.yield + t * (b.yield - a.yield),
        profit: a.profit + t * (b.profit - a.profit),
      };
    }
  }
  return null;
}

function sampleDualPoints(points: DualRatePoint[], count: number): DualRatePoint[] {
  if (points.length === 0) return [];
  if (points.length === 1) return Array.from({ length: count }, () => points[0]!);
  if (count <= 1) return [points[0]!];

  return Array.from({ length: count }, (_, index) => {
    const t = index / (count - 1);
    const scaled = t * (points.length - 1);
    const i0 = Math.floor(scaled);
    const i1 = Math.min(points.length - 1, i0 + 1);
    const localT = scaled - i0;
    const p0 = points[i0]!;
    const p1 = points[i1]!;
    return {
      x: p0.x + (p1.x - p0.x) * localT,
      yield: p0.yield + (p1.yield - p0.yield) * localT,
      profit: p0.profit + (p1.profit - p0.profit) * localT,
    };
  });
}

type DualAxisNitrogenChartProps = {
  points: DualRatePoint[];
  eonrX: number | null;
  aonrX: number | null;
  isMobile: boolean;
  hideCurve?: boolean;
};

function DualAxisNitrogenChart({
  points,
  eonrX,
  aonrX,
  isMobile,
  hideCurve = false,
}: DualAxisNitrogenChartProps) {
  const sampleCount = 48;
  const targetPoints = useMemo(() => sampleDualPoints(points, sampleCount), [points]);
  const [animatedPoints, setAnimatedPoints] = useState<DualRatePoint[]>(targetPoints);
  const previousPointsRef = useRef<DualRatePoint[]>(targetPoints);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  useEffect(() => {
    if (targetPoints.length === 0) {
      previousPointsRef.current = [];
      return;
    }

    const start =
      previousPointsRef.current.length === targetPoints.length
        ? previousPointsRef.current
        : sampleDualPoints(previousPointsRef.current, targetPoints.length);
    const end = targetPoints;
    const durationMs = 520;
    const animationStart = performance.now();
    let rafId = 0;

    const step = (now: number) => {
      const t = Math.min(1, (now - animationStart) / durationMs);
      const eased = 1 - (1 - t) ** 3;
      const frame = end.map((to, i) => {
        const from = start[i] ?? to;
        return {
          x: from.x + (to.x - from.x) * eased,
          yield: from.yield + (to.yield - from.yield) * eased,
          profit: from.profit + (to.profit - from.profit) * eased,
        };
      });
      setAnimatedPoints(frame);

      if (t < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        previousPointsRef.current = end;
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [targetPoints]);

  const width = isMobile ? 430 : 820;
  const height = isMobile ? 420 : 330;
  /** Mobile: extra margin so rotated Y titles don’t sit on top of tick numerals. */
  const padLeft = isMobile ? 86 : 72;
  const padRight = isMobile ? 86 : 68;
  const padTop = isMobile ? 18 : 22;
  const padBottom = isMobile ? 62 : 56;
  const profitTickX = padLeft - (isMobile ? 10 : 8);
  const yieldTickX = width - padRight + (isMobile ? 6 : 8);

  if (animatedPoints.length < 2) return null;

  const xMax = Math.max(...animatedPoints.map((p) => p.x));
  /** Nitrogen axis always starts at 0 lb/ac so the scale isn’t cropped to the first simulation point. */
  const xMin = 0;
  const profitMinRaw = Math.min(...animatedPoints.map((p) => p.profit));
  const profitMaxRaw = Math.max(...animatedPoints.map((p) => p.profit));
  const yieldMinRaw = Math.min(...animatedPoints.map((p) => p.yield));
  const yieldMaxRaw = Math.max(...animatedPoints.map((p) => p.yield));

  const profitPad = Math.max((profitMaxRaw - profitMinRaw) * 0.08, 1);
  const yieldPad = Math.max((yieldMaxRaw - yieldMinRaw) * 0.08, 1);
  const profitMin = profitMinRaw - profitPad;
  const profitMax = profitMaxRaw + profitPad;
  const yieldMin = Math.max(0, yieldMinRaw - yieldPad);
  const yieldMax = yieldMaxRaw + yieldPad;
  const profitRange = profitMax - profitMin || 1;
  const yieldRange = yieldMax - yieldMin || 1;
  const xRange = xMax - xMin || 1;
  const plotH = height - padTop - padBottom;

  const sx = (x: number) => padLeft + ((x - xMin) / xRange) * (width - padLeft - padRight);
  const syProfit = (v: number) =>
    height - padBottom - ((v - profitMin) / profitRange) * plotH;
  const syYield = (v: number) =>
    height - padBottom - ((v - yieldMin) / yieldRange) * plotH;

  const pathProfit = animatedPoints
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${sx(p.x).toFixed(2)} ${syProfit(p.profit).toFixed(2)}`)
    .join(' ');
  const pathYield = animatedPoints
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${sx(p.x).toFixed(2)} ${syYield(p.yield).toFixed(2)}`)
    .join(' ');

  const eonrPt = eonrX !== null ? interpolateDualAtX(points, eonrX) : null;
  const aonrPt = aonrX !== null ? interpolateDualAtX(points, aonrX) : null;

  const hoveredPoint =
    hoverIndex !== null && hoverIndex >= 0 && hoverIndex < points.length
      ? points[hoverIndex]
      : null;

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const svg = svgRef.current;
    if (!svg || points.length === 0) return;

    const rect = svg.getBoundingClientRect();
    const pointerX = ((e.clientX - rect.left) / rect.width) * width;

    let bestIdx = 0;
    let bestDist = Number.POSITIVE_INFINITY;
    for (let i = 0; i < points.length; i += 1) {
      const dist = Math.abs(sx(points[i].x) - pointerX);
      if (dist < bestDist) {
        bestDist = dist;
        bestIdx = i;
      }
    }
    setHoverIndex(bestIdx);
  };

  const labelCls = isMobile ? 'fill-slate-500 text-[10px] tabular-nums' : 'fill-slate-500 text-[11px]';
  const titleCls = isMobile ? 'fill-slate-700 text-[14px] font-semibold' : 'fill-slate-700 text-[12px] font-semibold';

  return (
    <div className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-0 sm:p-4">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${width} ${height}`}
        className="h-auto w-full cursor-crosshair"
        role="img"
        aria-label="Nitrogen response: profit and yield versus nitrogen rate"
        onMouseMove={hideCurve ? undefined : handleMouseMove}
        onMouseLeave={() => (hideCurve ? null : setHoverIndex(null))}
      >
        <line
          x1={padLeft}
          y1={height - padBottom}
          x2={width - padRight}
          y2={height - padBottom}
          stroke="#94a3b8"
          strokeWidth="1.5"
        />
        <line
          x1={padLeft}
          y1={padTop}
          x2={padLeft}
          y2={height - padBottom}
          stroke="#94a3b8"
          strokeWidth="1.5"
        />
        <line
          x1={width - padRight}
          y1={padTop}
          x2={width - padRight}
          y2={height - padBottom}
          stroke="#cbd5e1"
          strokeWidth="1"
        />

        {[0, 0.25, 0.5, 0.75, 1].map((t) => {
          const profitVal = profitMin + t * profitRange;
          const yPos = syProfit(profitVal);
          return (
            <g key={`p-${t}`}>
              <line
                x1={padLeft}
                y1={yPos}
                x2={width - padRight}
                y2={yPos}
                stroke="#e2e8f0"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <text x={profitTickX} y={yPos + 4} textAnchor="end" className={labelCls}>
                ${profitVal.toFixed(0)}
              </text>
            </g>
          );
        })}

        {[0, 0.25, 0.5, 0.75, 1].map((t) => {
          const yieldVal = yieldMin + t * yieldRange;
          const yPos = syYield(yieldVal);
          return (
            <text
              key={`y-${t}`}
              x={yieldTickX}
              y={yPos + 4}
              textAnchor="start"
              className={labelCls}
            >
              {yieldVal.toFixed(0)}
            </text>
          );
        })}

        {[0, 0.25, 0.5, 0.75, 1].map((t) => {
          const xValue = xMin + t * xRange;
          const xPos = sx(xValue);
          return (
            <g key={`x-${t}`}>
              <line
                x1={xPos}
                y1={padTop}
                x2={xPos}
                y2={height - padBottom}
                stroke="#f1f5f9"
                strokeWidth="1"
              />
              <text
                x={xPos}
                y={height - padBottom + (isMobile ? 24 : 20)}
                textAnchor="middle"
                className={labelCls}
              >
                {xValue.toFixed(0)}
              </text>
            </g>
          );
        })}

        {!hideCurve && (
          <>
            <path
              d={pathYield}
              fill="none"
              stroke="#93c5fd"
              strokeWidth={5}
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={0.45}
            />
            <path
              d={pathProfit}
              fill="none"
              stroke="#16a34a"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {aonrX !== null && aonrPt && (
              <circle
                cx={sx(aonrX)}
                cy={syYield(aonrPt.yield)}
                r={isMobile ? 6.5 : 7.5}
                fill="#3b82f6"
                stroke="#ffffff"
                strokeWidth={2.5}
              />
            )}
            {eonrX !== null && eonrPt && (
              <g>
                <line
                  x1={sx(eonrX)}
                  x2={sx(eonrX)}
                  y1={padTop}
                  y2={height - padBottom}
                  stroke="#15803d"
                  strokeWidth={2.5}
                  strokeOpacity={0.9}
                />
                <circle
                  cx={sx(eonrX)}
                  cy={syProfit(eonrPt.profit)}
                  r="7.5"
                  fill="#22c55e"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                />
              </g>
            )}

            {hoveredPoint && (
              <>
                <line
                  x1={sx(hoveredPoint.x)}
                  y1={padTop}
                  x2={sx(hoveredPoint.x)}
                  y2={height - padBottom}
                  stroke="#64748b"
                  strokeWidth="1.5"
                  strokeDasharray="5 5"
                />
                <circle
                  cx={sx(hoveredPoint.x)}
                  cy={syProfit(hoveredPoint.profit)}
                  r="5"
                  fill="#ffffff"
                  stroke="#16a34a"
                  strokeWidth="2"
                />
                <circle
                  cx={sx(hoveredPoint.x)}
                  cy={syYield(hoveredPoint.yield)}
                  r="5"
                  fill="#ffffff"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
              </>
            )}

            {hoveredPoint && (
              <g>
                <rect
                  x={Math.min(width - 240, sx(hoveredPoint.x) + 10)}
                  y={Math.max(padTop + 4, syProfit(hoveredPoint.profit) - 58)}
                  width="230"
                  height="52"
                  rx="8"
                  fill="rgba(15,23,42,0.92)"
                />
                <text
                  x={Math.min(width - 230, sx(hoveredPoint.x) + 18)}
                  y={Math.max(padTop + 22, syProfit(hoveredPoint.profit) - 40)}
                  className={isMobile ? 'fill-white text-[13px]' : 'fill-white text-[11px]'}
                >
                  N: {hoveredPoint.x.toFixed(1)} lb/ac
                </text>
                <text
                  x={Math.min(width - 230, sx(hoveredPoint.x) + 18)}
                  y={Math.max(padTop + 38, syProfit(hoveredPoint.profit) - 24)}
                  className={isMobile ? 'fill-emerald-200 text-[13px]' : 'fill-emerald-200 text-[11px]'}
                >
                  Profit: ${hoveredPoint.profit.toFixed(1)}/ac
                </text>
                <text
                  x={Math.min(width - 230, sx(hoveredPoint.x) + 18)}
                  y={Math.max(padTop + 54, syProfit(hoveredPoint.profit) - 8)}
                  className={isMobile ? 'fill-blue-200 text-[13px]' : 'fill-blue-200 text-[11px]'}
                >
                  Yield: {hoveredPoint.yield.toFixed(1)} bu/ac
                </text>
              </g>
            )}
          </>
        )}

        <text
          x={(padLeft + (width - padRight)) / 2}
          y={height - 10}
          textAnchor="middle"
          className={titleCls}
        >
          Nitrogen rate (lb/ac)
        </text>
        <text
          x={isMobile ? 11 : 22}
          y={height / 2}
          transform={`rotate(-90 ${isMobile ? 11 : 22} ${height / 2})`}
          textAnchor="middle"
          className={
            isMobile
              ? 'fill-emerald-800 text-[9px] font-semibold tracking-tight'
              : 'fill-emerald-800 text-[12px] font-semibold'
          }
        >
          Profit ($/ac)
        </text>
        <text
          x={isMobile ? width - 11 : width - 20}
          y={height / 2}
          transform={`rotate(-90 ${isMobile ? width - 11 : width - 20} ${height / 2})`}
          textAnchor="middle"
          className={
            isMobile
              ? 'fill-blue-800 text-[9px] font-semibold tracking-tight'
              : 'fill-blue-800 text-[12px] font-semibold'
          }
        >
          Yield (bu/ac)
        </text>
      </svg>
      {!hideCurve && (
        <div className="flex flex-wrap justify-center gap-4 px-2 pb-2 text-[11px] text-slate-600 sm:text-xs">
          <span className="inline-flex items-center gap-2">
            <span className="h-3 w-6 rounded-sm bg-emerald-600" aria-hidden />
            Profit (EONR highlighted)
          </span>
          <span className="inline-flex items-center gap-2">
            <span
              className="h-3 w-3 shrink-0 rounded-full border-2 border-white bg-blue-500 shadow-sm"
              aria-hidden
            />
            Yield (AONR point)
          </span>
        </div>
      )}
    </div>
  );
}

function PriceInput({ label, value, min, max, step, onChange, color }: PriceInputProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-xs font-black uppercase tracking-widest text-slate-500">
          {label}
        </label>
        <span className="rounded-lg border border-slate-200 bg-slate-100 px-3 py-1 font-mono text-xl font-bold">
          ${value.toFixed(2)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className={`h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 ${color}`}
      />
    </div>
  );
}

