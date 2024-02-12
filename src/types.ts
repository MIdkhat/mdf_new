// types.ts
import React from 'react'

export interface MapState {
  zoom: number
  center: {
    lat: number
    lng: number
  }
  searchRadius: number
  layers: {
    councils: Layer[] | null
    spots: Layer[] | null
    newSpots: Layer[] | null
    reservoirs: Layer[] | null
    parksVic: Layer[] | null
  }
}

export interface MapProviderProps {
  initialState: MapState
  children: React.ReactNode
}

export interface Layer {
  name: string
}
