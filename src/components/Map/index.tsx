'use client'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

const customIcon = new L.Icon({
  iconUrl: "https://upload.wikimedia.org/wikipedia/commons/8/88/Map_marker.svg",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const Map = () => (
    <MapContainer center={[0,0]} zoom={3} style={{
      height: '100vh',
      width: '100vw'
  }}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[0,0]} icon={customIcon}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  )


export default Map;
