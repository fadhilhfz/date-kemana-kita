import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvent,
  ZoomControl,
  Popup,
} from "react-leaflet";
import L from "leaflet";

export default function Map({ setIsModalOpened }) {
  const datingIcon = new L.Icon({
    className: "",
    iconAnchor: [12, 25],
    labelAnchor: [-6, 0],
    popupAnchor: [0, -15],
    iconSize: [35, 35],
    iconUrl: "https://cdn-icons-png.flaticon.com/512/7852/7852220.png",
  });

  function OnMapClick() {
    const map = useMapEvent("click", () => {
      if (map.getZoom() === 18) return;

      map.flyTo([-6.175392, 106.827194], 18, {
        animate: true,
        duration: 2.5,
      });
      // console.log("fired");
    });
    return null;
  }

  return (
    <MapContainer
      center={[-6.175392, 106.827194]}
      zoom={10}
      zoomControl={false}
      scrollWheelZoom={true}
      style={{ height: "100vh" }}
    >
      <TileLayer
        attribution=""
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      />
      <Marker
        position={[-6.175392, 106.827194]}
        icon={datingIcon}
        eventHandlers={{
          click: () => setIsModalOpened((st) => !st),
        }}
      ></Marker>
      <ZoomControl position="topright" />
      <OnMapClick />
    </MapContainer>
  );
}
