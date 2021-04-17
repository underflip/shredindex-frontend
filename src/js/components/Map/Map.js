import {
  CCard, CCardBody, CCardHeader, CCollapse,
} from '@coreui/react';
import React, { useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
import MapboxConfig from '../config/mapbox-config';
import ResortMainInfo from '../config/resort-main-config';

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = MapboxConfig.accessToken;

const MapBoxWrap = (props) => {
  const [lng, setLng] = useState(ResortMainInfo.location.lng);
  const [lat, setLat] = useState(ResortMainInfo.location.lat);
  const [bearing] = useState(MapboxConfig.bearing);
  const [zoom, setZoom] = useState(MapboxConfig.zoom);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map', // html element id in render
      style: MapboxConfig.customMap,
      center: [lng, lat], // note: lon comes before lat
      zoom,
      bearing,
      pitch: 55,
      interactive: true,
    });

    function rotateCamera(timestamp) {
      map.rotateTo((timestamp / 100) % 360, { duration: 0 });
      requestAnimationFrame(rotateCamera);
    }

    map.on('load', async () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    map.on('load', async () => {
      map.resize();
      rotateCamera(0);
      map.addSource('mapbox-dem', {
        type: 'raster-dem',
        url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
      });
      map.setTerrain({
        source: 'mapbox-dem',
        exaggeration: [
          'interpolate', ['exponential', 0.5],
          ['zoom'], 0, 0.2, 7, 1,
        ],
      });
    });

    return () => map.remove();
  }, [props]);

  return (
    <CCard className="mb-2">
      <CCardHeader>
        <span className="h6">Map</span>
      </CCardHeader>
      <CCollapse
        show
      >
        <CCardBody>
          <div>
            <div className="map-container w-100" id="map" />
          </div>
        </CCardBody>
      </CCollapse>
    </CCard>
  );
};
export default MapBoxWrap;
