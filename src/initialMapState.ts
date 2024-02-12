import { MapState } from './types'

const initialMapState: MapState = {
  zoom: 11,
  center: {
    lat: -37.81,
    lng: 144.96,
  },
  searchRadius: 5,
  layers: {
    councils: null,
    spots: null,
    newSpots: null,
    reservoirs: null,
    parksVic: null,
  },
}

export default initialMapState
