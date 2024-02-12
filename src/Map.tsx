import React from 'react'
import GoogleMapReact from 'google-map-react'
import MenuContainer from './Menu/MenuContainer'
import { useMapContext } from './MapProvider' // Import useMapContext hook

const Map = () => {
  const mapState = useMapContext()
  const { center, zoom } = mapState
  const mapOptions = {
    fullscreenControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    // zoomControl: false,
    // styles: mapStyles,
    // minZoom: 2,
    // maxZoom: 10,
  }

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <MenuContainer />
      <GoogleMapReact
        bootstrapURLKeys={{
          key: '',
          libraries: ['places', 'geometry'],
          version: 'weekly',
          region: 'AU',
        }}
        defaultCenter={center}
        defaultZoom={zoom}
        options={mapOptions}
      ></GoogleMapReact>
    </div>
  )
}

export default Map
