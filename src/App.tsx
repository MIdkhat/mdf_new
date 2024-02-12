import React from 'react'
import { ContextProvider } from './ContextProvider'
import initialMapState from './initialMapState'
import { APIProvider } from '@vis.gl/react-google-maps'
import MapContainer from './MapContainer'

const App: React.FC = () => {
  const apiKey = import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY
  return (
    <ContextProvider initialState={initialMapState}>
      <APIProvider apiKey={apiKey}>
        <MapContainer />
      </APIProvider>
    </ContextProvider>
  )
}

export default App
