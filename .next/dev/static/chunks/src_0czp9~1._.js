(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/json/indiana-boundary.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "type": "Feature",
    "id": "18",
    "properties": {
        "name": "Indiana",
        "density": 181.7
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                [
                    -85.990061,
                    41.759724
                ],
                [
                    -84.807042,
                    41.759724
                ],
                [
                    -84.807042,
                    41.694001
                ],
                [
                    -84.801565,
                    40.500028
                ],
                [
                    -84.817996,
                    39.103408
                ],
                [
                    -84.894673,
                    39.059592
                ],
                [
                    -84.812519,
                    38.785745
                ],
                [
                    -84.987781,
                    38.780268
                ],
                [
                    -85.173997,
                    38.68716
                ],
                [
                    -85.431413,
                    38.730976
                ],
                [
                    -85.42046,
                    38.533806
                ],
                [
                    -85.590245,
                    38.451652
                ],
                [
                    -85.655968,
                    38.325682
                ],
                [
                    -85.83123,
                    38.27639
                ],
                [
                    -85.924338,
                    38.024451
                ],
                [
                    -86.039354,
                    37.958727
                ],
                [
                    -86.263908,
                    38.051835
                ],
                [
                    -86.302247,
                    38.166851
                ],
                [
                    -86.521325,
                    38.040881
                ],
                [
                    -86.504894,
                    37.931343
                ],
                [
                    -86.729448,
                    37.893004
                ],
                [
                    -86.795172,
                    37.991589
                ],
                [
                    -87.047111,
                    37.893004
                ],
                [
                    -87.129265,
                    37.788942
                ],
                [
                    -87.381204,
                    37.93682
                ],
                [
                    -87.512651,
                    37.903958
                ],
                [
                    -87.600282,
                    37.975158
                ],
                [
                    -87.682436,
                    37.903958
                ],
                [
                    -87.934375,
                    37.893004
                ],
                [
                    -88.027483,
                    37.799896
                ],
                [
                    -88.060345,
                    37.865619
                ],
                [
                    -88.000098,
                    38.101128
                ],
                [
                    -87.923421,
                    38.15042
                ],
                [
                    -87.950806,
                    38.27639
                ],
                [
                    -87.83579,
                    38.292821
                ],
                [
                    -87.655051,
                    38.506421
                ],
                [
                    -87.62219,
                    38.637868
                ],
                [
                    -87.49622,
                    38.780268
                ],
                [
                    -87.512651,
                    38.95553
                ],
                [
                    -87.63862,
                    39.169131
                ],
                [
                    -87.529082,
                    39.34987
                ],
                [
                    -87.523605,
                    41.710431
                ],
                [
                    -87.42502,
                    41.644708
                ],
                [
                    -87.118311,
                    41.644708
                ],
                [
                    -86.822556,
                    41.759724
                ],
                [
                    -85.990061,
                    41.759724
                ]
            ]
        ]
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/indiana-app.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$json$2f$indiana$2d$boundary$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/json/indiana-boundary.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/hooks.js [app-client] (ecmascript)");
;
;
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const MapContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.MapContainer), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full min-h-[240px] w-full items-center justify-center bg-white text-slate-400",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/app/indiana-app.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
});
_c = MapContainer;
const GeoJSON = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.GeoJSON), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c1 = GeoJSON;
const LOADING_STATUS_MESSAGES = [
    '🌾 Analyzing field conditions for this region…',
    '🌱 Estimating optimal nitrogen rate…',
    '📊 Evaluating nitrogen response…',
    '🧪 Refining nitrogen recommendation…',
    '🚜 Finalizing your nitrogen response curve…'
];
function ProviderTiles({ provider }) {
    _s();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    const layerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProviderTiles.useEffect": ()=>{
            let cancelled = false;
            ({
                "ProviderTiles.useEffect": async ()=>{
                    const leaflet = await __turbopack_context__.A("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript, async loader)");
                    await __turbopack_context__.A("[project]/node_modules/leaflet-providers/leaflet-providers.js [app-client] (ecmascript, async loader)");
                    if (cancelled) return;
                    // `leaflet-providers` augments the Leaflet instance with `tileLayer.provider`.
                    // Depending on ESM/CommonJS interop, `leaflet` may be exposed via `.default` or directly.
                    const leafletTyped = leaflet;
                    const L = leafletTyped.default ?? leafletTyped;
                    const layer = L.tileLayer.provider(provider);
                    layerRef.current = layer;
                    layer.addTo(map);
                }
            })["ProviderTiles.useEffect"]();
            return ({
                "ProviderTiles.useEffect": ()=>{
                    cancelled = true;
                    if (layerRef.current) map.removeLayer(layerRef.current);
                    layerRef.current = null;
                }
            })["ProviderTiles.useEffect"];
        }
    }["ProviderTiles.useEffect"], [
        map,
        provider
    ]);
    return null;
}
_s(ProviderTiles, "LR6fCoKp6DG6vEMgQU9yy7rIuMU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
    ];
});
_c2 = ProviderTiles;
function SimulationLoadingOverlay({ showBackendWake, statusMessage }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none absolute inset-0 flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex max-w-sm flex-col items-center gap-4 rounded-2xl bg-white/70 px-6 py-6 text-center backdrop-blur-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-8 w-8 shrink-0 animate-spin rounded-full border-4 border-[#CEB888]/30 border-t-[#CEB888]",
                    "aria-label": "Loading"
                }, void 0, false, {
                    fileName: "[project]/src/app/indiana-app.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this),
                showBackendWake && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-medium leading-snug text-slate-800",
                    children: statusMessage
                }, void 0, false, {
                    fileName: "[project]/src/app/indiana-app.tsx",
                    lineNumber: 92,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/indiana-app.tsx",
            lineNumber: 86,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/indiana-app.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c3 = SimulationLoadingOverlay;
function MapTapToContinue({ onTap }) {
    _s1();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapEvents"])({
        click: {
            "MapTapToContinue.useMapEvents": ()=>onTap()
        }["MapTapToContinue.useMapEvents"]
    });
    return null;
}
_s1(MapTapToContinue, "Ld/tk8Iz8AdZhC1l7acENaOEoCo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapEvents"]
    ];
});
_c4 = MapTapToContinue;
/** After the map panel is shown (e.g. switching to On-Farm Trials on a phone), fix tile/layout sizing. */ function MapInvalidateSize({ trigger }) {
    _s2();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapInvalidateSize.useEffect": ()=>{
            const t = window.setTimeout({
                "MapInvalidateSize.useEffect.t": ()=>{
                    map.invalidateSize({
                        animate: true
                    });
                }
            }["MapInvalidateSize.useEffect.t"], 150);
            return ({
                "MapInvalidateSize.useEffect": ()=>window.clearTimeout(t)
            })["MapInvalidateSize.useEffect"];
        }
    }["MapInvalidateSize.useEffect"], [
        map,
        trigger
    ]);
    return null;
}
_s2(MapInvalidateSize, "IoceErwr5KVGS9kN4RQ1bOkYMAg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
    ];
});
_c5 = MapInvalidateSize;
function CellsLayer({ selectedCellId, onSelectCell }) {
    _s3();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    const [cells, setCells] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isMapReady, setIsMapReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "CellsLayer.useState": ()=>Boolean(map._loaded)
    }["CellsLayer.useState"]);
    const selectedCellIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(selectedCellId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CellsLayer.useEffect": ()=>{
            let cancelled = false;
            ({
                "CellsLayer.useEffect": async ()=>{
                    const res = await fetch('/json/cells_indiana.geojson');
                    if (!res.ok) throw new Error(`Failed to load cells: ${res.status}`);
                    if (cancelled) return;
                    const raw = await res.text();
                    if (cancelled) return;
                    setCells(JSON.parse(raw));
                }
            })["CellsLayer.useEffect"]();
            return ({
                "CellsLayer.useEffect": ()=>{
                    cancelled = true;
                }
            })["CellsLayer.useEffect"];
        }
    }["CellsLayer.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CellsLayer.useEffect": ()=>{
            selectedCellIdRef.current = selectedCellId;
        }
    }["CellsLayer.useEffect"], [
        selectedCellId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapEvents"])({
        load: {
            "CellsLayer.useMapEvents": ()=>setIsMapReady(true)
        }["CellsLayer.useMapEvents"]
    });
    if (!cells || !isMapReady) return null;
    const baseStyle = {
        // Use an almost-invisible fill so the whole cell captures hover (not just the border).
        fill: true,
        fillColor: '#ffffff',
        fillOpacity: 0.001,
        color: 'rgba(0,0,0,0.18)',
        weight: 0.75
    };
    const hoverStyle = {
        fill: true,
        fillColor: '#000000',
        fillOpacity: 0.28,
        color: 'rgba(0,0,0,0.9)',
        weight: 3
    };
    const selectedStyle = {
        fill: true,
        fillColor: '#000000',
        fillOpacity: 0.2,
        color: 'rgba(0,0,0,0.75)',
        weight: 2
    };
    const getCellId = (feature)=>{
        const f = feature;
        const id = f.properties?.id_cell;
        if (typeof id === 'number' && Number.isFinite(id)) return id;
        if (typeof id === 'string') {
            const parsed = Number(id);
            if (Number.isFinite(parsed)) return parsed;
        }
        return null;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GeoJSON, {
        data: cells,
        interactive: true,
        pane: "overlayPane",
        style: (feature)=>getCellId(feature) === selectedCellId ? selectedStyle : baseStyle,
        onEachFeature: (feature, layer)=>{
            layer.on({
                click: ()=>{
                    const l = layer;
                    const cellId = getCellId(feature);
                    if (cellId === null) return;
                    onSelectCell(cellId);
                    l.setStyle?.(selectedStyle);
                    l.bringToFront?.();
                },
                mouseover: ()=>{
                    const featureId = getCellId(feature);
                    const activeSelectedId = selectedCellIdRef.current;
                    // Before selection: all cells hover.
                    // After selection: only the selected cell keeps hover behavior.
                    if (activeSelectedId !== null && activeSelectedId !== featureId) return;
                    const l = layer;
                    l.setStyle?.(hoverStyle);
                    l.bringToFront?.();
                },
                mouseout: ()=>{
                    const l = layer;
                    const featureId = getCellId(feature);
                    const activeSelectedId = selectedCellIdRef.current;
                    if (activeSelectedId !== null && activeSelectedId === featureId) {
                        l.setStyle?.(selectedStyle);
                    } else {
                        l.setStyle?.(baseStyle);
                    }
                }
            });
        }
    }, void 0, false, {
        fileName: "[project]/src/app/indiana-app.tsx",
        lineNumber: 195,
        columnNumber: 5
    }, this);
}
_s3(CellsLayer, "n3Y48NUC1eqGgD94a4gKjoEeZzU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapEvents"]
    ];
});
_c6 = CellsLayer;
let countiesGeoJsonCache = null;
async function loadCountiesGeoJson() {
    if (countiesGeoJsonCache) return countiesGeoJsonCache;
    const res = await fetch('/json/regions_info.geojson');
    if (!res.ok) throw new Error(`Failed to load region map: ${res.status}`);
    const data = await res.json();
    if (!data || typeof data !== 'object' || data.type !== 'FeatureCollection') {
        throw new Error('Unexpected region map format.');
    }
    countiesGeoJsonCache = data;
    return countiesGeoJsonCache;
}
function getCountyFeatureProps(feature) {
    const p = feature.properties;
    const countyname = typeof p?.countyname === 'string' ? p.countyname : null;
    const region = typeof p?.region === 'string' ? p.region : null;
    const name = countyname ?? region;
    const fillColor = typeof p?.color === 'string' && /^#[0-9a-fA-F]{6}$/.test(p.color) ? p.color : '#94a3b8';
    return {
        name,
        region,
        fillColor
    };
}
function countyPathStyle(feature, selectedName, hover) {
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
        weight
    };
}
function CountiesLayer({ selectedCountyName, onSelectCounty, onLoadError }) {
    _s4();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    const [counties, setCounties] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadError, setLoadError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isMapReady, setIsMapReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "CountiesLayer.useState": ()=>Boolean(map._loaded)
    }["CountiesLayer.useState"]);
    const selectedNameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(selectedCountyName);
    const onLoadErrorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onLoadError);
    onLoadErrorRef.current = onLoadError;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CountiesLayer.useEffect": ()=>{
            selectedNameRef.current = selectedCountyName;
        }
    }["CountiesLayer.useEffect"], [
        selectedCountyName
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CountiesLayer.useEffect": ()=>{
            let cancelled = false;
            ({
                "CountiesLayer.useEffect": async ()=>{
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
                }
            })["CountiesLayer.useEffect"]();
            return ({
                "CountiesLayer.useEffect": ()=>{
                    cancelled = true;
                }
            })["CountiesLayer.useEffect"];
        }
    }["CountiesLayer.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapEvents"])({
        load: {
            "CountiesLayer.useMapEvents": ()=>setIsMapReady(true)
        }["CountiesLayer.useMapEvents"]
    });
    if (loadError) return null;
    if (!counties || !isMapReady) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GeoJSON, {
        data: counties,
        interactive: true,
        pane: "overlayPane",
        style: (feature)=>countyPathStyle(feature, selectedCountyName, false),
        onEachFeature: (feature, layer)=>{
            const { name, region, fillColor } = getCountyFeatureProps(feature);
            layer.on({
                click: ()=>{
                    if (name) onSelectCounty(name, region, fillColor);
                },
                mouseover: ()=>{
                    const l = layer;
                    const active = selectedNameRef.current;
                    if (name && active === name) return;
                    l.setStyle?.(countyPathStyle(feature, active, true));
                    l.bringToFront?.();
                },
                mouseout: ()=>{
                    const l = layer;
                    const active = selectedNameRef.current;
                    l.setStyle?.(countyPathStyle(feature, active, false));
                }
            });
        }
    }, selectedCountyName ?? 'none', false, {
        fileName: "[project]/src/app/indiana-app.tsx",
        lineNumber: 360,
        columnNumber: 5
    }, this);
}
_s4(CountiesLayer, "NI2RVNINqsv+VUi66/UiOjDJpnE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapEvents"]
    ];
});
_c7 = CountiesLayer;
const toNumber = (value)=>typeof value === 'number' && Number.isFinite(value) ? value : typeof value === 'string' ? (()=>{
        const n = Number(value.trim());
        return Number.isFinite(n) ? n : null;
    })() : null;
