
import { useEffect, useRef } from 'react';
import { type Locate } from '../../shared/types/locate';
import * as maplibregl from 'maplibre-gl';
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url';
import 'maplibre-gl/dist/maplibre-gl.css';
import { paintMap } from '@/utils/map/paintMap';

const CAMERA = {
    zoom: 13.4,
    pitch: 58,
    bearing: -18,
};

export interface MapProps {
    locate?: Locate;
}

export function Map({ locate }: MapProps) {
    const mapContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mapContainer.current) return;

        maplibregl.setWorkerUrl(workerUrl);

        const map = new maplibregl.Map({
            container: mapContainer.current,
            style: 'https://tiles.openfreemap.org/styles/liberty',
            center: [-43.3496, -21.7595],
            ...CAMERA,
        });

        map.dragPan.disable();
        map.scrollZoom.disable();
        map.doubleClickZoom.disable();
        map.touchZoomRotate.disable();
        map.dragRotate.disable();
        map.keyboard.disable();
        map.boxZoom.disable();

        map.on("load", () => {
            paintMap(map);
        })

        return () => {
            map.remove();
        };
    }, []);

    return (
        <div
            ref={mapContainer}
            className="h-full w-full"
        />
    );
}
