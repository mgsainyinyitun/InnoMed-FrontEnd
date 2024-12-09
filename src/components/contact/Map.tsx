import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

export function Map() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
        version: 'weekly',
      });

      const { Map } = await loader.importLibrary('maps');
      
      // Example coordinates (replace with your actual location)
      const position = { lat: 40.7128, lng: -74.0060 };
      
      const mapOptions = {
        center: position,
        zoom: 15,
        styles: [
          {
            featureType: 'all',
            elementType: 'geometry',
            stylers: [{ color: '#242f3e' }]
          },
          {
            featureType: 'all',
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#242f3e' }]
          },
          {
            featureType: 'all',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#746855' }]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#17263c' }]
          }
        ]
      };

      if (mapRef.current) {
        const map = new Map(mapRef.current, mapOptions);
        
        // Add marker
        new google.maps.Marker({
          position,
          map,
          title: 'InnoMed Headquarters'
        });
      }
    };

    initMap();
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <div 
        ref={mapRef} 
        className="w-full h-[400px] rounded-lg"
        style={{ filter: 'grayscale(0.6)' }}
      />
    </div>
  );
}