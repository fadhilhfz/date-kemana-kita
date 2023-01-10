import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
  useMap,
} from "react-leaflet";
// import "../css/App.css"
// import { useEffect } from "react";
import L from "leaflet";

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

function App() {
  const dating = new L.Icon({
    className: "",
    iconAnchor: [12, 25],
    labelAnchor: [-6, 0],
    popupAnchor: [0, -15],
    iconSize: [35, 35],
    iconUrl: "https://cdn-icons-png.flaticon.com/512/7852/7852220.png",
  });

  return (
    <MapContainer
      center={[-6.175392, 106.827194]}
      zoom={10}
      scrollWheelZoom={true}
      style={{ height: "100vh" }}
    >
      <TileLayer
        attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      />
      <Marker
        position={[-6.175392, 106.827194]}
        icon={dating}
        eventHandlers={{
          click: () => console.log("fired"),
        }}
      >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <OnMapClick />
    </MapContainer>
  );
}

export default App;
