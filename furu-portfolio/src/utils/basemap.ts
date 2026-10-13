/**
 * Basemap (tile layer) configuration for every map in the
 * site. Change `activeBasemap` to switch the style of all
 * maps at once.
 *
 * The CARTO presets use the basemaps raster API, which
 * requires an API key:
 * https://basemaps.cartocdn.com/rastertiles/{style}/{z}/{x}/{y}.png?key=...
 *
 * This kind of key is designed for public client-side use;
 * it can (and should) be restricted by domain in the CARTO
 * workspace settings.
 */

export interface BasemapStyle {
  url: string;
  attribution: string;
  /**
   * Optional second layer drawn on top of the base
   * (e.g. a reference layer with place labels).
   */
  overlayUrl?: string;
}

const CARTO_API_KEY = "cb1_472b_1_07b0ad5df523954aaa77d469";

const CARTO_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution/">CARTO</a>';

function carto(style: string): BasemapStyle {
  return {
    url: `https://basemaps.cartocdn.com/rastertiles/${style}/{z}/{x}/{y}{r}.png?key=${CARTO_API_KEY}`,
    attribution: CARTO_ATTRIBUTION,
  };
}

export const basemapStyles = {
  /** CARTO Dark Matter — dark, matches the site theme. */
  dark: carto("dark_all"),

  /** CARTO Positron — light gray, very understated. */
  light: carto("light_all"),

  /** CARTO Voyager — soft, muted colors. */
  pastel: carto("voyager"),

  /** Standard OpenStreetMap (colorful, no key needed). */
  osm: {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
} as const;

export type BasemapName = keyof typeof basemapStyles;

/** The basemap currently used by all maps. */
export const activeBasemap: BasemapName = "dark";

export function getBasemap(): BasemapStyle {
  return basemapStyles[activeBasemap];
}
