import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  ZoomControl,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import { useEffect, useRef } from "react";

export default function Map({ lat, lon, onMarkerClick, isLoading }) {
  const datingIcon = new L.Icon({
    className: "",
    iconAnchor: [12, 25],
    labelAnchor: [-6, 0],
    popupAnchor: [0, -15],
    iconSize: [35, 35],
    iconUrl: "https://cdn-icons-png.flaticon.com/512/7852/7852220.png",
  });
  const mapRef = useRef(null);

  useEffect(() => {
    if (!lat || !lon) return;
    if (mapRef.current.getZoom() === 18) {
      mapRef.current.panTo([lat, lon], 18, {
        animate: true,
        duration: 1,
      });
      return;
    }

    mapRef.current.flyTo([lat, lon], 18, {
      animate: true,
      duration: 1,
    });
  }, [lat, lon]);

  return (
    <MapContainer
      center={[-6.175392, 106.827194]}
      zoom={10}
      zoomControl={false}
      scrollWheelZoom={true}
      style={{ height: "100vh" }}
      ref={mapRef}
    >
      <TileLayer
        attribution=""
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      />
      {(lat || lon) && !isLoading && (
        <Marker
          position={[lat, lon]}
          icon={datingIcon}
          eventHandlers={{
            click: () => onMarkerClick(),
          }}
        ></Marker>
      )}
      {/* <OnMarkerAddToMap lat={lat} lon={lon} /> */}
      <ZoomControl position="topright" />
    </MapContainer>
  );
}
