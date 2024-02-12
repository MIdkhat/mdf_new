import React, { useEffect, useState } from 'react'
// import GoogleMapReact from 'google-map-react'
import MenuContainer from './Menu/MenuContainer'
import { useMapContext } from './ContextProvider' // Import useMapContext hook
import { Map, MapControl, ControlPosition } from '@vis.gl/react-google-maps'
import { MapState } from './types'

const MapContainer = () => {
  const [mapState, setMapState] = useState<MapState>(useMapContext())
  const { center, zoom } = mapState

  const [controlPosition, setControlControlPosition] = useState<ControlPosition>(
    ControlPosition.LEFT_BOTTOM,
  )

  useEffect(() => {
    console.log('Current state:', mapState)
  }, [mapState])

  const setZoom = (zoom: number) => {
    const updatedMapState: MapState = {
      ...mapState,
      zoom: zoom,
    }
    setMapState(updatedMapState)
  }
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
      <Map
        // bootstrapURLKeys={{
        //   key: '',
        //   libraries: ['places', 'geometry'],
        //   version: 'weekly',
        //   region: 'AU',
        // }}
        defaultCenter={center}
        defaultZoom={zoom}
        disableDefaultUI={true}
        gestureHandling={'greedy'}
        // mapId={'49ae42fed52588c3'}
        zoom={zoom}
        onZoomChanged={(ev) => setZoom(ev.detail.zoom)}

        // options={mapOptions}
      >
        <MapControl position={ControlPosition.BOTTOM_RIGHT}>
          {' '}
          <div
            style={{
              background: 'white',
              padding: '1em',
            }}
          >
            Zoom: {zoom.toFixed(2)}
          </div>
        </MapControl>
        {/* <CustomZoomControl
          controlPosition={controlPosition}
          zoom={zoom}
          onZoomChange={zoom => setZoom(zoom)}
        /> */}
        <MapControl position={controlPosition}>
          <div
            style={{
              margin: '10px',
              padding: '1em',
              background: 'rgba(255,255,255,0.4)',
              display: 'flex',
              flexFlow: 'column nowrap',
            }}
          >
            <label htmlFor={'zoom'}>This is a custom zoom control!</label>
            <input
              id={'zoom'}
              type={'range'}
              min={1}
              max={18}
              step={'any'}
              value={zoom}
              onChange={(ev) => setZoom(ev.target.valueAsNumber)}
            />
          </div>
        </MapControl>
      </Map>
    </div>
  )
}

export default MapContainer
