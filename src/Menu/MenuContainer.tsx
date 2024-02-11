import React from 'react'
import Button from './Button'
import councilImage from '../assets/images/council.png'
import waterButtonImage from '../assets/images/water-button.png'
import spotButtonImage from '../assets/images/spot-button.png'
import geolocationImage from '../assets/images/geolocation.png'

const menuStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  right: 0,
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
        turnedOn={false}
      />
      <Button
        title="Show Water Reservoirs"
        id="show-reservoirs"
        backgroundimage={waterButtonImage}
        hidden={false}
        turnedOn={false}
      />
      <Button
        title="Show Flying Spots"
        id="show-spots"
        backgroundimage={spotButtonImage}
        hidden={false}
        turnedOn={false}
      />
      <Button
        title="Find my Location"
        id="show-me"
        backgroundimage={geolocationImage}
        hidden={false}
        turnedOn={false}
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
