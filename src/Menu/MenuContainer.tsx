import React, { useEffect, useState } from 'react'
import ToggleButton from './ToggleButton'
import councilImage from '../assets/images/council.png'
import waterButtonImage from '../assets/images/water-button.png'
import spotButtonImage from '../assets/images/spot-button.png'
// import geolocationImage from '../assets/images/geolocation.png'
// import parksVicImage from '../assets/images/parks.png'
// import {
//   findMyLocation,
//   toggleCouncils,
//   toggleParks,
//   toggleReservoirs,
//   toggleSpots,
// } from './Actions/togglers'
import { useMapContext } from '../ContextProvider'
import { MapState } from '../types'

const menuStyle: React.CSSProperties = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  zIndex: 100,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
}

const MenuContainer: React.FC = () => {
  const [mapState, setMapState] = useState<MapState>(useMapContext())

  useEffect(() => {
    console.log('Current state:', mapState)
  }, [mapState])

  const toggleCouncils = (active: boolean) => {
    console.log('councils, ', active ? 'show' : 'hide')
    const updatedCouncils = [{ name: 'test' }]

    const updatedMapState: MapState = {
      ...mapState,
      layers: {
        ...mapState.layers,
        councils: updatedCouncils,
      },
    }
    setMapState(updatedMapState)

    console.log('Current state:', mapState.layers.councils)
  }

  const toggleParks = (active: boolean) => {
    console.log('parks, ', active ? 'show' : 'hide')
    console.log('Current state:', mapState.layers.councils)
  }

  const toggleReservoirs = (active: boolean) => {
    console.log('reservoirs, ', active ? 'show' : 'hide')
    const { reservoirs } = mapState.layers
    console.log('Current reservoirs:', reservoirs)
  }

  const toggleSpots = (active: boolean) => {
    console.log('spots, ', active ? 'show' : 'hide')
    const { spots } = mapState.layers
    console.log('Current spots:', spots)
  }

  //   const findMyLocation = () => {
  //     console.log('Current location:')
  //   }

  return (
    <div id="menu-container" style={menuStyle}>
      <ToggleButton
        title="Show Councils"
        id="show-councils"
        backgroundimage={councilImage}
        hidden={false}
        active={false}
        onClick={toggleCouncils}
      />
      <ToggleButton
        title="Parks Vic"
        id="show-parks-vic"
        backgroundimage={councilImage}
        hidden={false}
        active={false}
        onClick={toggleParks}
      />
      <ToggleButton
        title="Show Water Reservoirs"
        id="show-reservoirs"
        backgroundimage={waterButtonImage}
        hidden={false}
        active={false}
        onClick={toggleReservoirs}
      />
      <ToggleButton
        title="Show Flying Spots"
        id="show-spots"
        backgroundimage={spotButtonImage}
        hidden={false}
        active={false}
        onClick={toggleSpots}
      />
      {/* <ActionButton
        title="Find my Location"
        id="show-me"
        backgroundimage={geolocationImage}
        hidden={false}
        active={false}
        actionType="action"
        onClick={findMyLocation}
      /> */}
      {/* You can pass additional props as needed */}
      {/* <Button title="Add Flying Spot" id="add-spots" className="edit" backgroundImage={spotEditButtonImage} /> */}
      {/* <Button title="How to" id="show-info" className="turned-on" backgroundImage={infoImage} /> */}
      <br />
      <br />
    </div>
  )
}

export default MenuContainer