const pickNumber = (row, keys)=>{
    for (const key of keys){
        const v = toNumber(row[key]);
        if (v !== null) return v;
    }
    return null;
};
const normalizeSimulation = (raw)=>{
    if (!raw || typeof raw !== 'object') return null;
    const row = raw;
    const nitroKgHa = pickNumber(row, [
        'nitro_kg_ha',
        'NitroKgHa'
    ]);
    const yieldKgHa = pickNumber(row, [
        'yield_kg_ha',
        'YieldKgHa'
    ]);
    const nitroLbAc = pickNumber(row, [
        'nitro_lb_ac',
        'NitroLbAc'
    ]);
    const yieldBsAc = pickNumber(row, [
        'yield_bs_ac',
        'YieldBsAc'
    ]);
    const profitDol = pickNumber(row, [
        'profit_dol',
        'Profit_dol',
        'ProfitDol',
        'profit'
    ]);
    // Keep row if N-rate exists. Profit can be computed later from yield+prices if provided.
    if (nitroLbAc === null) {
        return null;
    }
    return {
        nitroKgHa,
        yieldKgHa,
        nitroLbAc,
        yieldBsAc,
        profitDol
    };
};
/**
 * Summary stats from binned histogram data: bin midpoints for mean/std; uniform
 * distribution within each bin for min/max and quantiles.
 */ function computeEonrHistogramStats(bins) {
    const sorted = [
        ...bins
    ].filter((b)=>b.count > 0).sort((a, b)=>a.lo - b.lo);
    if (sorted.length === 0) return null;
    const total = sorted.reduce((s, b)=>s + b.count, 0);
    if (total === 0) return null;
    const min = sorted[0].lo;
    const max = sorted[sorted.length - 1].hi;
    const mid = (b)=>(b.lo + b.hi) / 2;
    let sum = 0;
    let sumSq = 0;
    for (const b of sorted){
        const m = mid(b);
        sum += m * b.count;
        sumSq += m * m * b.count;
    }
    const mean = sum / total;
    let sumDevSq = 0;
    for (const b of sorted){
        const m = mid(b);
        sumDevSq += b.count * (m - mean) ** 2;
    }
    const stdDev = total > 1 ? Math.sqrt(sumDevSq / (total - 1)) : 0;
    const quantile = (q)=>{
        if (q <= 0) return min;
        if (q >= 1) return max;
        const target = q * total;
        let cum = 0;
        for (const b of sorted){
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
        stdDev
    };
}
function binNitrogenObservations(rates, binWidthLbAc) {
    if (rates.length === 0 || !(binWidthLbAc > 0)) return [];
    const min = Math.min(...rates);
    const max = Math.max(...rates);
    const lo0 = Math.floor(min / binWidthLbAc) * binWidthLbAc;
    const hiEdge = Math.ceil(max / binWidthLbAc) * binWidthLbAc;
    const nBins = Math.max(1, Math.round((hiEdge - lo0) / binWidthLbAc));
    const counts = new Array(nBins).fill(0);
    for (const r of rates){
        let i = Math.floor((r - lo0) / binWidthLbAc);
        if (i < 0) i = 0;
        if (i >= nBins) i = nBins - 1;
        counts[i]++;
    }
    return counts.map((count, i)=>({
            lo: lo0 + i * binWidthLbAc,
            hi: lo0 + (i + 1) * binWidthLbAc,
            count
        })).filter((b)=>b.count > 0);
}
function tryParseHistogramRow(row) {
    const count = pickNumber(row, [
        'count',
        'n',
        'freq',
        'frequency',
        'trials',
        'num'
    ]);
    if (count === null || count < 0) return null;
    const c = Math.max(0, Math.round(count));
    if (c === 0) return null;
    const lo = pickNumber(row, [
        'bin_low',
        'lo',
        'min',
        'from',
        'start',
        'edge_left',
        'left'
    ]) ?? pickNumber(row, [
        'bin_start',
        'lower'
    ]);
    const hi = pickNumber(row, [
        'bin_high',
        'hi',
        'max',
        'to',
        'end',
        'edge_right',
        'right'
    ]) ?? pickNumber(row, [
        'bin_end',
        'upper'
    ]);
    if (lo !== null && hi !== null && hi > lo) {
        return {
            lo,
            hi,
            count: c
        };
    }
    const center = pickNumber(row, [
        'eonr_lb_ac',
        'nitro_lb_ac',
        'n_rate',
        'rate',
        'mid',
        'x',
        'eonr',
        'center'
    ]);
    if (center !== null) {
        const half = pickNumber(row, [
            'half_width',
            'bin_half',
            'width'
        ]) ?? 5;
        return {
            lo: center - half,
            hi: center + half,
            count: c
        };
    }
    return null;
}
function parseBinnedRows(rows) {
    const out = [];
    for (const row of rows){
        if (!row || typeof row !== 'object' || Array.isArray(row)) continue;
        const b = tryParseHistogramRow(row);
        if (b) out.push(b);
    }
    return out.sort((a, b)=>a.lo - b.lo);
}
/** Backend `/onfarmtrials/eonr_count` returns trial rows with `eonr` (lb/ac) and `profit`. */ function extractEonrRatesFromTrialRows(rows) {
    const rates = [];
    for (const row of rows){
        if (!row || typeof row !== 'object' || Array.isArray(row)) continue;
        const e = pickNumber(row, [
            'eonr',
            'Eonr',
            'EONR',
            'eonr_lb_ac'
        ]);
        if (e !== null && e >= 0) rates.push(e);
    }
    return rates;
}
/** Accepts several backend shapes: pre-binned rows, N-rate keys, raw observation list, numpy-style edges/counts. */ function parseEonrCountPayload(raw, binWidthFallback = 25) {
    if (raw === null || raw === undefined) return [];
    if (Array.isArray(raw)) {
        if (raw.length === 0) return [];
        const fromTrials = extractEonrRatesFromTrialRows(raw);
        if (fromTrials.length > 0) {
            return binNitrogenObservations(fromTrials, binWidthFallback);
        }
        if (raw.every((x)=>typeof x === 'number')) {
            return binNitrogenObservations(raw, binWidthFallback);
        }
        if (raw.every((x)=>Array.isArray(x) && x.length >= 2)) {
            const pairs = [];
            for (const pair of raw){
                const lo = toNumber(pair[0]);
                const c = toNumber(pair[1]);
                const maybeHi = pair.length >= 3 ? toNumber(pair[2]) : null;
                if (lo === null || c === null || c <= 0) continue;
                if (maybeHi !== null && maybeHi > lo) pairs.push({
                    lo,
                    hi: maybeHi,
                    count: Math.round(c)
                });
                else pairs.push({
                    lo,
                    hi: lo + binWidthFallback,
                    count: Math.round(c)
                });
            }
            return pairs.sort((a, b)=>a.lo - b.lo);
        }
        const fromObjects = parseBinnedRows(raw);
        if (fromObjects.length > 0) return fromObjects;
    }
    if (typeof raw === 'object' && !Array.isArray(raw)) {
        const o = raw;
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
            const bins = [];
            for(let i = 0; i < counts.length; i++){
                const lo = toNumber(edges[i]);
                const hi = toNumber(edges[i + 1]);
                const c = toNumber(counts[i]);
                if (lo === null || hi === null || c === null || hi <= lo || c <= 0) continue;
                bins.push({
                    lo,
                    hi,
                    count: Math.round(c)
                });
            }
            if (bins.length > 0) return bins;
        }
        const numericEntries = [];
        for (const [k, v] of Object.entries(o)){
            if (/^(-?\d+(\.\d+)?)$/.test(k) && typeof v === 'number' && Number.isFinite(v) && v > 0) {
                numericEntries.push({
                    rate: Number(k),
                    count: Math.round(v)
                });
            }
        }
        if (numericEntries.length >= 1) {
            numericEntries.sort((a, b)=>a.rate - b.rate);
            const bins = [];
            for(let i = 0; i < numericEntries.length; i++){
                const cur = numericEntries[i];
                const next = numericEntries[i + 1];
                const hi = next ? (cur.rate + next.rate) / 2 : cur.rate + binWidthFallback;
                const lo = i === 0 ? cur.rate - binWidthFallback / 2 : (numericEntries[i - 1].rate + cur.rate) / 2;
                bins.push({
                    lo,
                    hi,
                    count: cur.count
                });
            }
            return bins;
        }
    }
    return [];
}
const DEFAULT_HISTOGRAM_ACCENT = '#CEB888';
const REGION_DISPLAY_LABELS = {
    SW: 'South West',
    SE: 'South East',
    NW: 'North West',
    NE: 'North East',
    WC: 'West Center'
};
const DYNAMIC_SCENARIO_COLORS = [
    '#2563eb',
    '#d946ef',
    '#f59e0b',
    '#06b6d4',
    '#84cc16'
];
function monthLabelFromIsoDate(isoDate) {
    const parsed = new Date(`${isoDate}T00:00:00`);
    if (Number.isNaN(parsed.getTime())) return isoDate;
    return parsed.toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric'
    });
}
function fullDateLabelFromIsoDate(isoDate) {
    const parsed = new Date(`${isoDate}T00:00:00`);
    if (Number.isNaN(parsed.getTime())) return isoDate;
    return parsed.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}
