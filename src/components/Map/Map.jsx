import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIcon = new L.Icon({
  iconUrl: "/assets/map/marker.png",
  iconSize: [32, 32],
});
function Map(props) {
  return (
    <div>
      <MapContainer
        center={[41.2995, 69.2401]}
        zoom={13}
        scrollWheelZoom={false}
        className="h-[600px] rounded-lg leaflet-container"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[41.2995, 69.2401]} icon={customIcon}>
          <Popup>г.Ташкент, Юнусабадский район ул Амира Темура, дом 9</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
