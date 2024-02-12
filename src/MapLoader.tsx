import React, { useEffect, useState } from 'react'
import Map from './Map'

export const MapLoader: React.FC = () => {
  const apiKey = import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY
  const [apiLoaded, setApiLoaded] = useState(false)

  useEffect(() => {
    if (!apiKey) {
      console.error('Google Maps API key is not provided.')
      return
    }

    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&loading=async&v=weekly`
    script.async = true
    script.defer = true
    script.onload = () => {
      console.log('Google Maps API loaded successfully')
      setApiLoaded(true) // Set flag when API is loaded
    }
    script.onerror = () => {
      console.error('Error loading Google Maps API')
    }

    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [apiKey])

  return apiLoaded ? <Map /> : <p>loading</p> // Render Map component only if API is loaded
}
