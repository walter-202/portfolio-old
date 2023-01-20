import React from 'react'
import { MapContainer, TileLayer} from 'react-leaflet'

const Map = () => {
  return (
    <MapContainer center={[-16.495513, -68.131886]} zoom={10} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <div className="map-content">
        <h3 className="switch__color">Walter Aguilar</h3>
        <span>Nuestra Señora de La Paz</span>
        <br />
        <span>Ubicación : La Paz, Bolivia</span>
        <br />
        <span>Email: wfernando.aguilarm@gmail.com</span>
      </div>
    </MapContainer>
  )
}

export default Map
