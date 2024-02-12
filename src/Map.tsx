import React from 'react'
import GoogleMapReact from 'google-map-react'
import MenuContainer from './Menu/MenuContainer'
import { useMapContext } from './MapProvider' // Import useMapContext hook

const Map = () => {
  const mapState = useMapContext()
  const { center, zoom } = mapState

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <MenuContainer />
      <GoogleMapReact bootstrapURLKeys={{ key: '' }} defaultCenter={center} defaultZoom={zoom}>
        {/* <AnyReactComponent text="My Marker" /> */}
      </GoogleMapReact>
    </div>
  )
}

export default Map
