import React from 'react'
import Button from './Button'
import councilImage from '../assets/images/council.png'
import waterButtonImage from '../assets/images/water-button.png'
import spotButtonImage from '../assets/images/spot-button.png'
import geolocationImage from '../assets/images/geolocation.png'
// import parksVicImage from '../assets/images/parks.png'
import {
  findMyLocation,
  toggleCouncils,
  toggleParks,
  toggleReservoirs,
  toggleSpots,
} from './Actions/togglers'

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
  return (
    <div id="menu-container" style={menuStyle}>
      <Button
        title="Show Councils"
        id="show-councils"
        backgroundimage={councilImage}
        hidden={false}
        active={false}
        onClick={toggleCouncils}
      />
      <Button
        title="Parks Vic"
        id="parks-vic"
        backgroundimage={councilImage}
        hidden={false}
        active={false}
        onClick={toggleParks}
      />
      <Button
        title="Show Water Reservoirs"
        id="show-reservoirs"
        backgroundimage={waterButtonImage}
        hidden={false}
        active={false}
        onClick={toggleReservoirs}
      />
      <Button
        title="Show Flying Spots"
        id="show-spots"
        backgroundimage={spotButtonImage}
        hidden={false}
        active={false}
        onClick={toggleSpots}
      />
      <Button
        title="Find my Location"
        id="show-me"
        backgroundimage={geolocationImage}
        hidden={false}
        active={false}
        onClick={findMyLocation}
      />
      {/* You can pass additional props as needed */}
      {/* <Button title="Add Flying Spot" id="add-spots" className="edit" backgroundImage={spotEditButtonImage} /> */}
      {/* <Button title="How to" id="show-info" className="turned-on" backgroundImage={infoImage} /> */}
      <br />
      <br />
    </div>
  )
}

export default MenuContainer
