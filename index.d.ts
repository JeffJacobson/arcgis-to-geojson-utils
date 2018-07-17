// Type definitions for arcgis-to-geojson-utils
// Project: https://github.com/Esri/arcgis-to-geojson-utils
// Definitions by: Jeff Jacobson <https://github.com/JeffJacobson>
// TypeScript Version: 2.9.2

import {
  IExtent,
  IFeature,
  IFeatureSet,
  IGeometry,
  IMultipoint,
  IPoint,
  IPolygon,
  IPolyline
} from '@esri/arcgis-rest-common-types';

import {
  Feature,
  FeatureCollection,
  Geometry,
  GeometryCollection,
  LineString,
  MultiLineString,
  MultiPoint,
  MultiPolygon,
  Point,
  Polygon
} from 'geojson';

/**
 * Converts an ArcGIS REST API object to its GeoJSON equivalent.
 * @param  arcgis - ArcGIS object
 */
export function arcgisToGeoJSON (arcgis: IPoint): GeoJSON.Point;
/**
 * Converts an ArcGIS REST API object to its GeoJSON equivalent.
 * @param  arcgis - ArcGIS object
 */
export function arcgisToGeoJSON (arcgis: IMultipoint): GeoJSON.MultiPoint;
/**
 * Converts an ArcGIS REST API object to its GeoJSON equivalent.
 * @param  arcgis - ArcGIS object
 */
export function arcgisToGeoJSON (arcgis: IPolyline): GeoJSON.LineString | GeoJSON.MultiLineString;
/**
 * Converts an ArcGIS REST API object to its GeoJSON equivalent.
 * @param arcgis - ArcGIS object
 */
export function arcgisToGeoJSON (arcgis: IExtent | IPolygon): GeoJSON.Polygon;
/**
 * Converts an ArcGIS REST API object to its GeoJSON equivalent.
 * @param arcgis ArcGIS object
 * @param idAttribute - The name of the feature attribute that will become the id property
 * of the output GeoJSON feature.
 */
export function arcgisToGeoJSON (arcgis: IFeature, idAttribute?: string): GeoJSON.Feature;
/**
 * Converts an ArcGIS REST API object to its GeoJSON equivalent.
 * @param arcgis ArcGIS object
 * @param idAttribute - The name of the feature attribute that will become the id property
 * of the features in the output GeoJSON feature collection.
 */
export function arcgisToGeoJSON (arcgis: IFeatureSet, idAttribute?: string): GeoJSON.FeatureCollection;

/**
 * Converts a GeoJSON object to its ArcGIS equivalent.
 * @param geojson - Input GeoJSON object.
 */
export function geojsonToArcGIS (geojson: Point): IPoint;
/**
 * Converts a GeoJSON object to its ArcGIS equivalent.
 * @param geojson - Input GeoJSON object.
 */
export function geojsonToArcGIS (geojson: MultiPoint): IMultipoint;
/**
 * Converts a GeoJSON object to its ArcGIS equivalent.
 * @param geojson - Input GeoJSON object.
 */
export function geojsonToArcGIS (geojson: LineString | MultiLineString): IPolyline;
/**
 * Converts a GeoJSON object to its ArcGIS equivalent.
 * @param geojson - Input GeoJSON object.
 */
export function geojsonToArcGIS (geojson: Polygon | MultiPolygon): IPolygon;
/**
 * Converts a GeoJSON object to its ArcGIS equivalent.
 * @param geojson - Input GeoJSON object.
 * @param idAttribute - The name of the attribute that will be added to the output feature
 * in place of the GeoJSON id property.
 */
export function geojsonToArcGIS (geojson: Feature, idAttribute?: string): IFeature;
/**
 * Converts a GeoJSON object to its ArcGIS equivalent.
 * @param geojson - Input GeoJSON object.
 * @param idAttribute - The name of the attribute that will be added to the output feature
 * in place of the GeoJSON id property.
 */
export function geojsonToArcGIS (geojson: FeatureCollection, idAttribute?: string): IFeature[];