function sliderTickLabelFromIsoDate(isoDate) {
    const parsed = new Date(`${isoDate}T00:00:00`);
    if (Number.isNaN(parsed.getTime())) return isoDate;
    return parsed.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: 'numeric'
    });
}
function parseDynamicPriceDataset(rawCsv) {
    const rows = rawCsv.split(/\r?\n/).map((line)=>line.trim()).filter((line)=>line.length > 0);
    if (rows.length <= 1) return [];
    const dateMap = new Map();
    for (const line of rows.slice(1)){
        const parts = line.split(',');
        if (parts.length < 5) continue;
        const dateIso = parts[1]?.trim() ?? '';
        const source = parts[2]?.trim() ?? '';
        const nitro = Number(parts[3]?.trim() ?? '');
        const corn = Number(parts[4]?.trim() ?? '');
        if (!/^\d{4}-\d{2}-\d{2}$/.test(dateIso)) continue;
        if (!source) continue;
        if (!Number.isFinite(nitro) || !Number.isFinite(corn)) continue;
        const existing = dateMap.get(dateIso) ?? {
            cornPrice: null,
            nitroBySource: {}
        };
        const sourceAgg = existing.nitroBySource[source] ?? {
            sum: 0,
            count: 0
        };
        sourceAgg.sum += nitro;
        sourceAgg.count += 1;
        existing.nitroBySource[source] = sourceAgg;
        if (existing.cornPrice === null) existing.cornPrice = corn;
        dateMap.set(dateIso, existing);
    }
    return Array.from(dateMap.entries()).map(([dateIso, agg])=>({
            dateIso,
            cornPrice: agg.cornPrice ?? 0,
            nitroBySource: Object.fromEntries(Object.entries(agg.nitroBySource).filter(([, v])=>v.count > 0).map(([src, v])=>[
                    src,
                    v.sum / v.count
                ]))
        })).filter((row)=>{
        if (!Number.isFinite(row.cornPrice)) return false;
        if (Object.keys(row.nitroBySource).length === 0) return false;
        return row.dateIso >= '2025-01-01' && row.dateIso <= '2026-04-30';
    }).sort((a, b)=>a.dateIso.localeCompare(b.dateIso));
}
function parseHexRgb(hex) {
    const m = /^#?([0-9a-fA-F]{6})$/.exec(hex.trim());
    if (!m) return null;
    const n = parseInt(m[1], 16);
    return [
        n >> 16 & 255,
        n >> 8 & 255,
        n & 255
    ];
}
function rgbToHex(r, g, b) {
    const c = (x)=>Math.max(0, Math.min(255, Math.round(x)));
    return `#${[
        c(r),
        c(g),
        c(b)
    ].map((x)=>x.toString(16).padStart(2, '0')).join('')}`;
}
function mixRgb(a, b, t) {
    return [
        a[0] + (b[0] - a[0]) * t,
        a[1] + (b[1] - a[1]) * t,
        a[2] + (b[2] - a[2]) * t
    ];
}
/** Bar fill gradient stops derived from the map region color. */ function regionHistogramBarGradient(hex) {
    const p = parseHexRgb(hex);
    if (!p) {
        return {
            dark: '#a88958',
            mid: DEFAULT_HISTOGRAM_ACCENT,
            light: '#e8dcc4'
        };
    }
    const dark = rgbToHex(p[0] * 0.68, p[1] * 0.68, p[2] * 0.68);
    const light = rgbToHex(...mixRgb(p, [
        255,
        255,
        255
    ], 0.42));
    return {
        dark,
        mid: rgbToHex(...p),
        light
    };
}
function EonrHistogramChart({ bins, regionLabel, isMobile, accentHex }) {
    _s5();
    const uid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])().replace(/:/g, '');
    const gradId = `eonrBarGrad-${uid}`;
    const filterId = `eonrBarShadow-${uid}`;
    const [hoveredBar, setHoveredBar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const barColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EonrHistogramChart.useMemo[barColors]": ()=>regionHistogramBarGradient(accentHex)
    }["EonrHistogramChart.useMemo[barColors]"], [
        accentHex
    ]);
    const maxCount = Math.max(...bins.map((b)=>b.count), 1);
    const width = isMobile ? 340 : 520;
    const height = isMobile ? 248 : 224;
    const padL = 46;
    const padR = 14;
    const padT = 36;
    const padB = 52;
    const chartW = width - padL - padR;
    const chartH = height - padT - padB;
    const xMin = Math.min(...bins.map((b)=>b.lo));
    const xMax = Math.max(...bins.map((b)=>b.hi));
    const xSpan = Math.max(xMax - xMin, 1);
    const xAt = (x)=>padL + (x - xMin) / xSpan * chartW;
    const yBase = padT + chartH;
    const yTicks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EonrHistogramChart.useMemo[yTicks]": ()=>{
            const steps = [
                0,
                0.25,
                0.5,
                0.75,
                1
            ];
            return steps.map({
                "EonrHistogramChart.useMemo[yTicks]": (t)=>({
                        y: yBase - t * chartH,
                        value: Math.round(maxCount * t),
                        t
                    })
            }["EonrHistogramChart.useMemo[yTicks]"]);
        }
    }["EonrHistogramChart.useMemo[yTicks]"], [
        chartH,
        maxCount,
        yBase
    ]);
    const xticks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EonrHistogramChart.useMemo[xticks]": ()=>{
            const n = isMobile ? 5 : 6;
            return Array.from({
                length: n
            }, {
                "EonrHistogramChart.useMemo[xticks]": (_, i)=>xMin + xSpan * i / (n - 1)
            }["EonrHistogramChart.useMemo[xticks]"]);
        }
    }["EonrHistogramChart.useMemo[xticks]"], [
        xMin,
        xSpan,
        isMobile
    ]);
    const cardTint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EonrHistogramChart.useMemo[cardTint]": ()=>{
            const p = parseHexRgb(accentHex);
            if (!p) return undefined;
            const soft = rgbToHex(...mixRgb(p, [
                255,
                255,
                255
            ], 0.88));
            return `linear-gradient(145deg, #ffffff 0%, rgb(248 250 252 / 0.96) 42%, ${soft} 100%)`;
        }
    }["EonrHistogramChart.useMemo[cardTint]"], [
        accentHex
    ]);
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EonrHistogramChart.useMemo[stats]": ()=>computeEonrHistogramStats(bins)
    }["EonrHistogramChart.useMemo[stats]"], [
        bins
    ]);
    const fmt = (v)=>Math.round(v).toString();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative overflow-hidden rounded-2xl border border-slate-200/80 px-3 pb-2 pt-4 shadow-md sm:px-5",
        style: {
            borderColor: `${accentHex}44`,
            background: cardTint ?? 'linear-gradient(145deg, #ffffff 0%, rgb(248 250 252 / 0.96) 100%)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-1 px-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-[11px] font-black uppercase tracking-[0.2em] text-slate-500",
                            children: "EONR distribution"
                        }, void 0, false, {
                            fileName: "[project]/src/app/indiana-app.tsx",
                            lineNumber: 873,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-0.5 text-sm font-semibold text-slate-800",
                            children: [
                                "On-farm trials — region",
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: accentHex
                                    },
                                    className: "font-semibold",
                                    children: regionLabel
                                }, void 0, false, {
                                    fileName: "[project]/src/app/indiana-app.tsx",
                                    lineNumber: 878,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/indiana-app.tsx",
                            lineNumber: 876,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/indiana-app.tsx",
                    lineNumber: 872,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/indiana-app.tsx",
                lineNumber: 871,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: `0 0 ${width} ${height}`,
                className: "mx-auto h-auto w-full",
                role: "img",
                "aria-label": `Histogram of economic optimum nitrogen rates for region ${regionLabel}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: gradId,
                                x1: "0",
                                y1: "1",
                                x2: "0",
                                y2: "0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: barColors.dark,
                                        stopOpacity: "0.95"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/indiana-app.tsx",
                                        lineNumber: 892,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "50%",
                                        stopColor: barColors.mid,
                                        stopOpacity: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/indiana-app.tsx",
                                        lineNumber: 893,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: barColors.light,
                                        stopOpacity: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/indiana-app.tsx",
                                        lineNumber: 894,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/indiana-app.tsx",
                                lineNumber: 891,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                id: filterId,
                                x: "-20%",
                                y: "-20%",
                                width: "140%",
                                height: "140%",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDropShadow", {
                                    dx: "0",
                                    dy: "1",
                                    stdDeviation: "1.2",
                                    floodColor: "#0f172a",
                                    floodOpacity: "0.12"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/indiana-app.tsx",
                                    lineNumber: 897,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/indiana-app.tsx",
                                lineNumber: 896,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/indiana-app.tsx",
                        lineNumber: 890,
                        columnNumber: 9
                    }, this),
                    yTicks.filter((tick)=>tick.t > 0).map((tick)=>{
                        const y = tick.y;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: padL,
                            x2: padL + chartW,
                            y1: y,
                            y2: y,
                            stroke: "#e2e8f0",
                            strokeWidth: 1
                        }, tick.t, false, {
                            fileName: "[project]/src/app/indiana-app.tsx",
                            lineNumber: 905,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: padL,
                        x2: padL + chartW,
                        y1: yBase,
                        y2: yBase,
                        stroke: "#94a3b8",
                        strokeWidth: 1.25
                    }, void 0, false, {
                        fileName: "[project]/src/app/indiana-app.tsx",
                        lineNumber: 917,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: padL,
                        x2: padL,
                        y1: padT,
                        y2: yBase,
                        stroke: "#94a3b8",
                        strokeWidth: 1.25
                    }, void 0, false, {
                        fileName: "[project]/src/app/indiana-app.tsx",
                        lineNumber: 925,
                        columnNumber: 9
                    }, this),
                    yTicks.map((tick)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: padL - 8,
                            y: tick.y + 3,
                            textAnchor: "end",
                            className: "fill-slate-500",
                            style: {
                                fontSize: 10,
                                fontWeight: 600
                            },
                            children: tick.value
                        }, `yt-${tick.t}`, false, {
                            fileName: "[project]/src/app/indiana-app.tsx",
                            lineNumber: 927,
                            columnNumber: 11
                        }, this)),
                    bins.map((b, i)=>{
                        const x0 = xAt(b.lo);
                        const x1 = xAt(b.hi);
                        const bw = Math.max(3, x1 - x0 - (bins.length > 12 ? 0.5 : 1.25));
                        const h = b.count / maxCount * chartH;
                        const bx = x0 + (x1 - x0 - bw) / 2;
                        const by = yBase - h;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                delay: i * 0.04,
                                duration: 0.35
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].rect, {
                                x: bx,
                                width: bw,
                                rx: 5,
                                ry: 5,
                                fill: `url(#${gradId})`,
                                filter: `url(#${filterId})`,
                                initial: {
                                    height: 0,
                                    y: yBase
                                },
                                animate: {
                                    height: h,
                                    y: by
                                },
                                transition: {
                                    type: 'spring',
                                    stiffness: 420,
                                    damping: 28,
                                    delay: i * 0.04
                                },
                                onMouseEnter: ()=>setHoveredBar({
                                        count: b.count,
                                        lo: b.lo,
                                        hi: b.hi,
                                        x: bx + bw / 2,
                                        y: by
                                    }),
                                onMouseLeave: ()=>setHoveredBar(null)
                            }, void 0, false, {
                                fileName: "[project]/src/app/indiana-app.tsx",
                                lineNumber: 953,
                                columnNumber: 15
                            }, this)
                        }, `${b.lo}-${b.hi}-${i}`, false, {
                            fileName: "[project]/src/app/indiana-app.tsx",
                            lineNumber: 947,
                            columnNumber: 13
                        }, this);
                    }),
                    hoveredBar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: Math.max(padL + 4, Math.min(padL + chartW - 214, hoveredBar.x - 107)),
                                y: Math.max(6, hoveredBar.y - 58),
                                width: 214,
                                height: 44,
                                rx: 10,
                                fill: "#ffffff",
                                stroke: `${accentHex}66`,
                                strokeWidth: 1,
                                style: {
                                    filter: 'drop-shadow(0px 6px 14px rgba(15, 23, 42, 0.16))'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/indiana-app.tsx",
                                lineNumber: 979,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: Math.max(padL + 14, Math.min(padL + chartW - 204, hoveredBar.x - 97)),
                                y: Math.max(22, hoveredBar.y - 38),
                                className: "fill-slate-800",
                                style: {
                                    fontSize: 11,
                                    fontWeight: 700
                                },
                                children: `${hoveredBar.count} trial${hoveredBar.count === 1 ? '' : 's'}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/indiana-app.tsx",
                                lineNumber: 990,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: Math.max(padL + 14, Math.min(padL + chartW - 204, hoveredBar.x - 97)),
                                y: Math.max(38, hoveredBar.y - 22),
                                className: "fill-slate-500",
                                style: {
                                    fontSize: 10,
                                    fontWeight: 600
                                },
                                children: `${Math.round(hoveredBar.lo)}-${Math.round(hoveredBar.hi)} lb/ac`
                            }, void 0, false, {
                                fileName: "[project]/src/app/indiana-app.tsx",
                                lineNumber: 998,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/indiana-app.tsx",
                        lineNumber: 978,
                        columnNumber: 11
                    }, this),
                    xticks.map((xv)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: xAt(xv),
                            y: height - 18,
                            textAnchor: "middle",
                            className: "fill-slate-500",
                            style: {
                                fontSize: 10,
                                fontWeight: 600
                            },
                            children: Number.isInteger(xv) ? xv : xv.toFixed(0)
                        }, xv, false, {
                            fileName: "[project]/src/app/indiana-app.tsx",
                            lineNumber: 1010,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: padL + chartW / 2,
                        y: height - 4,
                        textAnchor: "middle",
                        className: "fill-slate-600",
                        style: {
                            fontSize: 11,
                            fontWeight: 700
                        },
                        children: "Nitrogen rate (lb/ac)"
                    }, void 0, false, {
                        fileName: "[project]/src/app/indiana-app.tsx",
                        lineNumber: 1022,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: 14,
                        y: padT + chartH / 2,
                        textAnchor: "middle",
                        transform: `rotate(-90 14 ${padT + chartH / 2})`,
                        className: "fill-slate-600",
                        style: {
                            fontSize: 10,
                            fontWeight: 700
                        },
                        children: "Trials"
                    }, void 0, false, {
                        fileName: "[project]/src/app/indiana-app.tsx",
                        lineNumber: 1032,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/indiana-app.tsx",
                lineNumber: 884,
                columnNumber: 7
            }, this),
            stats && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 border-t border-slate-200/90 px-1 pb-2 pt-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500",
                        children: "EONR summary (lb/ac)"
                    }, void 0, false, {
                        fileName: "[project]/src/app/indiana-app.tsx",
                        lineNumber: 1045,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                        className: "grid grid-cols-2 gap-x-4 gap-y-2 text-sm sm:grid-cols-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        className: "text-[11px] font-medium text-slate-500",
                                        children: "Median"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/indiana-app.tsx",
                                        lineNumber: 1050,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        className: "font-semibold tabular-nums text-slate-900",
                                        children: fmt(stats.median)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/indiana-app.tsx",
                                        lineNumber: 1051,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/indiana-app.tsx",
                                lineNumber: 1049,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        className: "text-[11px] font-medium text-slate-500",
                                        children: "Std dev"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/indiana-app.tsx",
                                        lineNumber: 1054,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        className: "font-semibold tabular-nums text-slate-900",
                                        children: fmt(stats.stdDev)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/indiana-app.tsx",
                                        lineNumber: 1055,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/indiana-app.tsx",
                                lineNumber: 1053,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        className: "text-[11px] font-medium text-slate-500",
                                        children: "Minimum"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/indiana-app.tsx",
                                        lineNumber: 1058,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        className: "font-semibold tabular-nums text-slate-900",
                                        children: fmt(stats.min)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/indiana-app.tsx",
                                        lineNumber: 1059,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/indiana-app.tsx",
                                lineNumber: 1057,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        className: "text-[11px] font-medium text-slate-500",
                                        children: "25th percentile"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/indiana-app.tsx",
                                        lineNumber: 1062,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        className: "font-semibold tabular-nums text-slate-900",
                                        children: fmt(stats.p25)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/indiana-app.tsx",
                                        lineNumber: 1063,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/indiana-app.tsx",
                                lineNumber: 1061,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        className: "text-[11px] font-medium text-slate-500",
                                        children: "75th percentile"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/indiana-app.tsx",
                                        lineNumber: 1066,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        className: "font-semibold tabular-nums text-slate-900",
                                        children: fmt(stats.p75)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/indiana-app.tsx",
                                        lineNumber: 1067,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/indiana-app.tsx",
                                lineNumber: 1065,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        className: "text-[11px] font-medium text-slate-500",
                                        children: "Maximum"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/indiana-app.tsx",
                                        lineNumber: 1070,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        className: "font-semibold tabular-nums text-slate-900",
                                        children: fmt(stats.max)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/indiana-app.tsx",
                                        lineNumber: 1071,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/indiana-app.tsx",
                                lineNumber: 1069,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        className: "text-[11px] font-medium text-slate-500",
                                        children: "Count of trials in the region"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/indiana-app.tsx",
                                        lineNumber: 1074,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        className: "font-semibold tabular-nums text-slate-900",
                                        children: stats.count
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/indiana-app.tsx",
                                        lineNumber: 1075,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/indiana-app.tsx",
                                lineNumber: 1073,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/indiana-app.tsx",
                        lineNumber: 1048,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/indiana-app.tsx",
                lineNumber: 1044,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/indiana-app.tsx",
        lineNumber: 864,
        columnNumber: 5
    }, this);
}
_s5(EonrHistogramChart, "jAsxRP5QWA2iAc4Si+F7V71fWs4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c8 = EonrHistogramChart;
function EonrHistogramEmptyChart({ isMobile }) {
    const width = isMobile ? 340 : 520;
    const height = isMobile ? 248 : 224;
    const padL = 46;
    const padR = 14;
    const padT = 36;
    const padB = 52;
    const chartW = width - padL - padR;
    const chartH = height - padT - padB;
    const yBase = padT + chartH;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative overflow-hidden rounded-2xl border border-slate-200/80 px-3 pb-2 pt-4 shadow-md sm:px-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-1 px-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-[11px] font-black uppercase tracking-[0.2em] text-slate-500",
                        children: "EONR distribution"
                    }, void 0, false, {
                        fileName: "[project]/src/app/indiana-app.tsx",
                        lineNumber: 1098,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-0.5 text-sm font-semibold text-slate-600",
                        children: "On-farm trials — select a region"
                    }, void 0, false, {
                        fileName: "[project]/src/app/indiana-app.tsx",
                        lineNumber: 1101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/indiana-app.tsx",
                lineNumber: 1097,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: `0 0 ${width} ${height}`,
                className: "mx-auto h-auto w-full",
                role: "img",
                "aria-label": "Empty histogram placeholder for on-farm trials",
                children: [
                    [
                        0.25,
                        0.5,
                        0.75,
                        1
                    ].map((t)=>{
                        const y = yBase - t * chartH;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: padL,
                            x2: padL + chartW,
                            y1: y,
                            y2: y,
                            stroke: "#e2e8f0",
                            strokeWidth: 1
                        }, t, false, {
                            fileName: "[project]/src/app/indiana-app.tsx",
                            lineNumber: 1112,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: padL,
                        x2: padL + chartW,
                        y1: yBase,
                        y2: yBase,
                        stroke: "#94a3b8",
                        strokeWidth: 1.25
                    }, void 0, false, {
                        fileName: "[project]/src/app/indiana-app.tsx",
                        lineNumber: 1115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: padL,
                        x2: padL,
                        y1: padT,
                        y2: yBase,
                        stroke: "#94a3b8",
                        strokeWidth: 1.25
                    }, void 0, false, {
                        fileName: "[project]/src/app/indiana-app.tsx",
                        lineNumber: 1116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: padL + chartW / 2,
                        y: height - 4,
                        textAnchor: "middle",
                        className: "fill-slate-600",
                        style: {
                            fontSize: 11,
                            fontWeight: 700
                        },
                        children: "Nitrogen rate (lb/ac)"
                    }, void 0, false, {
                        fileName: "[project]/src/app/indiana-app.tsx",
                        lineNumber: 1117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: 14,
                        y: padT + chartH / 2,
                        textAnchor: "middle",
                        transform: `rotate(-90 14 ${padT + chartH / 2})`,
                        className: "fill-slate-600",
                        style: {
                            fontSize: 10,
                            fontWeight: 700
                        },
                        children: "Trials"
                    }, void 0, false, {
                        fileName: "[project]/src/app/indiana-app.tsx",
                        lineNumber: 1126,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/indiana-app.tsx",
                lineNumber: 1103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-center text-sm text-slate-600",
                children: "Select a region on the map to load trial data."
            }, void 0, false, {
                fileName: "[project]/src/app/indiana-app.tsx",
                lineNumber: 1137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/indiana-app.tsx",
        lineNumber: 1096,
        columnNumber: 5
    }, this);
}
_c9 = EonrHistogramEmptyChart;
/** Darker Purdue header gold (#CEB888) — paired EONR / price panels share the same tone. */ const PURDUE_HEADER_BEIGE_PANEL = 'linear-gradient(165deg, #d2bc88 0%, #CEB888 45%, #b89452 100%)';
const GAUGE_TRACK = '#44403c';
const GAUGE_FILL = '#0c0a09';
const GAUGE_TICK_DIM = 'rgba(12, 10, 9, 0.38)';
const GAUGE_READOUT = '#0c0a09';
/** F1-style arched gauge for EONR: dark arc on beige, high-contrast readout. */ function EonrTachometerGauge({ eonrLbAc, minRate, maxRate, isMobile }) {
    _s6();
    const cx = 200;
    const cy = 170;
    const rOuter = 88;
    const rInnerTicks = 74;
    const arcPath = `M ${cx - rOuter} ${cy} A ${rOuter} ${rOuter} 0 1 1 ${cx + rOuter} ${cy}`;
    const arcLen = Math.PI * rOuter;
    const progress = eonrLbAc === null ? 0 : Math.max(0, Math.min(1, (eonrLbAc - minRate) / Math.max(maxRate - minRate, 1e-6)));
    const dashFill = arcLen * progress;
    const tickAngles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EonrTachometerGauge.useMemo[tickAngles]": ()=>{
            const n = 14;
            const out = [];
            for(let i = 0; i < n; i++){
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
                    inFilled: t <= progress + 1e-6
                });
            }
            return out;
        }
    }["EonrTachometerGauge.useMemo[tickAngles]"], [
        progress
    ]);
    const mainText = eonrLbAc === null ? '—' : `${Math.round(eonrLbAc)} lb`;
    const fontSizeMain = isMobile ? 26 : 34;
    const uid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])().replace(/:/g, '');
    const filterGlow = `eonrTachGlow-${uid}`;
    const filterText = `eonrTextSoft-${uid}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full min-w-0 text-left",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-0 text-left text-[11px] font-black uppercase leading-tight tracking-[0.14em] text-stone-950 sm:text-xs",
                children: [
                    "EONR",
                    ' ',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold normal-case tracking-normal text-stone-900",
                        children: "(Economic Optimum Nitrogen Rate)"
                    }, void 0, false, {
                        fileName: "[project]/src/app/indiana-app.tsx",
                        lineNumber: 1209,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/indiana-app.tsx",
                lineNumber: 1207,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 400 182",
                className: "h-auto w-full max-h-[128px]",
                role: "img",
                "aria-label": eonrLbAc === null ? 'Economic optimum nitrogen rate gauge' : `Economic optimum nitrogen rate ${Math.round(eonrLbAc)} lb`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                id: filterGlow,
                                x: "-50%",
                                y: "-50%",
                                width: "200%",
                                height: "200%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                        in: "SourceGraphic",
                                        stdDeviation: "1.4",
                                        result: "b"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/indiana-app.tsx",
                                        lineNumber: 1225,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                in: "b"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                lineNumber: 1227,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                in: "SourceGraphic"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                lineNumber: 1228,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/indiana-app.tsx",
                                        lineNumber: 1226,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/indiana-app.tsx",
                                lineNumber: 1224,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                id: filterText,
                                x: "-25%",
                                y: "-25%",
                                width: "150%",
                                height: "150%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                        in: "SourceGraphic",
                                        stdDeviation: "0.6",
                                        result: "blur"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/indiana-app.tsx",
                                        lineNumber: 1232,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                in: "blur"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                lineNumber: 1234,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                in: "SourceGraphic"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                lineNumber: 1235,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/indiana-app.tsx",
                                        lineNumber: 1233,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/indiana-app.tsx",
                                lineNumber: 1231,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/indiana-app.tsx",
                        lineNumber: 1223,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: arcPath,
                        fill: "none",
                        stroke: GAUGE_TRACK,
                        strokeOpacity: 0.55,
                        strokeWidth: 11,
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/app/indiana-app.tsx",
                        lineNumber: 1241,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: arcPath,
                        fill: "none",
                        stroke: GAUGE_FILL,
                        strokeWidth: 9.5,
                        strokeLinecap: "round",
                        strokeDasharray: `${dashFill} ${arcLen}`,
                        filter: `url(#${filterGlow})`
                    }, void 0, false, {
                        fileName: "[project]/src/app/indiana-app.tsx",
                        lineNumber: 1250,
                        columnNumber: 11
                    }, this),
                    tickAngles.map((seg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: seg.x1,
                            y1: seg.y1,
                            x2: seg.x2,
                            y2: seg.y2,
                            stroke: seg.inFilled ? GAUGE_FILL : GAUGE_TICK_DIM,
                            strokeWidth: seg.inFilled ? 2.1 : 1.4,
                            strokeLinecap: "round"
                        }, i, false, {
                            fileName: "[project]/src/app/indiana-app.tsx",
                            lineNumber: 1262,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: cx,
                        y: cy + 4,
                        textAnchor: "middle",
                        fill: GAUGE_READOUT,
                        style: {
                            fontSize: fontSizeMain,
                            fontWeight: 600,
                            fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                            letterSpacing: '-0.03em'
                        },
                        filter: `url(#${filterText})`,
                        children: mainText
                    }, void 0, false, {
                        fileName: "[project]/src/app/indiana-app.tsx",
                        lineNumber: 1275,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/indiana-app.tsx",
                lineNumber: 1213,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/indiana-app.tsx",
        lineNumber: 1206,
        columnNumber: 5
    }, this);
}
_s6(EonrTachometerGauge, "pTWrmmaydg6GHXlR5kD0yi56MwE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c10 = EonrTachometerGauge;
let cellsGeoJsonCache = null;
async function loadCellsGeoJson() {
    if (cellsGeoJsonCache) return cellsGeoJsonCache;
    const res = await fetch('/json/cells_indiana.geojson');
    if (!res.ok) throw new Error(`Failed to load cells: ${res.status}`);
    const data = await res.json();
    if (!data || typeof data !== 'object' || data.type !== 'FeatureCollection') {
        throw new Error('Unexpected cell map format.');
    }
    cellsGeoJsonCache = data;
    return cellsGeoJsonCache;
}
/** Ray-cast; ring is GeoJSON linear ring [lng, lat][] */ function pointInRing(lng, lat, ring) {
    if (ring.length < 3) return false;
    let inside = false;
    for(let i = 0, j = ring.length - 1; i < ring.length; j = i++){
        const xi = ring[i][0];
        const yi = ring[i][1];
        const xj = ring[j][0];
        const yj = ring[j][1];
        if (yi === yj) continue;
        const denom = yj - yi;
        const crosses = yi > lat !== yj > lat && denom !== 0 && lng < (xj - xi) * (lat - yi) / denom + xi;
        if (crosses) inside = !inside;
    }
    return inside;
}
function pointInPolygonRings(lng, lat, rings) {
    if (rings.length === 0) return false;
    if (!pointInRing(lng, lat, rings[0])) return false;
    for(let h = 1; h < rings.length; h++){
        if (pointInRing(lng, lat, rings[h])) return false;
    }
    return true;
}
function findCellIdForLngLat(lng, lat, fc) {
    for (const feature of fc.features){
        const rawId = feature.properties && feature.properties.id_cell;
        if (typeof rawId !== 'number') continue;
        const geom = feature.geometry;
        if (!geom) continue;
        if (geom.type === 'Polygon' && pointInPolygonRings(lng, lat, geom.coordinates)) {
            return rawId;
        }
        if (geom.type === 'MultiPolygon') {
            for (const poly of geom.coordinates){
                if (pointInPolygonRings(lng, lat, poly)) return rawId;
            }
        }
    }
    return null;
}
function Home() {
    _s7();
    const [showDashboard, setShowDashboard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /** Must match server first paint (no `window`); real value set in useEffect below. */ const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [continueEnabled, setContinueEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAONR, setShowAONR] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedCellId, setSelectedCellId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cellSimulations, setCellSimulations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cellDataLoading, setCellDataLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cellDataError, setCellDataError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mobileMapOpen, setMobileMapOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const aonrRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapPanelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const continueTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [showBackendWakeUi, setShowBackendWakeUi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadingWakeMessageIndex, setLoadingWakeMessageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [nPrice, setNPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.65);
    const [cornPrice, setCornPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(4.5);
    const [showLocationOptions, setShowLocationOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [resultsSection, setResultsSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('optimize');
    const [mobileTrialsView, setMobileTrialsView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('map');
    const [selectedCountyName, setSelectedCountyName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedCountyRegion, setSelectedCountyRegion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [countiesMapError, setCountiesMapError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [eonrHistogramBins, setEonrHistogramBins] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [eonrHistogramLoading, setEonrHistogramLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [eonrHistogramError, setEonrHistogramError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedRegionMapColor, setSelectedRegionMapColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dynamicPriceRows, setDynamicPriceRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [dynamicPriceLoading, setDynamicPriceLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dynamicPriceError, setDynamicPriceError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dynamicDateIndex, setDynamicDateIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [dynamicNitrogenSource, setDynamicNitrogenSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [dynamicSimulations, setDynamicSimulations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dynamicCurveLoading, setDynamicCurveLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dynamicCurveError, setDynamicCurveError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [savedDynamicScenarios, setSavedDynamicScenarios] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showConflictTooltip, setShowConflictTooltip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [conflictTooltipLeftPct, setConflictTooltipLeftPct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const trialsRegionApiParam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[trialsRegionApiParam]": ()=>{
            const code = (selectedCountyRegion ?? selectedCountyName)?.trim();
            return code || null;
        }
    }["Home.useMemo[trialsRegionApiParam]"], [
        selectedCountyRegion,
        selectedCountyName
    ]);
    const trialsRegionDisplayLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[trialsRegionDisplayLabel]": ()=>{
            if (!trialsRegionApiParam) return null;
            const normalized = trialsRegionApiParam.toUpperCase();
            return REGION_DISPLAY_LABELS[normalized] ?? trialsRegionApiParam;
        }
    }["Home.useMemo[trialsRegionDisplayLabel]"], [
        trialsRegionApiParam
    ]);
    const [geoError, setGeoError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [geoLocating, setGeoLocating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /** null until mounted; geolocation only gets a real prompt on secure contexts (HTTPS or localhost). */ const [geoSecureContext, setGeoSecureContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const pendingGeoCellIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /** Survives React Strict Mode’s double effect run so we don’t wipe geo-chosen cell on the 2nd pass. */ const openedDashboardWithGeoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const selectedDynamicPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[selectedDynamicPrice]": ()=>dynamicPriceRows.length > 0 ? dynamicPriceRows[Math.min(dynamicDateIndex, dynamicPriceRows.length - 1)] : null
    }["Home.useMemo[selectedDynamicPrice]"], [
        dynamicPriceRows,
        dynamicDateIndex
    ]);
    const dynamicNitrogenSources = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[dynamicNitrogenSources]": ()=>{
            const src = new Set();
            for (const row of dynamicPriceRows){
                Object.keys(row.nitroBySource).forEach({
                    "Home.useMemo[dynamicNitrogenSources]": (s)=>src.add(s)
                }["Home.useMemo[dynamicNitrogenSources]"]);
            }
            return Array.from(src).sort({
                "Home.useMemo[dynamicNitrogenSources]": (a, b)=>a.localeCompare(b)
            }["Home.useMemo[dynamicNitrogenSources]"]);
        }
    }["Home.useMemo[dynamicNitrogenSources]"], [
        dynamicPriceRows
    ]);
    const selectedDynamicNitroPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[selectedDynamicNitroPrice]": ()=>{
            if (!selectedDynamicPrice) return null;
            if (dynamicNitrogenSource && Number.isFinite(selectedDynamicPrice.nitroBySource[dynamicNitrogenSource])) {
                return selectedDynamicPrice.nitroBySource[dynamicNitrogenSource];
            }
            const fallback = dynamicNitrogenSources.find({
                "Home.useMemo[selectedDynamicNitroPrice].fallback": (src)=>Number.isFinite(selectedDynamicPrice.nitroBySource[src])
            }["Home.useMemo[selectedDynamicNitroPrice].fallback"]);
            return fallback ? selectedDynamicPrice.nitroBySource[fallback] : null;
        }
    }["Home.useMemo[selectedDynamicNitroPrice]"], [
        selectedDynamicPrice,
        dynamicNitrogenSource,
        dynamicNitrogenSources
    ]);
    const dynamicSliderTicks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[dynamicSliderTicks]": ()=>{
            if (dynamicPriceRows.length === 0) return [];
            const tickCount = Math.min(6, dynamicPriceRows.length);
            const rawIndexes = Array.from({
                length: tickCount
            }, {
                "Home.useMemo[dynamicSliderTicks].rawIndexes": (_, i)=>Math.round((dynamicPriceRows.length - 1) * i / Math.max(tickCount - 1, 1))
            }["Home.useMemo[dynamicSliderTicks].rawIndexes"]);
            const uniqueIndexes = Array.from(new Set(rawIndexes)).sort({
                "Home.useMemo[dynamicSliderTicks].uniqueIndexes": (a, b)=>a - b
            }["Home.useMemo[dynamicSliderTicks].uniqueIndexes"]);
            return uniqueIndexes.map({
                "Home.useMemo[dynamicSliderTicks]": (idx)=>{
                    const row = dynamicPriceRows[idx];
                    const leftPct = dynamicPriceRows.length <= 1 ? 0 : idx / (dynamicPriceRows.length - 1) * 100;
                    return {
                        idx,
                        leftPct,
                        label: sliderTickLabelFromIsoDate(row.dateIso)
                    };
                }
            }["Home.useMemo[dynamicSliderTicks]"]);
        }
    }["Home.useMemo[dynamicSliderTicks]"], [
        dynamicPriceRows
    ]);
    const dynamicSliderProgressPct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[dynamicSliderProgressPct]": ()=>{
            if (dynamicPriceRows.length <= 1) return 0;
            const clamped = Math.min(dynamicDateIndex, dynamicPriceRows.length - 1);
            return clamped / (dynamicPriceRows.length - 1) * 100;
        }
    }["Home.useMemo[dynamicSliderProgressPct]"], [
        dynamicPriceRows.length,
        dynamicDateIndex
    ]);
    const iranConflictStartPct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[iranConflictStartPct]": ()=>{
            if (dynamicPriceRows.length <= 1) return 0;
            const conflictStartIso = '2026-03-20';
            const idx = dynamicPriceRows.findIndex({
                "Home.useMemo[iranConflictStartPct].idx": (row)=>row.dateIso >= conflictStartIso
            }["Home.useMemo[iranConflictStartPct].idx"]);
            if (idx < 0) return 100;
            return idx / (dynamicPriceRows.length - 1) * 100;
        }
    }["Home.useMemo[iranConflictStartPct]"], [
        dynamicPriceRows
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            setGeoSecureContext(window.isSecureContext);
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            __turbopack_context__.A("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript, async loader)").then({
                "Home.useEffect": (leaf)=>{
                    // Leaflet's internal icon helper name isn't present in the TS types.
                    delete leaf.Icon.Default.prototype._getIconUrl;
                    leaf.Icon.Default.mergeOptions({
                        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
                        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
                        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
                    });
                }
            }["Home.useEffect"]);
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const update = {
                "Home.useEffect.update": ()=>setIsMobile(window.innerWidth < 768)
            }["Home.useEffect.update"];
            update();
            window.addEventListener('resize', update);
            return ({
                "Home.useEffect": ()=>window.removeEventListener('resize', update)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
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
                setDynamicPriceRows([]);
                setDynamicPriceLoading(false);
                setDynamicPriceError(null);
                setDynamicDateIndex(0);
                setDynamicNitrogenSource('');
                setDynamicSimulations(null);
                setDynamicCurveLoading(false);
                setDynamicCurveError(null);
                setSavedDynamicScenarios([]);
                setShowConflictTooltip(false);
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
            setDynamicPriceRows([]);
            setDynamicPriceLoading(false);
            setDynamicPriceError(null);
            setDynamicDateIndex(0);
            setDynamicNitrogenSource('');
            setDynamicSimulations(null);
            setDynamicCurveLoading(false);
            setDynamicCurveError(null);
            setSavedDynamicScenarios([]);
            setShowConflictTooltip(false);
            if (continueTimerRef.current !== null) {
                window.clearTimeout(continueTimerRef.current);
                continueTimerRef.current = null;
            }
            setShowBackendWakeUi(false);
            setLoadingWakeMessageIndex(0);
        }
    }["Home.useEffect"], [
        showDashboard
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (!showDashboard || !showAONR) return;
            if (dynamicPriceRows.length > 0 || dynamicPriceLoading) return;
            const controller = new AbortController();
            setDynamicPriceLoading(true);
            setDynamicPriceError(null);
            ({
                "Home.useEffect": async ()=>{
                    try {
                        const res = await fetch('/json/merged_prices.csv', {
                            signal: controller.signal
                        });
                        if (!res.ok) throw new Error(`Failed to load dynamic price dataset (${res.status}).`);
                        const raw = await res.text();
                        const parsed = parseDynamicPriceDataset(raw);
                        if (parsed.length === 0) throw new Error('Dynamic price dataset has no rows for Jan 2025–Apr 2026.');
                        setDynamicPriceRows(parsed);
                        setDynamicDateIndex({
                            "Home.useEffect": (idx)=>Math.min(idx, parsed.length - 1)
                        }["Home.useEffect"]);
                        const defaultSources = Array.from(new Set(parsed.flatMap({
                            "Home.useEffect.defaultSources": (row)=>Object.keys(row.nitroBySource)
                        }["Home.useEffect.defaultSources"]))).sort({
                            "Home.useEffect.defaultSources": (a, b)=>a.localeCompare(b)
                        }["Home.useEffect.defaultSources"]);
                        if (defaultSources.length > 0) {
                            setDynamicNitrogenSource({
                                "Home.useEffect": (current)=>current && defaultSources.includes(current) ? current : defaultSources[0]
                            }["Home.useEffect"]);
                        }
                    } catch (error) {
                        if (error.name === 'AbortError') return;
                        setDynamicPriceRows([]);
                        setDynamicPriceError(error instanceof Error ? error.message : 'Failed to load dynamic price dataset.');
                    } finally{
                        if (!controller.signal.aborted) setDynamicPriceLoading(false);
                    }
                }
            })["Home.useEffect"]();
            return ({
                "Home.useEffect": ()=>controller.abort()
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        showDashboard,
        showAONR,
        dynamicPriceRows.length,
        dynamicPriceLoading
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (resultsSection === 'optimize') {
                setCountiesMapError(null);
                setEonrHistogramBins([]);
                setEonrHistogramError(null);
                setEonrHistogramLoading(false);
            }
        }
    }["Home.useEffect"], [
        resultsSection
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (!showDashboard || !showAONR || resultsSection !== 'trials' || !trialsRegionApiParam) {
                setEonrHistogramBins([]);
                setEonrHistogramError(null);
                setEonrHistogramLoading(false);
                return;
            }
            const controller = new AbortController();
            setEonrHistogramLoading(true);
            setEonrHistogramError(null);
            ({
                "Home.useEffect": async ()=>{
                    try {
                        const params = new URLSearchParams({
                            region: trialsRegionApiParam.toLowerCase(),
                            nitro_price: String(nPrice),
                            grain_price: String(cornPrice)
                        });
                        const res = await fetch(`/api/onfarmtrials/eonr_count?${params.toString()}`, {
                            signal: controller.signal
                        });
                        if (!res.ok) {
                            const text = await res.text();
                            throw new Error(text.slice(0, 240) || `Request failed (${res.status})`);
                        }
                        const raw = await res.json();
                        const bins = parseEonrCountPayload(raw);
                        setEonrHistogramBins(bins);
                    } catch (err) {
                        if (err.name === 'AbortError') return;
                        setEonrHistogramBins([]);
                        setEonrHistogramError(err instanceof Error ? err.message : 'Failed to load EONR distribution.');
                    } finally{
                        if (!controller.signal.aborted) setEonrHistogramLoading(false);
                    }
                }
            })["Home.useEffect"]();
            return ({
                "Home.useEffect": ()=>controller.abort()
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        showDashboard,
        showAONR,
        resultsSection,
        trialsRegionApiParam,
        nPrice,
        cornPrice
    ]);
    /** Cold-start hint only after 3s waiting on this request (not tied to Continue). */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (!cellDataLoading) {
                setShowBackendWakeUi(false);
                return;
            }
            const id = window.setTimeout({
                "Home.useEffect.id": ()=>setShowBackendWakeUi(true)
            }["Home.useEffect.id"], 3000);
            return ({
                "Home.useEffect": ()=>window.clearTimeout(id)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        cellDataLoading
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (!showBackendWakeUi || !cellDataLoading) {
                setLoadingWakeMessageIndex(0);
                return;
            }
            setLoadingWakeMessageIndex(0);
            const id = window.setInterval({
                "Home.useEffect.id": ()=>{
                    setLoadingWakeMessageIndex({
                        "Home.useEffect.id": (i)=>(i + 1) % LOADING_STATUS_MESSAGES.length
                    }["Home.useEffect.id"]);
                }
            }["Home.useEffect.id"], 8000);
            return ({
                "Home.useEffect": ()=>window.clearInterval(id)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        showBackendWakeUi,
        cellDataLoading
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (selectedCellId === null) {
                setCellSimulations(null);
                setCellDataError(null);
                setCellDataLoading(false);
                return;
            }
            const controller = new AbortController();
            const params = new URLSearchParams({
                cell: String(selectedCellId),
                nitro_price: String(nPrice),
                grain_price: String(cornPrice)
            });
            setCellDataLoading(true);
            setCellDataError(null);
            ({
                "Home.useEffect": async ()=>{
                    try {
                        const res = await fetch(`/api/simresults?${params.toString()}`, {
                            signal: controller.signal
                        });
                        if (!res.ok) throw new Error(`Request failed (${res.status})`);
                        const raw = await res.json();
                        if (!Array.isArray(raw)) throw new Error('Unexpected response format from backend.');
                        const parsed = raw.map({
                            "Home.useEffect.parsed": (entry)=>normalizeSimulation(entry)
                        }["Home.useEffect.parsed"]).filter({
                            "Home.useEffect.parsed": (entry)=>entry !== null
                        }["Home.useEffect.parsed"]);
                        setCellSimulations(parsed);
                    } catch (error) {
                        if (error.name === 'AbortError') return;
                        setCellSimulations(null);
                        setCellDataError(error instanceof Error ? error.message : 'Failed to load selected cell data.');
                    } finally{
                        if (!controller.signal.aborted) setCellDataLoading(false);
                    }
                }
            })["Home.useEffect"]();
            return ({
                "Home.useEffect": ()=>controller.abort()
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        selectedCellId,
        nPrice,
        cornPrice
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (!showDashboard || !showAONR || resultsSection !== 'dynamic' || selectedCellId === null || !selectedDynamicPrice || selectedDynamicNitroPrice === null) {
                setDynamicSimulations(null);
                setDynamicCurveError(null);
                setDynamicCurveLoading(false);
                return;
            }
            const controller = new AbortController();
            const params = new URLSearchParams({
                cell: String(selectedCellId),
                nitro_price: String(selectedDynamicNitroPrice),
                grain_price: String(selectedDynamicPrice.cornPrice)
            });
            setDynamicCurveLoading(true);
            setDynamicCurveError(null);
            ({
                "Home.useEffect": async ()=>{
                    try {
                        const res = await fetch(`/api/simresults?${params.toString()}`, {
                            signal: controller.signal
                        });
                        if (!res.ok) throw new Error(`Request failed (${res.status})`);
                        const raw = await res.json();
                        if (!Array.isArray(raw)) throw new Error('Unexpected response format from backend.');
                        const parsed = raw.map({
                            "Home.useEffect.parsed": (entry)=>normalizeSimulation(entry)
                        }["Home.useEffect.parsed"]).filter({
                            "Home.useEffect.parsed": (entry)=>entry !== null
                        }["Home.useEffect.parsed"]);
                        setDynamicSimulations(parsed);
                    } catch (error) {
                        if (error.name === 'AbortError') return;
                        setDynamicSimulations(null);
                        setDynamicCurveError(error instanceof Error ? error.message : 'Failed to load dynamic comparison curve.');
                    } finally{
                        if (!controller.signal.aborted) setDynamicCurveLoading(false);
                    }
                }
            })["Home.useEffect"]();
            return ({
                "Home.useEffect": ()=>controller.abort()
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        showDashboard,
        showAONR,
        resultsSection,
        selectedCellId,
        selectedDynamicPrice,
        selectedDynamicNitroPrice
    ]);
    const dualCurveData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[dualCurveData]": ()=>{
            if (!cellSimulations || cellSimulations.length === 0) return [];
            return cellSimulations.map({
                "Home.useMemo[dualCurveData]": (row)=>({
                        x: row.nitroLbAc,
                        yield: row.yieldBsAc ?? 0,
                        profit: row.profitDol ?? (row.yieldBsAc !== null ? cornPrice * row.yieldBsAc - nPrice * row.nitroLbAc : null)
                    })
            }["Home.useMemo[dualCurveData]"]).filter({
                "Home.useMemo[dualCurveData]": (row)=>row.profit !== null
            }["Home.useMemo[dualCurveData]"]).sort({
                "Home.useMemo[dualCurveData]": (a, b)=>a.x - b.x
            }["Home.useMemo[dualCurveData]"]);
        }
    }["Home.useMemo[dualCurveData]"], [
        cellSimulations,
        nPrice,
        cornPrice
    ]);
    const eonrRow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[eonrRow]": ()=>{
            if (!cellSimulations || cellSimulations.length === 0) return null;
            return cellSimulations.reduce({
                "Home.useMemo[eonrRow]": (best, row)=>{
                    const bestProfit = best.profitDol ?? (best.yieldBsAc !== null ? cornPrice * best.yieldBsAc - nPrice * best.nitroLbAc : Number.NEGATIVE_INFINITY);
                    const rowProfit = row.profitDol ?? (row.yieldBsAc !== null ? cornPrice * row.yieldBsAc - nPrice * row.nitroLbAc : Number.NEGATIVE_INFINITY);
                    return rowProfit > bestProfit ? row : best;
                }
            }["Home.useMemo[eonrRow]"]);
        }
    }["Home.useMemo[eonrRow]"], [
        cellSimulations,
        nPrice,
        cornPrice
    ]);
    const priceRatio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[priceRatio]": ()=>cornPrice > 0 ? nPrice / cornPrice : null
    }["Home.useMemo[priceRatio]"], [
        nPrice,
        cornPrice
    ]);
    const dynamicCurveData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[dynamicCurveData]": ()=>{
            if (!dynamicSimulations || dynamicSimulations.length === 0 || !selectedDynamicPrice || selectedDynamicNitroPrice === null) return [];
            return dynamicSimulations.map({
                "Home.useMemo[dynamicCurveData]": (row)=>({
                        x: row.nitroLbAc,
                        yield: row.yieldBsAc ?? 0,
                        profit: row.profitDol ?? (row.yieldBsAc !== null ? selectedDynamicPrice.cornPrice * row.yieldBsAc - selectedDynamicNitroPrice * row.nitroLbAc : null)
                    })
            }["Home.useMemo[dynamicCurveData]"]).filter({
                "Home.useMemo[dynamicCurveData]": (row)=>row.profit !== null
            }["Home.useMemo[dynamicCurveData]"]).sort({
                "Home.useMemo[dynamicCurveData]": (a, b)=>a.x - b.x
            }["Home.useMemo[dynamicCurveData]"]);
        }
    }["Home.useMemo[dynamicCurveData]"], [
        dynamicSimulations,
        selectedDynamicPrice,
        selectedDynamicNitroPrice
    ]);
    const dynamicEonrRow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[dynamicEonrRow]": ()=>{
            if (!dynamicSimulations || dynamicSimulations.length === 0 || !selectedDynamicPrice || selectedDynamicNitroPrice === null) return null;
            return dynamicSimulations.reduce({
                "Home.useMemo[dynamicEonrRow]": (best, row)=>{
                    const bestProfit = best.profitDol ?? (best.yieldBsAc !== null ? selectedDynamicPrice.cornPrice * best.yieldBsAc - selectedDynamicNitroPrice * best.nitroLbAc : Number.NEGATIVE_INFINITY);
                    const rowProfit = row.profitDol ?? (row.yieldBsAc !== null ? selectedDynamicPrice.cornPrice * row.yieldBsAc - selectedDynamicNitroPrice * row.nitroLbAc : Number.NEGATIVE_INFINITY);
                    return rowProfit > bestProfit ? row : best;
                }
            }["Home.useMemo[dynamicEonrRow]"]);
        }
    }["Home.useMemo[dynamicEonrRow]"], [
        dynamicSimulations,
        selectedDynamicPrice,
        selectedDynamicNitroPrice
    ]);
    const activeDynamicProfitBandIntervals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[activeDynamicProfitBandIntervals]": ()=>{
            if (!dynamicCurveData.length || !dynamicEonrRow) return [];
            const eonrPt = interpolateDualAtX(dynamicCurveData, dynamicEonrRow.nitroLbAc);
            if (!eonrPt || !Number.isFinite(eonrPt.profit)) return [];
            return profitAtLeastIntervals(dynamicCurveData, eonrPt.profit - 1);
        }
    }["Home.useMemo[activeDynamicProfitBandIntervals]"], [
        dynamicCurveData,
        dynamicEonrRow
    ]);
    const activeDynamicLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[activeDynamicLabel]": ()=>{
            if (!selectedDynamicPrice) return 'Current scenario';
            const dateLabel = fullDateLabelFromIsoDate(selectedDynamicPrice.dateIso);
            const src = dynamicNitrogenSource || 'Nitrogen';
            const cell = selectedCellId === null ? 'no-cell' : `cell ${selectedCellId}`;
            return `${dateLabel} · ${src} · ${cell}`;
        }
    }["Home.useMemo[activeDynamicLabel]"], [
        selectedDynamicPrice,
        dynamicNitrogenSource,
        selectedCellId
    ]);
    const dynamicComparisonScenarios = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[dynamicComparisonScenarios]": ()=>savedDynamicScenarios.map({
                "Home.useMemo[dynamicComparisonScenarios]": (scenario)=>({
                        id: scenario.id,
                        label: scenario.label,
                        points: scenario.points,
                        color: scenario.color,
                        eonrX: scenario.eonrX,
                        profitBandIntervals: scenario.profitBandIntervals
                    })
            }["Home.useMemo[dynamicComparisonScenarios]"])
    }["Home.useMemo[dynamicComparisonScenarios]"], [
        savedDynamicScenarios
    ]);
    const formatPercentDiff = (value, baseline)=>{
        if (!Number.isFinite(value) || !Number.isFinite(baseline) || baseline === 0) return 'vs current';
        const pct = (value - baseline) / baseline * 100;
        if (Math.abs(pct) < 0.05) return 'same as current';
        const abs = Math.abs(pct).toFixed(1);
        return pct > 0 ? `${abs}% higher` : `${abs}% lower`;
    };
    /** Same ±$1/ac profit band as the gray region on the economic curve (profit ≥ peak − $1/ac). */ const eonrProfitBandSummary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[eonrProfitBandSummary]": ()=>{
            if (!eonrRow || dualCurveData.length < 2) return null;
            const eonrPt = interpolateDualAtX(dualCurveData, eonrRow.nitroLbAc);
            if (!eonrPt || !Number.isFinite(eonrPt.profit)) return null;
            const peakProfit = eonrPt.profit;
            const intervals = profitAtLeastIntervals(dualCurveData, peakProfit - 1);
            if (intervals.length === 0) return null;
            const nLow = Math.min(...intervals.map({
                "Home.useMemo[eonrProfitBandSummary].nLow": (seg)=>seg[0]
            }["Home.useMemo[eonrProfitBandSummary].nLow"]));
            const nHigh = Math.max(...intervals.map({
                "Home.useMemo[eonrProfitBandSummary].nHigh": (seg)=>seg[1]
            }["Home.useMemo[eonrProfitBandSummary].nHigh"]));
            return {
                nLow,
                nHigh
            };
        }
    }["Home.useMemo[eonrProfitBandSummary]"], [
        dualCurveData,
        eonrRow
    ]);
    const eonrGaugeScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[eonrGaugeScale]": ()=>{
            const min = 0;
            if (!cellSimulations?.length) return {
                min,
                max: 350
            };
            const maxN = Math.max(350, ...cellSimulations.map({
                "Home.useMemo[eonrGaugeScale].maxN": (r)=>r.nitroLbAc
            }["Home.useMemo[eonrGaugeScale].maxN"]));
            return {
                min,
                max: maxN
            };
        }
    }["Home.useMemo[eonrGaugeScale]"], [
        cellSimulations
    ]);
    const handleMapInteraction = ()=>{
        if (showAONR) return;
        setContinueEnabled(true);
    };
    const handleSaveDynamicScenario = ()=>{
        if (selectedCellId === null || !selectedDynamicPrice || dynamicCurveData.length < 2 || selectedDynamicNitroPrice === null) {
            return;
        }
        if (savedDynamicScenarios.length >= 5) return;
        const usedColors = new Set(savedDynamicScenarios.map((s)=>s.color));
        const nextColor = DYNAMIC_SCENARIO_COLORS.find((color)=>!usedColors.has(color)) ?? DYNAMIC_SCENARIO_COLORS[savedDynamicScenarios.length % DYNAMIC_SCENARIO_COLORS.length];
        const scenario = {
            id: `scenario-${Date.now()}-${Math.round(Math.random() * 1e6)}`,
            color: nextColor,
            label: activeDynamicLabel,
            cornPrice: selectedDynamicPrice.cornPrice,
            nitroPrice: selectedDynamicNitroPrice,
            fertilizerSource: dynamicNitrogenSource || 'Selected source',
            points: dynamicCurveData.map((p)=>({
                    ...p
                })),
            eonrX: dynamicEonrRow?.nitroLbAc ?? null,
            profitBandIntervals: activeDynamicProfitBandIntervals.map((seg)=>[
                    seg[0],
                    seg[1]
                ])
        };
        setSavedDynamicScenarios((prev)=>[
                ...prev,
                scenario
            ]);
    };
    const handleRemoveDynamicScenario = (id)=>{
        setSavedDynamicScenarios((prev)=>prev.filter((scenario)=>scenario.id !== id));
    };
    const handleContinue = ()=>{
        if (isMobile) {
            if (showAONR && resultsSection === 'trials') {
                setMobileTrialsView('results');
                requestAnimationFrame(()=>{
                    aonrRef.current?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                });
                return;
            }
            // On phone: scroll first, then reveal plots (avoid instant pop-in).
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            if (continueTimerRef.current !== null) window.clearTimeout(continueTimerRef.current);
            continueTimerRef.current = window.setTimeout(()=>{
                setShowAONR(true);
                setMobileMapOpen(false);
                continueTimerRef.current = null;
            }, 450);
            return;
        }
        setShowAONR(true);
    };
    const handleOpenMapFromFloatingButton = ()=>{
        if (resultsSection === 'trials') {
            setMobileTrialsView('map');
            setMobileMapOpen(true);
            requestAnimationFrame(()=>{
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            return;
        }
        setShowAONR(false);
        setResultsSection('optimize');
        setMobileTrialsView('map');
        setContinueEnabled(false);
        setMobileMapOpen(true);
        requestAnimationFrame(()=>{
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    };
    const handleChooseMapSelection = ()=>{
        setGeoError(null);
        pendingGeoCellIdRef.current = null;
        setShowDashboard(true);
    };
    const handleChooseCurrentLocation = ()=>{
        setGeoError(null);
        if (typeof navigator === 'undefined' || !navigator.geolocation) {
            setGeoError('Location is not available in this browser.');
            return;
        }
        if (("TURBOPACK compile-time value", "object") !== 'undefined' && !window.isSecureContext) {
            setGeoError([
                'This address is not a “secure” page (it must be https:// or localhost for GPS).',
                'On Wi‑Fi dev URLs like http://10.x… or http://192.168…, Safari and Chrome block location and may not show any allow prompt—that looks like “permission denied”.',
                'What to do: tap “Select location on map”, or deploy with HTTPS. On a computer, http://localhost:3000 can use current location.'
            ].join('\n\n'));
            return;
        }
        setGeoLocating(true);
        navigator.geolocation.getCurrentPosition(async (pos)=>{
            const { latitude, longitude } = pos.coords;
            try {
                const fc = await loadCellsGeoJson();
                const id = findCellIdForLngLat(longitude, latitude, fc);
                if (id === null) {
                    setGeoError('Your position is outside the Indiana analysis grid. Select a cell on the map instead.');
                    setGeoLocating(false);
                    return;
                }
                pendingGeoCellIdRef.current = id;
                setShowDashboard(true);
            } catch  {
                setGeoError('Could not load cell boundaries. Try again or use the map.');
            } finally{
                setGeoLocating(false);
            }
        }, (err)=>{
            setGeoLocating(false);
            if (err.code === 1) {
                const httpsHint = ("TURBOPACK compile-time value", "object") !== 'undefined' && !window.isSecureContext ? 'You are not on HTTPS/localhost, so the browser will not offer location.\n\n' : '';
                setGeoError([
                    httpsHint + 'Location was blocked. The browser never showed (or you tapped Block) the location prompt.',
                    'iPhone: Settings → Safari → Location, or open the ··· / aA menu → Website Settings → Location → Allow.',
                    'Android: tap the lock icon in the address bar → Site settings → Location → Allow.',
                    'Or tap “Select location on map” and choose your cell.'
                ].join('\n\n'));
            } else if (err.code === 2) {
                setGeoError('Position unavailable. Try the map or check your device settings.');
            } else {
                setGeoError('Could not get your location in time. Try again or use the map.');
            }
        }, {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 60000
        });
    };
    // Render only Indiana boundary. The map itself will be clamped to these bounds.
    const indianaMask = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$json$2f$indiana$2d$boundary$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    /** On small screens, Continue hides the map to show charts; On-Farm Trials needs the map to pick a region. */ const showMapPanel = !isMobile || mobileMapOpen || !showAONR || resultsSection === 'trials' && mobileTrialsView === 'map';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white font-sans text-slate-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: !showDashboard ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: false,
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "fixed inset-0 z-[10000] overflow-y-auto overflow-x-hidden overscroll-y-contain bg-black text-[#CEB888]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-h-full w-full flex-col items-center justify-center px-4 py-10 text-center",
                        style: {
                            paddingTop: 'max(2.5rem, env(safe-area-inset-top))',
                            paddingBottom: 'max(2.5rem, env(safe-area-inset-bottom))'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mb-6 max-w-4xl font-sans text-2xl font-black uppercase leading-tight tracking-tight text-[#CEB888] sm:mb-8 sm:text-3xl md:mb-10 md:text-5xl md:leading-[1.15] md:tracking-wide lg:text-6xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block",
                                        children: "Optimum nitrogen rate"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/indiana-app.tsx",
                                        lineNumber: 2102,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-2 block text-white md:mt-3",
                                        children: "for corn"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/indiana-app.tsx",
                                        lineNumber: 2103,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/indiana-app.tsx",
                                lineNumber: 2101,
                                columnNumber: 13
                            }, this),
                            !showLocationOptions ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                type: "button",
                                whileTap: {
                                    scale: 0.97
                                },
                                transition: {
                                    type: 'spring',
                                    stiffness: 520,
                                    damping: 32
                                },
                                onClick: ()=>setShowLocationOptions(true),
                                style: {
                                    WebkitTapHighlightColor: 'transparent',
                                    touchAction: 'manipulation'
                                },
                                className: "relative z-10 shrink-0 cursor-pointer rounded-full bg-[#CEB888] px-8 py-4 text-lg font-bold text-black shadow-[0_0_30px_rgba(206,184,136,0.3)] sm:px-10 sm:py-5 sm:text-xl sm:hover:scale-105",
                                children: "Start Analysis →"
                            }, void 0, false, {
                                fileName: "[project]/src/app/indiana-app.tsx",
                                lineNumber: 2106,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex w-full max-w-lg flex-col gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-center text-sm font-semibold uppercase tracking-widest text-[#CEB888]/90",
                                        children: "How do you want to choose your field?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/indiana-app.tsx",
                                        lineNumber: 2118,
                                        columnNumber: 17
                                    }, this),
                                    geoSecureContext === false && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "rounded-xl border border-amber-500/35 bg-amber-950/30 px-4 py-3 text-left text-xs leading-relaxed text-amber-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-amber-200",
                                                children: "GPS on your phone: "
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                lineNumber: 2123,
                                                columnNumber: 21
                                            }, this),
                                            "This page is opened as ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-amber-200",
                                                children: "http://"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                lineNumber: 2124,
                                                columnNumber: 44
                                            }, this),
                                            " on a network address. Browsers ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "will not show"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                lineNumber: 2125,
                                                columnNumber: 39
                                            }, this),
                                            " the location allow/deny sheet for that—use",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Select location on map"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                lineNumber: 2126,
                                                columnNumber: 21
                                            }, this),
                                            ". For GPS, use ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "https://"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                lineNumber: 2126,
                                                columnNumber: 75
                                            }, this),
                                            " (production) or ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "localhost"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                lineNumber: 2127,
                                                columnNumber: 24
                                            }, this),
                                            " on your computer."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/indiana-app.tsx",
                                        lineNumber: 2122,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-4 sm:grid-cols-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleChooseMapSelection,
                                                style: {
                                                    touchAction: 'manipulation',
                                                    WebkitTapHighlightColor: 'transparent'
                                                },
                                                className: "flex flex-col items-center gap-4 rounded-2xl border-2 border-[#CEB888]/40 bg-black/40 px-6 py-8 text-center transition hover:border-[#CEB888] hover:bg-[#CEB888]/10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IndianaMapOptionIcon, {
                                                        className: "h-16 w-16 text-[#CEB888]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                        lineNumber: 2137,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-bold uppercase leading-snug text-white",
                                                        children: "Select location on map"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                        lineNumber: 2138,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-medium text-[#CEB888]/80",
                                                        children: "Indiana grid"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                        lineNumber: 2141,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                lineNumber: 2131,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                disabled: geoLocating,
                                                onClick: handleChooseCurrentLocation,
                                                style: {
                                                    touchAction: 'manipulation',
                                                    WebkitTapHighlightColor: 'transparent'
                                                },
                                                className: "flex flex-col items-center gap-4 rounded-2xl border-2 border-[#CEB888]/40 bg-black/40 px-6 py-8 text-center transition hover:border-[#CEB888] hover:bg-[#CEB888]/10 disabled:cursor-wait disabled:opacity-60",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CompassLocationIcon, {
                                                        className: "h-16 w-16 text-[#CEB888]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                        lineNumber: 2150,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-bold uppercase leading-snug text-white",
                                                        children: "Use current location"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                        lineNumber: 2151,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-medium text-[#CEB888]/80",
                                                        children: geoLocating ? 'Getting location…' : 'GPS — Indiana only'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                        lineNumber: 2154,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                lineNumber: 2143,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/indiana-app.tsx",
                                        lineNumber: 2130,
                                        columnNumber: 17
                                    }, this),
                                    geoError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "max-h-[40vh] overflow-y-auto rounded-xl border border-rose-500/40 bg-rose-950/40 px-4 py-3 text-left text-sm leading-relaxed text-rose-100 whitespace-pre-line",
                                        children: geoError
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/indiana-app.tsx",
                                        lineNumber: 2160,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            setShowLocationOptions(false);
                                            setGeoError(null);
                                        },
                                        className: "text-center text-xs font-bold uppercase tracking-wide text-white/70 underline-offset-4 transition hover:text-white hover:underline",
                                        children: "← Back"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/indiana-app.tsx",
                                        lineNumber: 2164,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/indiana-app.tsx",
                                lineNumber: 2117,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/indiana-app.tsx",
                        lineNumber: 2094,
                        columnNumber: 13
                    }, this)
                }, "pre-dashboard", false, {
                    fileName: "[project]/src/app/indiana-app.tsx",
                    lineNumber: 2087,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: false,
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0,
                        pointerEvents: 'none'
                    },
                    transition: {
                        duration: 0.2
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "sticky top-0 z-[1200] flex items-center justify-between border-b-4 border-black bg-[#CEB888] p-4 shadow-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/logos/indnrate-new.png",
                                            alt: "INDNRATE logo",
                                            width: 80,
                                            height: 80,
                                            className: "h-12 w-12 object-contain md:h-16 md:w-16",
                                            priority: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/indiana-app.tsx",
                                            lineNumber: 2188,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/logos/purdue-wordmark.svg",
                                            alt: "Purdue University",
                                            className: "h-8 w-auto md:h-10",
                                            width: 160,
                                            height: 40,
                                            priority: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/indiana-app.tsx",
                                            lineNumber: 2196,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/indiana-app.tsx",
                                    lineNumber: 2187,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowDashboard(false),
                                    className: "text-xs font-bold uppercase underline transition-opacity hover:opacity-70",
                                    children: "Back to Home"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/indiana-app.tsx",
                                    lineNumber: 2205,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/indiana-app.tsx",
                            lineNumber: 2186,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                            className: "container mx-auto px-6 py-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid items-start gap-10 lg:grid-cols-12",
                                children: [
                                    showMapPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: mapPanelRef,
                                        className: "lg:col-span-5 lg:sticky lg:top-28",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative z-0 aspect-[3/4] overflow-hidden rounded-xl border-2 border-black",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapContainer, {
                                                        center: [
                                                            39.774333,
                                                            -86.430955
                                                        ],
                                                        zoom: isMobile ? 6.3 : 7,
                                                        minZoom: isMobile ? 6.3 : 7,
                                                        bounds: [
                                                            [
                                                                37.788942,
                                                                -88.060345
                                                            ],
                                                            [
                                                                41.759724,
                                                                -84.801565
                                                            ]
                                                        ],
                                                        maxBounds: [
                                                            [
                                                                37.788942,
                                                                -88.060345
                                                            ],
                                                            [
                                                                41.759724,
                                                                -84.801565
                                                            ]
                                                        ],
                                                        maxBoundsViscosity: 1,
                                                        worldCopyJump: true,
                                                        style: {
                                                            height: '100%',
                                                            width: '100%',
                                                            backgroundColor: 'white'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProviderTiles, {
                                                                provider: "OpenStreetMap.Mapnik"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                lineNumber: 2240,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapInvalidateSize, {
                                                                trigger: `${showMapPanel}-${resultsSection}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                lineNumber: 2241,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapTapToContinue, {
                                                                onTap: handleMapInteraction
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                lineNumber: 2242,
                                                                columnNumber: 25
                                                            }, this),
                                                            (!showAONR || resultsSection === 'optimize' || resultsSection === 'dynamic') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CellsLayer, {
                                                                selectedCellId: selectedCellId,
                                                                onSelectCell: setSelectedCellId
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                lineNumber: 2244,
                                                                columnNumber: 27
                                                            }, this),
                                                            showAONR && resultsSection === 'trials' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CountiesLayer, {
                                                                selectedCountyName: selectedCountyName,
                                                                onSelectCounty: (name, region, fillColor)=>{
                                                                    setSelectedCountyName(name);
                                                                    setSelectedCountyRegion(region);
                                                                    setSelectedRegionMapColor(fillColor);
                                                                    if (isMobile) {
                                                                        setMobileTrialsView('results');
                                                                        setMobileMapOpen(false);
                                                                        requestAnimationFrame(()=>{
                                                                            aonrRef.current?.scrollIntoView({
                                                                                behavior: 'smooth',
                                                                                block: 'start'
                                                                            });
                                                                        });
                                                                    }
                                                                },
                                                                onLoadError: setCountiesMapError
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                lineNumber: 2247,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GeoJSON, {
                                                                data: indianaMask,
                                                                interactive: false,
                                                                style: {
                                                                    fillOpacity: 0,
                                                                    color: '#CEB888',
                                                                    weight: 5
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                lineNumber: 2264,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, isMobile ? 'ind-map-mobile' : 'ind-map-desktop', true, {
                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                        lineNumber: 2219,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/indiana-app.tsx",
                                                    lineNumber: 2218,
                                                    columnNumber: 21
                                                }, this),
                                                !showAONR && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            disabled: !continueEnabled,
                                                            onClick: handleContinue,
                                                            className: `w-full rounded-xl px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors ${continueEnabled ? 'bg-emerald-500 text-white hover:bg-emerald-400' : 'cursor-not-allowed bg-slate-200 text-slate-500'}`,
                                                            children: "Continue"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/indiana-app.tsx",
                                                            lineNumber: 2278,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-3 text-center text-xs text-slate-500",
                                                            children: "Tap the map to continue"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/indiana-app.tsx",
                                                            lineNumber: 2289,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/indiana-app.tsx",
                                                    lineNumber: 2277,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/indiana-app.tsx",
                                            lineNumber: 2217,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/indiana-app.tsx",
                                        lineNumber: 2216,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-12 pb-32 lg:col-span-7",
                                        children: [
                                            showAONR && resultsSection !== 'dynamic' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid gap-6 md:grid-cols-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PriceInput, {
                                                            label: "N-Price ($/lb)",
                                                            value: nPrice,
                                                            min: 0.2,
                                                            max: 1.5,
                                                            step: 0.01,
                                                            onChange: setNPrice,
                                                            color: "accent-black"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/indiana-app.tsx",
                                                            lineNumber: 2302,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PriceInput, {
                                                            label: "Corn Price ($/bu)",
                                                            value: cornPrice,
                                                            min: 3,
                                                            max: 10,
                                                            step: 0.1,
                                                            onChange: setCornPrice,
                                                            color: "accent-green-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/indiana-app.tsx",
                                                            lineNumber: 2311,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/indiana-app.tsx",
                                                    lineNumber: 2301,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                lineNumber: 2300,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                ref: aonrRef,
                                                className: "mb-4 flex flex-wrap justify-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            setResultsSection('optimize');
                                                            setMobileTrialsView('map');
                                                        },
                                                        className: `inline-flex items-center rounded-2xl px-4 py-3 text-[11px] font-bold uppercase tracking-wide transition md:text-xs ${resultsSection === 'optimize' ? 'bg-[#CEB888] text-black shadow-sm' : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-100'}`,
                                                        children: "Optimize Your Nitrogen Rate"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                        lineNumber: 2324,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        disabled: !showAONR,
                                                        onClick: ()=>{
                                                            setResultsSection('trials');
                                                            if (isMobile) setMobileTrialsView('map');
                                                        },
                                                        className: `inline-flex items-center rounded-2xl px-4 py-3 text-[11px] font-bold uppercase tracking-wide transition md:text-xs ${!showAONR ? 'cursor-not-allowed border border-slate-200 bg-slate-200 text-slate-500' : resultsSection === 'trials' ? 'bg-[#CEB888] text-black shadow-sm' : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-100'}`,
                                                        children: "On-Farm Trials"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                        lineNumber: 2338,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        disabled: !showAONR,
                                                        onClick: ()=>{
                                                            setResultsSection('dynamic');
                                                            setMobileTrialsView('map');
                                                        },
                                                        className: `inline-flex items-center rounded-2xl px-4 py-3 text-[11px] font-bold uppercase tracking-wide transition md:text-xs ${!showAONR ? 'cursor-not-allowed border border-slate-200 bg-slate-200 text-slate-500' : resultsSection === 'dynamic' ? 'bg-[#CEB888] text-black shadow-sm' : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-100'}`,
                                                        children: "Dynamic N-Rate Comparison"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                        lineNumber: 2355,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                lineNumber: 2323,
                                                columnNumber: 19
                                            }, this),
                                            !showAONR ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden lg:block",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl sm:p-6 lg:p-10",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DualAxisNitrogenChart, {
                                                        points: selectedCellId !== null && dualCurveData.length > 0 ? dualCurveData : PREVIEW_DUAL_POINTS,
                                                        eonrX: null,
                                                        isMobile: false,
                                                        hideCurve: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                        lineNumber: 2377,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/indiana-app.tsx",
                                                    lineNumber: 2376,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                lineNumber: 2375,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: resultsSection === 'optimize' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl sm:p-6 lg:p-10",
                                                    children: [
                                                        cellDataError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mb-6 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700",
                                                            children: [
                                                                "Backend error: ",
                                                                cellDataError
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/indiana-app.tsx",
                                                            lineNumber: 2394,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                !cellDataError && dualCurveData.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DualAxisNitrogenChart, {
                                                                    points: dualCurveData,
                                                                    eonrX: eonrRow?.nitroLbAc ?? null,
                                                                    isMobile: isMobile
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/indiana-app.tsx",
                                                                    lineNumber: 2400,
                                                                    columnNumber: 31
                                                                }, this),
                                                                cellDataLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationLoadingOverlay, {
                                                                    showBackendWake: showBackendWakeUi,
                                                                    statusMessage: LOADING_STATUS_MESSAGES[loadingWakeMessageIndex]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/indiana-app.tsx",
                                                                    lineNumber: 2407,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/indiana-app.tsx",
                                                            lineNumber: 2398,
                                                            columnNumber: 27
                                                        }, this),
                                                        !cellDataError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-4 grid grid-cols-1 gap-2 sm:mt-5 sm:grid-cols-2 sm:gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex min-h-[118px] min-w-0 flex-col justify-center rounded-2xl border border-black/15 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_1px_3px_rgba(0,0,0,0.12)] sm:min-h-[124px] sm:p-2.5",
                                                                    style: {
                                                                        background: PURDUE_HEADER_BEIGE_PANEL
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EonrTachometerGauge, {
                                                                        eonrLbAc: eonrRow?.nitroLbAc ?? null,
                                                                        minRate: eonrGaugeScale.min,
                                                                        maxRate: eonrGaugeScale.max,
                                                                        isMobile: isMobile
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                                        lineNumber: 2419,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/indiana-app.tsx",
                                                                    lineNumber: 2415,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex min-h-[118px] min-w-0 flex-col justify-center rounded-2xl border border-black/15 p-2 text-right shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_1px_3px_rgba(0,0,0,0.12)] sm:min-h-[124px] sm:p-2.5",
                                                                    style: {
                                                                        background: PURDUE_HEADER_BEIGE_PANEL
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-950",
                                                                            children: "Price ratio"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/indiana-app.tsx",
                                                                            lineNumber: 2430,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mt-0.5 text-xs font-medium text-stone-900",
                                                                            children: "N / Corn"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/indiana-app.tsx",
                                                                            lineNumber: 2433,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mt-1.5 border-t border-black/15 pt-1.5 font-mono text-[1.2rem] font-semibold leading-none tracking-tight text-stone-950 tabular-nums sm:text-[1.3rem]",
                                                                            children: priceRatio === null ? '—' : priceRatio.toFixed(3)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/indiana-app.tsx",
                                                                            lineNumber: 2434,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        eonrProfitBandSummary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                                                            className: "mt-2 space-y-1 border-t border-black/15 pt-2 text-left text-[11px] text-stone-800",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex justify-between gap-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                                            className: "shrink-0 text-stone-600",
                                                                                            children: "Lower bound (N)"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/indiana-app.tsx",
                                                                                            lineNumber: 2440,
                                                                                            columnNumber: 39
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                                            className: "font-mono tabular-nums text-stone-950",
                                                                                            children: [
                                                                                                Math.round(eonrProfitBandSummary.nLow),
                                                                                                " lb/ac"
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/indiana-app.tsx",
                                                                                            lineNumber: 2441,
                                                                                            columnNumber: 39
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/indiana-app.tsx",
                                                                                    lineNumber: 2439,
                                                                                    columnNumber: 37
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex justify-between gap-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                                            className: "shrink-0 text-stone-600",
                                                                                            children: "Upper bound (N)"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/indiana-app.tsx",
                                                                                            lineNumber: 2446,
                                                                                            columnNumber: 39
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                                            className: "font-mono tabular-nums text-stone-950",
                                                                                            children: [
                                                                                                Math.round(eonrProfitBandSummary.nHigh),
                                                                                                " lb/ac"
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/indiana-app.tsx",
                                                                                            lineNumber: 2447,
                                                                                            columnNumber: 39
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/indiana-app.tsx",
                                                                                    lineNumber: 2445,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/indiana-app.tsx",
                                                                            lineNumber: 2438,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/indiana-app.tsx",
                                                                    lineNumber: 2426,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/indiana-app.tsx",
                                                            lineNumber: 2414,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/indiana-app.tsx",
                                                    lineNumber: 2392,
                                                    columnNumber: 25
                                                }, this) : resultsSection === 'trials' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                    className: "overflow-hidden rounded-3xl border border-dashed border-slate-300 bg-slate-50/80 p-8 shadow-inner sm:p-10",
                                                    "aria-labelledby": "on-farm-trials-heading",
                                                    children: [
                                                        countiesMapError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-3 text-sm text-red-700",
                                                            role: "alert",
                                                            children: countiesMapError
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/indiana-app.tsx",
                                                            lineNumber: 2463,
                                                            columnNumber: 29
                                                        }, this),
                                                        isMobile && mobileTrialsView === 'map' && !countiesMapError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-6 rounded-xl border border-slate-200 bg-white px-4 py-5 text-center text-sm text-slate-600 shadow-sm",
                                                            children: "Select your region on the map, then tap Continue."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/indiana-app.tsx",
                                                            lineNumber: 2468,
                                                            columnNumber: 29
                                                        }, this),
                                                        !isMobile || mobileTrialsView === 'results' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-8",
                                                            children: [
                                                                !trialsRegionApiParam && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EonrHistogramEmptyChart, {
                                                                    isMobile: isMobile
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/indiana-app.tsx",
                                                                    lineNumber: 2475,
                                                                    columnNumber: 33
                                                                }, this),
                                                                trialsRegionApiParam && eonrHistogramLoading && eonrHistogramBins.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex min-h-[200px] flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-slate-200 bg-white/60 px-6 py-10",
                                                                    "aria-busy": true,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-9 w-9 shrink-0 animate-spin rounded-full border-4",
                                                                            style: {
                                                                                borderColor: `${selectedRegionMapColor ?? DEFAULT_HISTOGRAM_ACCENT}35`,
                                                                                borderTopColor: selectedRegionMapColor ?? DEFAULT_HISTOGRAM_ACCENT
                                                                            },
                                                                            "aria-hidden": true
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/indiana-app.tsx",
                                                                            lineNumber: 2484,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-center text-sm font-medium text-slate-600",
                                                                            children: [
                                                                                "Loading EONR trial counts for region ",
                                                                                trialsRegionDisplayLabel,
                                                                                "…"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/indiana-app.tsx",
                                                                            lineNumber: 2492,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/indiana-app.tsx",
                                                                    lineNumber: 2480,
                                                                    columnNumber: 33
                                                                }, this),
                                                                trialsRegionApiParam && eonrHistogramError && !eonrHistogramLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-800",
                                                                    children: eonrHistogramError
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/indiana-app.tsx",
                                                                    lineNumber: 2498,
                                                                    columnNumber: 33
                                                                }, this),
                                                                trialsRegionApiParam && !eonrHistogramLoading && !eonrHistogramError && eonrHistogramBins.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "rounded-xl border border-slate-200 bg-white px-4 py-5 text-center text-sm text-slate-600 shadow-sm",
                                                                    children: "No EONR histogram data for this region yet. The database may still be filling in trial summaries, or the region code may not match the backend."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/indiana-app.tsx",
                                                                    lineNumber: 2506,
                                                                    columnNumber: 35
                                                                }, this),
                                                                trialsRegionApiParam && eonrHistogramBins.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EonrHistogramChart, {
                                                                            bins: eonrHistogramBins,
                                                                            regionLabel: trialsRegionDisplayLabel ?? trialsRegionApiParam,
                                                                            isMobile: isMobile,
                                                                            accentHex: selectedRegionMapColor ?? DEFAULT_HISTOGRAM_ACCENT
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/indiana-app.tsx",
                                                                            lineNumber: 2514,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        eonrHistogramLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "pointer-events-none absolute inset-0 flex items-center justify-center rounded-2xl bg-white/35 backdrop-blur-[1px]",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "h-9 w-9 shrink-0 animate-spin rounded-full border-4",
                                                                                style: {
                                                                                    borderColor: `${selectedRegionMapColor ?? DEFAULT_HISTOGRAM_ACCENT}35`,
                                                                                    borderTopColor: selectedRegionMapColor ?? DEFAULT_HISTOGRAM_ACCENT
                                                                                },
                                                                                "aria-label": "Updating histogram"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                                lineNumber: 2522,
                                                                                columnNumber: 39
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/indiana-app.tsx",
                                                                            lineNumber: 2521,
                                                                            columnNumber: 37
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/indiana-app.tsx",
                                                                    lineNumber: 2513,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/indiana-app.tsx",
                                                            lineNumber: 2473,
                                                            columnNumber: 29
                                                        }, this) : null
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/indiana-app.tsx",
                                                    lineNumber: 2458,
                                                    columnNumber: 25
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                    className: "overflow-hidden rounded-3xl border border-dashed border-slate-300 bg-slate-50/80 p-8 shadow-inner sm:p-10",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-5",
                                                        children: [
                                                            dynamicPriceLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600",
                                                                children: "Loading merged price dataset..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                lineNumber: 2542,
                                                                columnNumber: 31
                                                            }, this),
                                                            dynamicPriceError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800",
                                                                children: dynamicPriceError
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                lineNumber: 2547,
                                                                columnNumber: 31
                                                            }, this),
                                                            dynamicPriceRows.length > 0 && selectedDynamicPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "rounded-2xl border border-slate-200 bg-white px-4 py-4 sm:px-5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mb-3 flex items-center justify-between gap-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs font-semibold uppercase tracking-[0.16em] text-slate-500",
                                                                                children: [
                                                                                    "Saved scenarios (",
                                                                                    savedDynamicScenarios.length,
                                                                                    "/5)"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                                lineNumber: 2555,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: handleSaveDynamicScenario,
                                                                                disabled: selectedCellId === null || dynamicCurveData.length < 2 || savedDynamicScenarios.length >= 5,
                                                                                className: `rounded-lg px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] ${selectedCellId === null || dynamicCurveData.length < 2 || savedDynamicScenarios.length >= 5 ? 'cursor-not-allowed bg-slate-200 text-slate-500' : 'bg-emerald-600 text-white hover:bg-emerald-500'}`,
                                                                                children: "Save scenario"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                                lineNumber: 2558,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                                        lineNumber: 2554,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    savedDynamicScenarios.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mb-4 flex flex-wrap gap-2",
                                                                        children: savedDynamicScenarios.map((scenario)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "inline-flex max-w-full items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "h-2.5 w-2.5 shrink-0 rounded-full",
                                                                                        style: {
                                                                                            backgroundColor: scenario.color
                                                                                        },
                                                                                        "aria-hidden": true
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                                                        lineNumber: 2584,
                                                                                        columnNumber: 41
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "truncate",
                                                                                        children: scenario.label
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                                                        lineNumber: 2589,
                                                                                        columnNumber: 41
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        type: "button",
                                                                                        onClick: ()=>handleRemoveDynamicScenario(scenario.id),
                                                                                        className: "ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full text-slate-500 hover:bg-slate-200 hover:text-slate-700",
                                                                                        "aria-label": `Remove ${scenario.label}`,
                                                                                        children: "X"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                                                        lineNumber: 2590,
                                                                                        columnNumber: 41
                                                                                    }, this)
                                                                                ]
                                                                            }, scenario.id, true, {
                                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                                lineNumber: 2580,
                                                                                columnNumber: 39
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                                        lineNumber: 2578,
                                                                        columnNumber: 35
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mb-4 text-xs text-slate-500",
                                                                        children: "Save up to five scenarios to compare fixed curves."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                                        lineNumber: 2602,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "grid gap-3 sm:grid-cols-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-xs font-semibold uppercase tracking-[0.16em] text-slate-500",
                                                                                        children: "Select date"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                                                        lineNumber: 2608,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "mt-1 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-800 shadow-sm",
                                                                                        children: fullDateLabelFromIsoDate(selectedDynamicPrice.dateIso)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                                                        lineNumber: 2611,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                                lineNumber: 2607,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        htmlFor: "dynamic-fertilizer-source",
                                                                                        className: "text-xs font-semibold uppercase tracking-[0.16em] text-slate-500",
                                                                                        children: "Fertilizer type"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                                                        lineNumber: 2616,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                        id: "dynamic-fertilizer-source",
                                                                                        value: dynamicNitrogenSource,
                                                                                        onChange: (e)=>setDynamicNitrogenSource(e.target.value),
                                                                                        className: "mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100",
                                                                                        children: dynamicNitrogenSources.map((source)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                value: source,
                                                                                                children: source
                                                                                            }, source, false, {
                                                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                                                lineNumber: 2629,
                                                                                                columnNumber: 41
                                                                                            }, this))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                                                        lineNumber: 2622,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                                lineNumber: 2615,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                                        lineNumber: 2606,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "relative mt-2",
                                                                        onMouseMove: (e)=>{
                                                                            const rect = e.currentTarget.getBoundingClientRect();
                                                                            const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / Math.max(rect.width, 1)));
                                                                            const pct = ratio * 100;
                                                                            if (pct >= iranConflictStartPct) {
                                                                                setShowConflictTooltip(true);
                                                                                setConflictTooltipLeftPct(pct);
                                                                            } else {
                                                                                setShowConflictTooltip(false);
                                                                            }
                                                                        },
                                                                        onMouseLeave: ()=>setShowConflictTooltip(false),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "pointer-events-none absolute inset-x-0 top-0 h-2 rounded-lg bg-slate-200"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                                lineNumber: 2654,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "pointer-events-none absolute top-0 h-2 rounded-lg bg-gradient-to-r from-rose-200/90 to-red-300/90",
                                                                                style: {
                                                                                    left: `${iranConflictStartPct}%`,
                                                                                    width: `${Math.max(0, 100 - iranConflictStartPct)}%`
                                                                                },
                                                                                "aria-hidden": true
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                                lineNumber: 2655,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "pointer-events-none absolute left-0 top-0 h-2 rounded-lg bg-[#2f7d45]",
                                                                                style: {
                                                                                    width: `${Math.min(dynamicSliderProgressPct, iranConflictStartPct)}%`
                                                                                },
                                                                                "aria-hidden": true
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                                lineNumber: 2663,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "pointer-events-none absolute top-0 h-2 rounded-lg bg-red-600",
                                                                                style: {
                                                                                    left: `${iranConflictStartPct}%`,
                                                                                    width: `${Math.max(0, dynamicSliderProgressPct - iranConflictStartPct)}%`
                                                                                },
                                                                                "aria-hidden": true
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                                lineNumber: 2668,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "range",
                                                                                min: 0,
                                                                                max: Math.max(0, dynamicPriceRows.length - 1),
                                                                                step: 1,
                                                                                value: Math.min(dynamicDateIndex, dynamicPriceRows.length - 1),
                                                                                onChange: (e)=>setDynamicDateIndex(Number(e.target.value)),
                                                                                className: "dynamic-date-slider relative z-[1] h-5 w-full cursor-pointer appearance-none rounded-lg",
                                                                                style: {
                                                                                    background: 'transparent'
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                                lineNumber: 2676,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            showConflictTooltip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "pointer-events-none absolute -top-8 -translate-x-1/2 whitespace-nowrap rounded-md bg-red-600 px-2 py-1 text-[10px] font-bold text-white shadow-md",
                                                                                style: {
                                                                                    left: `${conflictTooltipLeftPct}%`
                                                                                },
                                                                                children: "Iran Conflict"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                                lineNumber: 2689,
                                                                                columnNumber: 37
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "pointer-events-none absolute -bottom-5 w-px border-l border-dashed border-red-400/90",
                                                                                style: {
                                                                                    left: `${iranConflictStartPct}%`,
                                                                                    height: '1.2rem'
                                                                                },
                                                                                "aria-hidden": true
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                                lineNumber: 2696,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                                        lineNumber: 2636,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "relative mt-3 h-11 border-t border-slate-200",
                                                                        children: dynamicSliderTicks.map((tick)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "absolute top-0 -translate-x-1/2 text-[10px]",
                                                                                style: {
                                                                                    left: `${tick.leftPct}%`
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: `mx-auto mt-[-4px] h-2 w-2 rounded-full ${tick.idx === Math.min(dynamicDateIndex, dynamicPriceRows.length - 1) ? 'bg-emerald-700' : 'bg-emerald-500/80'}`,
                                                                                        "aria-hidden": true
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                                                        lineNumber: 2712,
                                                                                        columnNumber: 39
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: `mt-1 block whitespace-nowrap ${tick.idx === Math.min(dynamicDateIndex, dynamicPriceRows.length - 1) ? 'font-bold text-emerald-800' : 'text-slate-500'}`,
                                                                                        children: tick.label
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                                                        lineNumber: 2720,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                ]
                                                                            }, tick.idx, true, {
                                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                                lineNumber: 2707,
                                                                                columnNumber: 37
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                                        lineNumber: 2705,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                lineNumber: 2553,
                                                                columnNumber: 31
                                                            }, this),
                                                            !selectedCellId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600",
                                                                children: "Select a map cell to run a dynamic date-based comparison."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                lineNumber: 2736,
                                                                columnNumber: 31
                                                            }, this),
                                                            selectedCellId && dynamicCurveError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-800",
                                                                children: [
                                                                    "Backend error: ",
                                                                    dynamicCurveError
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                lineNumber: 2742,
                                                                columnNumber: 31
                                                            }, this),
                                                            selectedCellId && selectedDynamicPrice && !dynamicCurveError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-4",
                                                                children: [
                                                                    dynamicCurveData.length > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl sm:p-6 lg:p-10",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DualAxisNitrogenChart, {
                                                                                points: dynamicCurveData,
                                                                                eonrX: dynamicEonrRow?.nitroLbAc ?? null,
                                                                                comparisonScenarios: dynamicComparisonScenarios,
                                                                                isMobile: isMobile
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                                lineNumber: 2751,
                                                                                columnNumber: 37
                                                                            }, this),
                                                                            dynamicCurveLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationLoadingOverlay, {
                                                                                showBackendWake: false,
                                                                                statusMessage: "Refreshing dynamic comparison curve..."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                                lineNumber: 2758,
                                                                                columnNumber: 39
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                                        lineNumber: 2750,
                                                                        columnNumber: 35
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "rounded-2xl border border-slate-200 bg-white px-4 py-8 text-center text-sm text-slate-600 shadow-sm",
                                                                        children: dynamicCurveLoading ? 'Loading dynamic nitrogen response curve...' : 'Dynamic response curve is not available for the selected inputs yet.'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                                        lineNumber: 2765,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "grid gap-3 sm:grid-cols-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/60 px-4 py-4 shadow-sm",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NitrogenDollarIcon, {
                                                                                        className: "h-12 w-12 shrink-0 text-emerald-700"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                                                        lineNumber: 2773,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-xs font-semibold uppercase tracking-[0.16em] text-emerald-900",
                                                                                                children: "Nitrogen Price"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                                                lineNumber: 2775,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "mt-1 text-2xl font-black text-emerald-800",
                                                                                                children: selectedDynamicNitroPrice === null ? '—' : `$${selectedDynamicNitroPrice.toFixed(2)}`
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                                                lineNumber: 2778,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-sm text-emerald-700",
                                                                                                children: [
                                                                                                    dynamicNitrogenSource || 'Selected source',
                                                                                                    " per lb N"
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                                                lineNumber: 2783,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            savedDynamicScenarios.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "mt-2 space-y-1",
                                                                                                children: savedDynamicScenarios.map((scenario)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "flex items-center gap-2 text-xs text-emerald-900",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "h-2.5 w-2.5 shrink-0 rounded-full",
                                                                                                                style: {
                                                                                                                    backgroundColor: scenario.color
                                                                                                                },
                                                                                                                "aria-hidden": true
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                                                                lineNumber: 2790,
                                                                                                                columnNumber: 47
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                children: [
                                                                                                                    "$",
                                                                                                                    scenario.nitroPrice.toFixed(2),
                                                                                                                    "/lb (",
                                                                                                                    formatPercentDiff(scenario.nitroPrice, selectedDynamicNitroPrice ?? scenario.nitroPrice),
                                                                                                                    ")"
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                                                                lineNumber: 2795,
                                                                                                                columnNumber: 47
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, `n-${scenario.id}`, true, {
                                                                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                                                                        lineNumber: 2789,
                                                                                                        columnNumber: 45
                                                                                                    }, this))
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                                                lineNumber: 2787,
                                                                                                columnNumber: 41
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                                                        lineNumber: 2774,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                                lineNumber: 2772,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-3 rounded-2xl border border-amber-200 bg-amber-50/60 px-4 py-4 shadow-sm",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CornDollarIcon, {
                                                                                        className: "h-12 w-12 shrink-0 text-amber-600"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                                                        lineNumber: 2808,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-xs font-semibold uppercase tracking-[0.16em] text-amber-900",
                                                                                                children: "Corn Price"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                                                lineNumber: 2810,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "mt-1 text-2xl font-black text-amber-800",
                                                                                                children: [
                                                                                                    "$",
                                                                                                    selectedDynamicPrice.cornPrice.toFixed(2)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                                                lineNumber: 2813,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-sm text-amber-700",
                                                                                                children: "per bushel"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                                                lineNumber: 2816,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            savedDynamicScenarios.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "mt-2 space-y-1",
                                                                                                children: savedDynamicScenarios.map((scenario)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "flex items-center gap-2 text-xs text-amber-900",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "h-2.5 w-2.5 shrink-0 rounded-full",
                                                                                                                style: {
                                                                                                                    backgroundColor: scenario.color
                                                                                                                },
                                                                                                                "aria-hidden": true
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                                                                lineNumber: 2821,
                                                                                                                columnNumber: 47
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                children: [
                                                                                                                    "$",
                                                                                                                    scenario.cornPrice.toFixed(2),
                                                                                                                    "/bu (",
                                                                                                                    formatPercentDiff(scenario.cornPrice, selectedDynamicPrice.cornPrice),
                                                                                                                    ")"
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                                                                lineNumber: 2826,
                                                                                                                columnNumber: 47
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, `c-${scenario.id}`, true, {
                                                                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                                                                        lineNumber: 2820,
                                                                                                        columnNumber: 45
                                                                                                    }, this))
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                                                lineNumber: 2818,
                                                                                                columnNumber: 41
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                                                        lineNumber: 2809,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                                lineNumber: 2807,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                                        lineNumber: 2771,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/indiana-app.tsx",
                                                                lineNumber: 2748,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/indiana-app.tsx",
                                                        lineNumber: 2539,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/indiana-app.tsx",
                                                    lineNumber: 2538,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/indiana-app.tsx",
                                        lineNumber: 2298,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/indiana-app.tsx",
                                lineNumber: 2214,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/indiana-app.tsx",
                            lineNumber: 2213,
                            columnNumber: 13
                        }, this)
                    ]
                }, "dashboard", true, {
                    fileName: "[project]/src/app/indiana-app.tsx",
                    lineNumber: 2179,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/indiana-app.tsx",
                lineNumber: 2085,
                columnNumber: 7
            }, this),
            isMobile && showAONR && !mobileMapOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: handleOpenMapFromFloatingButton,
                className: "fixed bottom-5 right-5 z-[300] inline-flex items-center gap-2 rounded-full bg-[#CEB888] px-4 py-3 text-sm font-semibold text-black shadow-lg transition hover:opacity-90",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        "aria-hidden": true,
                        viewBox: "0 0 24 24",
                        className: "h-4 w-4 shrink-0",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M3.8 6.2 11.9 3l8.3 3.2v11.6L12 21l-8.2-3.2z"
                            }, void 0, false, {
                                fileName: "[project]/src/app/indiana-app.tsx",
                                lineNumber: 2868,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M11.9 3v18"
                            }, void 0, false, {
                                fileName: "[project]/src/app/indiana-app.tsx",
                                lineNumber: 2869,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M20.2 6.2 12 9.3 3.8 6.2"
                            }, void 0, false, {
                                fileName: "[project]/src/app/indiana-app.tsx",
                                lineNumber: 2870,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/indiana-app.tsx",
                        lineNumber: 2858,
                        columnNumber: 11
                    }, this),
                    "Select another location"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/indiana-app.tsx",
                lineNumber: 2853,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/indiana-app.tsx",
        lineNumber: 2084,
        columnNumber: 5
    }, this);
}
_s7(Home, "x5zC+b4VzyI0qT5SbTz0Tg/RdS4=");
_c11 = Home;
function IndianaMapOptionIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        "aria-hidden": true,
        viewBox: "0 0 64 64",
        className: className,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinejoin: "round",
        strokeLinecap: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "6",
                y: "10",
                width: "52",
                height: "44",
                rx: "4"
            }, void 0, false, {
                fileName: "[project]/src/app/indiana-app.tsx",
                lineNumber: 2892,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "currentColor",
                fillOpacity: "0.15",
                stroke: "currentColor",
                d: "M22 18h14l2 4v24l-3 6H24l-3-5V22z"
            }, void 0, false, {
                fileName: "[project]/src/app/indiana-app.tsx",
                lineNumber: 2893,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "44",
                cy: "24",
                r: "3.5",
                fill: "currentColor",
                stroke: "none"
            }, void 0, false, {
                fileName: "[project]/src/app/indiana-app.tsx",
                lineNumber: 2899,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M44 27.5v8M40 34h8",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/app/indiana-app.tsx",
                lineNumber: 2900,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/indiana-app.tsx",
        lineNumber: 2881,
        columnNumber: 5
    }, this);
}
_c12 = IndianaMapOptionIcon;
function CompassLocationIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        "aria-hidden": true,
        viewBox: "0 0 64 64",
        className: className,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "32",
                cy: "34",
                r: "22"
            }, void 0, false, {
                fileName: "[project]/src/app/indiana-app.tsx",
                lineNumber: 2908,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M32 12v6M32 50v6M10 34h6M48 34h6",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/app/indiana-app.tsx",
                lineNumber: 2909,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "currentColor",
                fillOpacity: "0.25",
                stroke: "currentColor",
                strokeLinejoin: "round",
                d: "m32 18 8 20-8 6-8-6z"
            }, void 0, false, {
                fileName: "[project]/src/app/indiana-app.tsx",
                lineNumber: 2910,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "32",
                y: "15",
                textAnchor: "middle",
                fill: "currentColor",
                fontSize: "11",
                fontWeight: "700",
                children: "N"
            }, void 0, false, {
                fileName: "[project]/src/app/indiana-app.tsx",
                lineNumber: 2917,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/indiana-app.tsx",
        lineNumber: 2907,
        columnNumber: 5
    }, this);
}
_c13 = CompassLocationIcon;
function NitrogenDollarIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        "aria-hidden": true,
        viewBox: "0 0 64 64",
        className: className,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "6",
                y: "6",
                width: "40",
                height: "40",
                rx: "8"
            }, void 0, false, {
                fileName: "[project]/src/app/indiana-app.tsx",
                lineNumber: 2927,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "26",
                y: "31",
                textAnchor: "middle",
                fill: "currentColor",
                fontSize: "20",
                fontWeight: "800",
                children: "N"
            }, void 0, false, {
                fileName: "[project]/src/app/indiana-app.tsx",
                lineNumber: 2928,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "48",
                cy: "46",
                r: "12",
                fill: "currentColor",
                stroke: "none",
                opacity: "0.9"
            }, void 0, false, {
                fileName: "[project]/src/app/indiana-app.tsx",
                lineNumber: 2931,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "48",
                y: "51",
                textAnchor: "middle",
                fill: "#ffffff",
                fontSize: "14",
                fontWeight: "800",
                children: "$"
            }, void 0, false, {
                fileName: "[project]/src/app/indiana-app.tsx",
                lineNumber: 2932,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/indiana-app.tsx",
        lineNumber: 2926,
        columnNumber: 5
    }, this);
}
_c14 = NitrogenDollarIcon;
function CornDollarIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        "aria-hidden": true,
        viewBox: "0 0 64 64",
        className: className,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M28 10c-6 4-10 12-10 21s4 17 10 21c6-4 10-12 10-21s-4-17-10-21Z"
            }, void 0, false, {
                fileName: "[project]/src/app/indiana-app.tsx",
                lineNumber: 2942,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M28 14v34M20 20h16M20 27h16M20 34h16M20 41h16"
            }, void 0, false, {
                fileName: "[project]/src/app/indiana-app.tsx",
                lineNumber: 2943,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18 20c-5 4-8 9-8 16s3 12 8 16M38 20c5 4 8 9 8 16s-3 12-8 16"
            }, void 0, false, {
                fileName: "[project]/src/app/indiana-app.tsx",
                lineNumber: 2944,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "50",
                cy: "46",
                r: "12",
                fill: "currentColor",
                stroke: "none",
                opacity: "0.9"
            }, void 0, false, {
                fileName: "[project]/src/app/indiana-app.tsx",
                lineNumber: 2945,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "50",
                y: "51",
                textAnchor: "middle",
                fill: "#ffffff",
                fontSize: "14",
                fontWeight: "800",
                children: "$"
            }, void 0, false, {
                fileName: "[project]/src/app/indiana-app.tsx",
                lineNumber: 2946,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/indiana-app.tsx",
        lineNumber: 2941,
        columnNumber: 5
    }, this);
}
_c15 = CornDollarIcon;
const PREVIEW_PLOT_POINTS = [
    {
        x: 100,
        y: 170
    },
    {
        x: 125,
        y: 182
    },
    {
        x: 150,
        y: 198
    },
    {
        x: 175,
        y: 212
    },
    {
        x: 200,
        y: 225
    },
    {
        x: 225,
        y: 236
    },
    {
        x: 250,
        y: 245
    },
    {
        x: 275,
        y: 252
    },
    {
        x: 300,
        y: 258
    }
];
const PREVIEW_DUAL_POINTS = PREVIEW_PLOT_POINTS.map(_c16 = (p)=>({
        x: p.x,
        yield: p.y,
        profit: 4.5 * p.y - 0.65 * p.x
    }));
