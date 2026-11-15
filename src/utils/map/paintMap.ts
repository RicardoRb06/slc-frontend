import type { Map as MapLibre } from 'maplibre-gl';
import { getTheme } from '../getTheme';

const waterLayers = [
    'water',
];

const waterLines = [
    'waterway_river',
    'waterway_other',
    'waterway_tunnel',
];

const vegetationLayers = [
    'park',
    'landcover_wood',
    'landcover_grass',
    'landuse_pitch',
    'landuse_track',
    'landuse_school',
    'landuse_cemetery',
    'landuse_hospital',
    'landcover_sand',
];

const minorRoads = [
    'road_minor',
    'road_link',
    'road_service_track',
    'road_secondary_tertiary',
];

const majorRoads = [
    'road_trunk_primary',
    'road_motorway',
    'bridge_trunk_primary',
    'bridge_motorway',
    'tunnel_trunk_primary',
    'tunnel_motorway',
];

const roadCasings = [
    'road_minor_casing',
    'road_link_casing',
    'road_service_track_casing',
    'road_secondary_tertiary_casing',
    'road_trunk_primary_casing',
    'road_motorway_casing',
];

const labels = [
    'label_city',
    'label_town',
    'label_village',
    'label_other',
    'water_name_line_label',
    'highway-name-major',
];

const aerowayLines = [
    'aeroway_runway',
    'aeroway_taxiway',
];

const railLayers = [
    'road_major_rail',
    'road_major_rail_hatching',
];

const secondaryRoads = [
    'bridge_secondary_tertiary',
    'bridge_street',
    'tunnel_secondary_tertiary',
];

export function paintMap(map: MapLibre) {
    const theme = getTheme();

    map.setPaintProperty('background', 'background-color', theme.background);

    for (const layer of waterLayers) {
        map.setPaintProperty(layer, 'fill-color', theme.mapWater);
    }

    for (const layer of waterLines) {
        map.setPaintProperty(layer, 'line-color', theme.mapWater);
    }

    for (const layer of vegetationLayers) {
        map.setPaintProperty(layer, 'fill-color', theme.mapVegetation);
    }

    map.setPaintProperty('building', 'fill-opacity', 0);
    map.setPaintProperty('building-3d', 'fill-extrusion-color', theme.mapBuilding);
    map.setPaintProperty('building-3d', 'fill-extrusion-opacity', 0.9);

    for (const layer of minorRoads) {
        map.setPaintProperty(layer, 'line-color', theme.secondary);
    }
    
    for (const layer of majorRoads) {
        map.setPaintProperty(layer, 'line-color', theme.primary);
    }

    for (const layer of ['road_trunk_primary', 'road_motorway']) {
        map.setPaintProperty(layer, 'line-opacity', 0.85);
    }

    for (const layer of roadCasings) {
        map.setPaintProperty(layer, 'line-color', theme.background);
    }

    for (const layer of labels) {
        map.setPaintProperty(layer, 'text-color', theme.mutedForeground);
        map.setPaintProperty(layer, 'text-halo-color', theme.background);
        map.setPaintProperty(layer, 'text-opacity', 0.55);
    }

    map.setPaintProperty('aeroway_fill', 'fill-color', theme.mapBuilding);
    
    for (const layer of aerowayLines) {
        map.setPaintProperty(layer, 'line-color', theme.secondary);
    }

    for (const layer of railLayers) {
        map.setPaintProperty(layer, 'line-color', theme.secondary);
    }

    for (const layer of secondaryRoads) {
        map.setPaintProperty(layer, 'line-color', theme.secondary);
    }

    map.setLayoutProperty('highway-shield-non-us', 'visibility', 'none');

} 