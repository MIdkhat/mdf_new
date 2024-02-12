import React from 'react'
// import { css } from '@emotion/react'
import { MapLoader } from './MapLoader'
import { MapProvider } from './MapProvider'
import initialMapState from './initialMapState'

const App: React.FC = () => {
  return (
    <MapProvider initialState={initialMapState}>
      <div>
        <MapLoader />
      </div>
    </MapProvider>
  )
}

export default App