_c17 = PREVIEW_DUAL_POINTS;
function interpolateDualAtX(points, x) {
    if (points.length === 0) return null;
    if (x <= points[0].x) return points[0];
    const last = points[points.length - 1];
    if (x >= last.x) return last;
    for(let i = 0; i < points.length - 1; i++){
        const a = points[i];
        const b = points[i + 1];
        if (x >= a.x && x <= b.x) {
            const t = (x - a.x) / (b.x - a.x || 1);
            return {
                x,
                yield: a.yield + t * (b.yield - a.yield),
                profit: a.profit + t * (b.profit - a.profit)
            };
        }
    }
    return null;
}
/** X-intervals where piecewise-linear profit is at least `threshold` (e.g. max profit − $1/ac). */ function profitAtLeastIntervals(points, threshold) {
    if (points.length < 2) return [];
    const raw = [];
    for(let i = 0; i < points.length - 1; i++){
        const a = points[i];
        const b = points[i + 1];
        const { x: xa, profit: pa } = a;
        const { x: xb, profit: pb } = b;
        const denom = pb - pa;
        const eps = 1e-9;
        if (pa >= threshold && pb >= threshold) {
            raw.push([
                xa,
                xb
            ]);
            continue;
        }
        if (pa < threshold && pb < threshold) continue;
        if (Math.abs(denom) < eps) continue;
        const tCross = (threshold - pa) / denom;
        const xCross = xa + tCross * (xb - xa);
        if (pa >= threshold && pb < threshold) {
            raw.push([
                Math.min(xa, xCross),
                Math.max(xa, xCross)
            ]);
        } else if (pa < threshold && pb >= threshold) {
            raw.push([
                Math.min(xb, xCross),
                Math.max(xb, xCross)
            ]);
        }
    }
    if (raw.length === 0) return [];
    raw.sort((u, v)=>u[0] - v[0]);
    const merged = [
        raw[0]
    ];
    for(let k = 1; k < raw.length; k++){
        const cur = raw[k];
        const last = merged[merged.length - 1];
        if (cur[0] <= last[1] + 1e-6) last[1] = Math.max(last[1], cur[1]);
        else merged.push(cur);
    }
    return merged;
}
function sampleDualPoints(points, count) {
    if (points.length === 0) return [];
    if (points.length === 1) return Array.from({
        length: count
    }, ()=>points[0]);
    if (count <= 1) return [
        points[0]
    ];
    return Array.from({
        length: count
    }, (_, index)=>{
        const t = index / (count - 1);
        const scaled = t * (points.length - 1);
        const i0 = Math.floor(scaled);
        const i1 = Math.min(points.length - 1, i0 + 1);
        const localT = scaled - i0;
        const p0 = points[i0];
        const p1 = points[i1];
        return {
            x: p0.x + (p1.x - p0.x) * localT,
            yield: p0.yield + (p1.yield - p0.yield) * localT,
            profit: p0.profit + (p1.profit - p0.profit) * localT
        };
    });
}
function DualAxisNitrogenChart({ points, eonrX, isMobile, hideCurve = false, comparisonScenarios = [] }) {
    _s8();
    const sampleCount = 48;
    const targetPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DualAxisNitrogenChart.useMemo[targetPoints]": ()=>sampleDualPoints(points, sampleCount)
    }["DualAxisNitrogenChart.useMemo[targetPoints]"], [
        points
    ]);
    const [animatedPoints, setAnimatedPoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(targetPoints);
    const previousPointsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(targetPoints);
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [hoverNitrogenRate, setHoverNitrogenRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DualAxisNitrogenChart.useEffect": ()=>{
            if (targetPoints.length === 0) {
                previousPointsRef.current = [];
                return;
            }
            const start = previousPointsRef.current.length === targetPoints.length ? previousPointsRef.current : sampleDualPoints(previousPointsRef.current, targetPoints.length);
            const end = targetPoints;
            const durationMs = 520;
            const animationStart = performance.now();
            let rafId = 0;
            const step = {
                "DualAxisNitrogenChart.useEffect.step": (now)=>{
                    const t = Math.min(1, (now - animationStart) / durationMs);
                    const eased = 1 - (1 - t) ** 3;
                    const frame = end.map({
                        "DualAxisNitrogenChart.useEffect.step.frame": (to, i)=>{
                            const from = start[i] ?? to;
                            return {
                                x: from.x + (to.x - from.x) * eased,
                                yield: from.yield + (to.yield - from.yield) * eased,
                                profit: from.profit + (to.profit - from.profit) * eased
                            };
                        }
                    }["DualAxisNitrogenChart.useEffect.step.frame"]);
                    setAnimatedPoints(frame);
                    if (t < 1) {
                        rafId = requestAnimationFrame(step);
                    } else {
                        previousPointsRef.current = end;
                    }
                }
            }["DualAxisNitrogenChart.useEffect.step"];
            rafId = requestAnimationFrame(step);
            return ({
                "DualAxisNitrogenChart.useEffect": ()=>cancelAnimationFrame(rafId)
            })["DualAxisNitrogenChart.useEffect"];
        }
    }["DualAxisNitrogenChart.useEffect"], [
        targetPoints
    ]);
    const width = isMobile ? 430 : 820;
    const height = isMobile ? 420 : 330;
    /** Mobile: extra margin so rotated Y titles don’t sit on top of tick numerals. */ const padLeft = isMobile ? 86 : 72;
    const padRight = isMobile ? 86 : 68;
    const padTop = isMobile ? 18 : 22;
    const padBottom = isMobile ? 62 : 56;
    const profitTickX = padLeft - (isMobile ? 10 : 8);
    if (animatedPoints.length < 2) return null;
    const allSeriesPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DualAxisNitrogenChart.useMemo[allSeriesPoints]": ()=>[
                ...animatedPoints,
                ...comparisonScenarios.flatMap({
                    "DualAxisNitrogenChart.useMemo[allSeriesPoints]": (scenario)=>scenario.points
                }["DualAxisNitrogenChart.useMemo[allSeriesPoints]"])
            ]
    }["DualAxisNitrogenChart.useMemo[allSeriesPoints]"], [
        animatedPoints,
        comparisonScenarios
    ]);
    const xMax = Math.max(...allSeriesPoints.map((p)=>p.x));
    /** Nitrogen axis always starts at 0 lb/ac so the scale isn’t cropped to the first simulation point. */ const xMin = 0;
    const profitMinRaw = Math.min(...allSeriesPoints.map((p)=>p.profit));
    const profitMaxRaw = Math.max(...allSeriesPoints.map((p)=>p.profit));
    const profitPad = Math.max((profitMaxRaw - profitMinRaw) * 0.08, 1);
    const profitMin = profitMinRaw - profitPad;
    const profitMax = profitMaxRaw + profitPad;
    const profitRange = profitMax - profitMin || 1;
    const xRange = xMax - xMin || 1;
    const plotH = height - padTop - padBottom;
    const sx = (x)=>padLeft + (x - xMin) / xRange * (width - padLeft - padRight);
    const syProfit = (v)=>height - padBottom - (v - profitMin) / profitRange * plotH;
    const pathProfit = animatedPoints.map((p, i)=>`${i === 0 ? 'M' : 'L'} ${sx(p.x).toFixed(2)} ${syProfit(p.profit).toFixed(2)}`).join(' ');
    const comparisonSeries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DualAxisNitrogenChart.useMemo[comparisonSeries]": ()=>comparisonScenarios.filter({
                "DualAxisNitrogenChart.useMemo[comparisonSeries]": (scenario)=>scenario.points.length >= 2
            }["DualAxisNitrogenChart.useMemo[comparisonSeries]"]).map({
                "DualAxisNitrogenChart.useMemo[comparisonSeries]": (scenario)=>({
                        ...scenario,
                        path: scenario.points.map({
                            "DualAxisNitrogenChart.useMemo[comparisonSeries]": (p, i)=>`${i === 0 ? 'M' : 'L'} ${sx(p.x).toFixed(2)} ${syProfit(p.profit).toFixed(2)}`
                        }["DualAxisNitrogenChart.useMemo[comparisonSeries]"]).join(' '),
                        eonrPt: scenario.eonrX !== null ? interpolateDualAtX(scenario.points, scenario.eonrX) : null
                    })
            }["DualAxisNitrogenChart.useMemo[comparisonSeries]"])
    }["DualAxisNitrogenChart.useMemo[comparisonSeries]"], [
        comparisonScenarios,
        sx,
        syProfit
    ]);
    const eonrPt = eonrX !== null ? interpolateDualAtX(points, eonrX) : null;
    const profitBandDelta = 1;
    const eonrProfitBandIntervals = !hideCurve && eonrX !== null && eonrPt !== null && points.length >= 2 ? profitAtLeastIntervals(points, eonrPt.profit - profitBandDelta) : [];
    const hoveredPoint = hoverNitrogenRate !== null ? interpolateDualAtX(points, hoverNitrogenRate) : null;
    const visibleCurveEonrValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DualAxisNitrogenChart.useMemo[visibleCurveEonrValues]": ()=>{
            const out = [];
            if (!hideCurve && eonrX !== null) {
                out.push({
                    key: 'current',
                    label: 'Current',
                    color: '#15803d',
                    eonrX
                });
            }
            for (const scenario of comparisonScenarios){
                if (scenario.eonrX === null) continue;
                out.push({
                    key: scenario.id,
                    label: scenario.label,
                    color: scenario.color,
                    eonrX: scenario.eonrX
                });
            }
            return out;
        }
    }["DualAxisNitrogenChart.useMemo[visibleCurveEonrValues]"], [
        hideCurve,
        eonrX,
        comparisonScenarios
    ]);
    const hoverTooltipHeight = 34 + visibleCurveEonrValues.length * 14;
    const handleMouseMove = (e)=>{
        const svg = svgRef.current;
        if (!svg || points.length === 0) return;
        const rect = svg.getBoundingClientRect();
        const pointerX = (e.clientX - rect.left) / rect.width * width;
        const clampedPx = Math.max(padLeft, Math.min(width - padRight, pointerX));
        const rate = xMin + (clampedPx - padLeft) / Math.max(width - padLeft - padRight, 1) * xRange;
        setHoverNitrogenRate(rate);
    };
    const labelCls = isMobile ? 'fill-slate-500 text-[10px] tabular-nums' : 'fill-slate-500 text-[11px]';
    const titleCls = isMobile ? 'fill-slate-700 text-[14px] font-semibold' : 'fill-slate-700 text-[12px] font-semibold';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-0 sm:p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ref: svgRef,
                viewBox: `0 0 ${width} ${height}`,
                className: "h-auto w-full cursor-crosshair",
                role: "img",
                "aria-label": "Economic nitrogen response: profit versus nitrogen rate",
                onMouseMove: hideCurve ? undefined : handleMouseMove,
                onMouseLeave: ()=>hideCurve ? null : setHoverNitrogenRate(null),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: padLeft,
                        y1: height - padBottom,
                        x2: width - padRight,
                        y2: height - padBottom,
                        stroke: "#94a3b8",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/src/app/indiana-app.tsx",
                        lineNumber: 3241,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: padLeft,
                        y1: padTop,
                        x2: padLeft,
                        y2: height - padBottom,
                        stroke: "#94a3b8",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/src/app/indiana-app.tsx",
                        lineNumber: 3249,
                        columnNumber: 9
                    }, this),
                    [
                        0,
                        0.25,
                        0.5,
                        0.75,
                        1
                    ].map((t)=>{
                        const profitVal = profitMin + t * profitRange;
                        const yPos = syProfit(profitVal);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: padLeft,
                                    y1: yPos,
                                    x2: width - padRight,
                                    y2: yPos,
                                    stroke: "#e2e8f0",
                                    strokeWidth: "1",
                                    strokeDasharray: "4 4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/indiana-app.tsx",
                                    lineNumber: 3262,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: profitTickX,
                                    y: yPos + 4,
                                    textAnchor: "end",
                                    className: labelCls,
                                    children: [
                                        "$",
                                        profitVal.toFixed(0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/indiana-app.tsx",
                                    lineNumber: 3271,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, `p-${t}`, true, {
                            fileName: "[project]/src/app/indiana-app.tsx",
                            lineNumber: 3261,
                            columnNumber: 13
                        }, this);
                    }),
                    [
                        0,
                        0.25,
                        0.5,
                        0.75,
                        1
                    ].map((t)=>{
                        const xValue = xMin + t * xRange;
                        const xPos = sx(xValue);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: xPos,
                                    y1: padTop,
                                    x2: xPos,
                                    y2: height - padBottom,
                                    stroke: "#f1f5f9",
                                    strokeWidth: "1"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/indiana-app.tsx",
                                    lineNumber: 3283,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: xPos,
                                    y: height - padBottom + (isMobile ? 24 : 20),
                                    textAnchor: "middle",
                                    className: labelCls,
                                    children: xValue.toFixed(0)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/indiana-app.tsx",
                                    lineNumber: 3291,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, `x-${t}`, true, {
                            fileName: "[project]/src/app/indiana-app.tsx",
                            lineNumber: 3282,
                            columnNumber: 13
                        }, this);
                    }),
                    !hideCurve && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            comparisonSeries.map((scenario)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: scenario.profitBandIntervals.map(([xL, xR], idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: sx(xL),
                                            y: padTop,
                                            width: Math.max(0, sx(xR) - sx(xL)),
                                            height: plotH,
                                            fill: scenario.color,
                                            fillOpacity: 0.1
                                        }, `scenario-band-${scenario.id}-${idx}`, false, {
                                            fileName: "[project]/src/app/indiana-app.tsx",
                                            lineNumber: 3308,
                                            columnNumber: 19
                                        }, this))
                                }, `scenario-band-${scenario.id}`, false, {
                                    fileName: "[project]/src/app/indiana-app.tsx",
                                    lineNumber: 3306,
                                    columnNumber: 15
                                }, this)),
                            eonrProfitBandIntervals.map(([xL, xR], idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: sx(xL),
                                    y: padTop,
                                    width: Math.max(0, sx(xR) - sx(xL)),
                                    height: plotH,
                                    fill: "#64748b",
                                    fillOpacity: 0.2
                                }, `eonr-profit-band-${idx}`, false, {
                                    fileName: "[project]/src/app/indiana-app.tsx",
                                    lineNumber: 3321,
                                    columnNumber: 15
                                }, this)),
                            comparisonSeries.map((scenario)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: scenario.path,
                                            fill: "none",
                                            stroke: scenario.color,
                                            strokeWidth: 2.4,
                                            strokeOpacity: 0.95,
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/indiana-app.tsx",
                                            lineNumber: 3333,
                                            columnNumber: 17
                                        }, this),
                                        scenario.eonrX !== null && scenario.eonrPt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: sx(scenario.eonrX),
                                                    x2: sx(scenario.eonrX),
                                                    y1: padTop,
                                                    y2: height - padBottom,
                                                    stroke: scenario.color,
                                                    strokeWidth: 2,
                                                    strokeDasharray: "4 3",
                                                    strokeOpacity: 0.8
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/indiana-app.tsx",
                                                    lineNumber: 3344,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: sx(scenario.eonrX),
                                                    cy: syProfit(scenario.eonrPt.profit),
                                                    r: "5.5",
                                                    fill: scenario.color,
                                                    stroke: "#ffffff",
                                                    strokeWidth: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/indiana-app.tsx",
                                                    lineNumber: 3354,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    ]
                                }, `scenario-curve-${scenario.id}`, true, {
                                    fileName: "[project]/src/app/indiana-app.tsx",
                                    lineNumber: 3332,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: pathProfit,
                                fill: "none",
                                stroke: "#16a34a",
                                strokeWidth: 3,
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/app/indiana-app.tsx",
                                lineNumber: 3366,
                                columnNumber: 13
                            }, this),
                            eonrX !== null && eonrPt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: sx(eonrX),
                                        x2: sx(eonrX),
                                        y1: padTop,
                                        y2: height - padBottom,
                                        stroke: "#15803d",
                                        strokeWidth: 2.5,
                                        strokeOpacity: 0.9
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/indiana-app.tsx",
                                        lineNumber: 3376,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: sx(eonrX),
                                        cy: syProfit(eonrPt.profit),
                                        r: "7.5",
                                        fill: "#22c55e",
                                        stroke: "#ffffff",
                                        strokeWidth: "2.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/indiana-app.tsx",
                                        lineNumber: 3385,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/indiana-app.tsx",
                                lineNumber: 3375,
                                columnNumber: 15
                            }, this),
                            hoveredPoint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: sx(hoveredPoint.x),
                                        y1: padTop,
                                        x2: sx(hoveredPoint.x),
                                        y2: height - padBottom,
                                        stroke: "#64748b",
                                        strokeWidth: "1.5",
                                        strokeDasharray: "5 5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/indiana-app.tsx",
                                        lineNumber: 3398,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: sx(hoveredPoint.x),
                                        cy: syProfit(hoveredPoint.profit),
                                        r: "5",
                                        fill: "#ffffff",
                                        stroke: "#16a34a",
                                        strokeWidth: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/indiana-app.tsx",
                                        lineNumber: 3407,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true),
                            hoveredPoint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: Math.min(width - 320, sx(hoveredPoint.x) + 10),
                                        y: Math.max(padTop + 4, syProfit(hoveredPoint.profit) - hoverTooltipHeight),
                                        width: "310",
                                        height: hoverTooltipHeight,
                                        rx: "8",
                                        fill: "rgba(15,23,42,0.92)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/indiana-app.tsx",
                                        lineNumber: 3420,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: Math.min(width - 310, sx(hoveredPoint.x) + 18),
                                        y: Math.max(padTop + 22, syProfit(hoveredPoint.profit) - hoverTooltipHeight + 18),
                                        className: isMobile ? 'fill-white text-[13px]' : 'fill-white text-[11px]',
                                        children: [
                                            "N rate: ",
                                            Math.round(hoveredPoint.x),
                                            " lb/ac"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/indiana-app.tsx",
                                        lineNumber: 3428,
                                        columnNumber: 17
                                    }, this),
                                    visibleCurveEonrValues.map((entry, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: Math.min(width - 310, sx(hoveredPoint.x) + 18),
                                            y: Math.max(padTop + 38, syProfit(hoveredPoint.profit) - hoverTooltipHeight + 34) + idx * 14,
                                            className: isMobile ? 'text-[12px]' : 'text-[10px]',
                                            fill: entry.color,
                                            children: [
                                                entry.label,
                                                ": EONR ",
                                                Math.round(entry.eonrX),
                                                " lb/ac"
                                            ]
                                        }, `hover-eonr-${entry.key}`, true, {
                                            fileName: "[project]/src/app/indiana-app.tsx",
                                            lineNumber: 3436,
                                            columnNumber: 19
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/indiana-app.tsx",
                                lineNumber: 3419,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: (padLeft + (width - padRight)) / 2,
                        y: height - 10,
                        textAnchor: "middle",
                        className: titleCls,
                        children: "Nitrogen rate (lb/ac)"
                    }, void 0, false, {
                        fileName: "[project]/src/app/indiana-app.tsx",
                        lineNumber: 3454,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: isMobile ? 11 : 22,
                        y: height / 2,
                        transform: `rotate(-90 ${isMobile ? 11 : 22} ${height / 2})`,
                        textAnchor: "middle",
                        className: isMobile ? 'fill-emerald-800 text-[9px] font-semibold tracking-tight' : 'fill-emerald-800 text-[12px] font-semibold',
                        children: "Profit ($/ac)"
                    }, void 0, false, {
                        fileName: "[project]/src/app/indiana-app.tsx",
                        lineNumber: 3462,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/indiana-app.tsx",
                lineNumber: 3232,
                columnNumber: 7
            }, this),
            !hideCurve && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-center gap-4 px-2 pb-2 text-[11px] text-slate-600 sm:text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-3 w-6 rounded-sm bg-emerald-600",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/app/indiana-app.tsx",
                                lineNumber: 3479,
                                columnNumber: 13
                            }, this),
                            "Profit (EONR highlighted)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/indiana-app.tsx",
                        lineNumber: 3478,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-3 w-6 rounded-sm border border-slate-400/70 bg-slate-400/25",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/app/indiana-app.tsx",
                                lineNumber: 3483,
                                columnNumber: 13
                            }, this),
                            "N rates within $1/ac of max profit"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/indiana-app.tsx",
                        lineNumber: 3482,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/indiana-app.tsx",
                lineNumber: 3477,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/indiana-app.tsx",
        lineNumber: 3231,
        columnNumber: 5
    }, this);
}
_s8(DualAxisNitrogenChart, "eWYLZb02cdg+CSm2bizb1df99SQ=");
_c18 = DualAxisNitrogenChart;
function PriceInput({ label, value, min, max, step, onChange, color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-xs font-black uppercase tracking-widest text-slate-500",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/app/indiana-app.tsx",
                        lineNumber: 3499,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-lg border border-slate-200 bg-slate-100 px-3 py-1 font-mono text-xl font-bold",
                        children: [
                            "$",
                            value.toFixed(2)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/indiana-app.tsx",
                        lineNumber: 3502,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/indiana-app.tsx",
                lineNumber: 3498,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "range",
                min: min,
                max: max,
                step: step,
                value: value,
                onChange: (e)=>onChange(parseFloat(e.target.value)),
                className: `h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 ${color}`
            }, void 0, false, {
                fileName: "[project]/src/app/indiana-app.tsx",
                lineNumber: 3506,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/indiana-app.tsx",
        lineNumber: 3497,
        columnNumber: 5
    }, this);
}
_c19 = PriceInput;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19;
__turbopack_context__.k.register(_c, "MapContainer");
__turbopack_context__.k.register(_c1, "GeoJSON");
__turbopack_context__.k.register(_c2, "ProviderTiles");
__turbopack_context__.k.register(_c3, "SimulationLoadingOverlay");
__turbopack_context__.k.register(_c4, "MapTapToContinue");
__turbopack_context__.k.register(_c5, "MapInvalidateSize");
__turbopack_context__.k.register(_c6, "CellsLayer");
__turbopack_context__.k.register(_c7, "CountiesLayer");
__turbopack_context__.k.register(_c8, "EonrHistogramChart");
__turbopack_context__.k.register(_c9, "EonrHistogramEmptyChart");
__turbopack_context__.k.register(_c10, "EonrTachometerGauge");
__turbopack_context__.k.register(_c11, "Home");
__turbopack_context__.k.register(_c12, "IndianaMapOptionIcon");
__turbopack_context__.k.register(_c13, "CompassLocationIcon");
__turbopack_context__.k.register(_c14, "NitrogenDollarIcon");
__turbopack_context__.k.register(_c15, "CornDollarIcon");
__turbopack_context__.k.register(_c16, "PREVIEW_DUAL_POINTS$PREVIEW_PLOT_POINTS.map");
__turbopack_context__.k.register(_c17, "PREVIEW_DUAL_POINTS");
__turbopack_context__.k.register(_c18, "DualAxisNitrogenChart");
__turbopack_context__.k.register(_c19, "PriceInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/indiana-app-loader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IndianaAppLoader",
    ()=>IndianaAppLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$indiana$2d$app$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/indiana-app.tsx [app-client] (ecmascript)");
'use client';
;
;
function IndianaAppLoader() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$indiana$2d$app$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/app/indiana-app-loader.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
_c = IndianaAppLoader;
var _c;
__turbopack_context__.k.register(_c, "IndianaAppLoader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0czp9~1._.js.map