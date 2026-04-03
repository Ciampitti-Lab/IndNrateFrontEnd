'use client';

import IndianaApp from './indiana-app';

/**
 * Loads the app in the same client bundle as this module (no `next/dynamic` async chunk).
 * A separate lazy chunk often failed to load on phones hitting the dev server via LAN IP,
 * which left the UI stuck on “Loading app…”.
 */
export function IndianaAppLoader() {
  return <IndianaApp />;
}
