import { MapState } from '../../types'

export const toggleCouncils = (active: boolean, mapState: MapState) => {
  console.log('councils, ', active ? 'show' : 'hide')

  // Update the councils array
  const updatedCouncils = [{ name: 'test' }]

  // Create a new MapState object with the updated councils array
  // const updatedMapState: MapState = {
  //   ...mapState,
  //   layers: {
  //     ...mapState.layers,
  //     councils: updatedCouncils,
  //   },
  // }

  // Set the new MapState object
  // setMapState(updatedMapState)
}

export const toggleParks = (active: boolean, mapState: MapState) => {
  console.log('parks, ', active ? 'show' : 'hide')
  const { parksVic } = mapState.layers
  console.log('Current parks:', parksVic)
}

export const toggleReservoirs = (active: boolean, mapState: MapState) => {
  console.log('reservoirs, ', active ? 'show' : 'hide')
  const { reservoirs } = mapState.layers
  console.log('Current reservoirs:', reservoirs)
}

export const toggleSpots = (active: boolean, mapState: MapState) => {
  console.log('spots, ', active ? 'show' : 'hide')
  const { spots } = mapState.layers
  console.log('Current spots:', spots)
}

export const findMyLocation = () => {
  console.log('Current location:')
}
