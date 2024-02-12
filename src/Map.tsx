import React from 'react'
import GoogleMapReact from 'google-map-react'
// import { GoogleMap } from '@react-google-maps/api'
import MenuContainer from './Menu/MenuContainer'

const center = {
  lat: -37.81,
  lng: 144.96,
}
// const AnyReactComponent = ({ text }) => <div>{text}</div>

export const Map = () => {
  const defaultProps = {
    center: center,
    zoom: 11,
  }

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <MenuContainer />
      {/* <GoogleMap
        id="map"
        mapContainerStyle={{
          margin: 'auto',
          width: '100%',
          height: '100%',
        }}
        zoom={15}
        center={center}
      ></GoogleMap> */}
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* <AnyReactComponent text="My Marker" /> */}
      </GoogleMapReact>
    </div>
  )
}

// {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         width: '100%',
//         backgroundColor: 'gray',
//       }}
//     >
//   <GoogleMap
//     id="map"
//     mapContainerStyle={{
//       margin: 'auto',
//       width: '100%',
//       height: '100%',
//     }}
//     zoom={15}
//     center={center}
//   ></GoogleMap>
//     </div>
//   )
// }

// {
//   /* <AnyReactComponent lat={-42.735258} lng={147.438} text="My Marker" /> */
// }
