// MapProvider.tsx
import React, { createContext, useContext } from 'react'
import { MapState } from './types'

interface MapProviderProps {
  initialState: MapState
  children: React.ReactNode
}

const MapContext = createContext<MapState | undefined>(undefined)

export const MapProvider: React.FC<MapProviderProps> = ({ initialState, children }) => {
  return <MapContext.Provider value={initialState}>{children}</MapContext.Provider>
}

export const useMapContext = () => {
  const context = useContext(MapContext)
  if (!context) {
    throw new Error('useMapContext must be used within a MapProvider')
  }
  return context
}
