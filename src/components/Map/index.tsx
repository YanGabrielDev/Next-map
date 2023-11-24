'use client'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet'

const customIcon = new L.Icon({
  iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Map_marker.svg',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
})

interface Place {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

interface MapProps {
  places?: Array<Place>
}
const Map = ({ places }: MapProps) => (
  <MapContainer
    center={[0, 0]}
    zoom={3}
    style={{
      height: '100vh',
      width: '100vw'
    }}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {places?.map(({ id, location, name }) => {
      const { latitude, longitude } = location
      return (
        <Marker
          key={`place-${id}`}
          position={[latitude, longitude]}
          icon={customIcon}
          title={name}
        />
      )
    })}
  </MapContainer>
)

export default Map
