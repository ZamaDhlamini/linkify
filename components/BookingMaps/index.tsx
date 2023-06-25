import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import type { NextPage } from 'next';
import { useMemo, useState, useEffect } from 'react';
import usePlacesAutocomplete from 'use-places-autocomplete';
import { getGeocode, getLatLng } from 'use-places-autocomplete';
import styles from './BookingMaps.module.css';

const BookingMaps: NextPage = () => {
  const [lat, setLat] = useState<number | null>(null);
  const [lng, setLng] = useState<number | null>(null);

  const libraries = useMemo(() => ['places'], []);
  const mapCenter = useMemo(() => ({ lat: lat || 0, lng: lng || 0 }), [lat, lng]);

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as any,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        (error) => {
          console.error('Error getting current position:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }
  
  return (
    <div className={styles.homeWrapper}>
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: '3000px', height: '400px' }}
        onLoad={(map) => console.log('Map Loaded')}
      >
        {lat !== null && lng !== null && (
          <Marker
            position={{ lat, lng }}
            onLoad={() => console.log('Marker Loaded')}
          />
        )}
      </GoogleMap>
    </div>
  );
  };
  
  const PlacesAutocomplete = ({
    onAddressSelect,
  }: {
    onAddressSelect?: (address: string) => void;
  }) => {
    const {
      ready,
      value,
      suggestions: { status, data },
      setValue,
      clearSuggestions,
    } = usePlacesAutocomplete({
      requestOptions: { componentRestrictions: { country: 'us' } },
      debounce: 300,
      cache: 86400,
    });
  
    const renderSuggestions = () => {
      return data.map((suggestion) => {
        const {
          place_id,
          structured_formatting: { main_text, secondary_text },
          description,
        } = suggestion;
  
        return (
          <li
            key={place_id}
            onClick={() => {
              setValue(description, false);
              clearSuggestions();
              onAddressSelect && onAddressSelect(description);
            }}
          >
            <strong>{main_text}</strong> <small>{secondary_text}</small>
          </li>
        );
      });
    };
  
    return (
      <div className={styles.autocompleteWrapper}>
        <input
          value={value}
          className={styles.autocompleteInput}
          disabled={!ready}
          onChange={(e) => setValue(e.target.value)}
          placeholder="123 Stariway To Heaven"
        />
  
        {status === 'OK' && (
          <ul className={styles.suggestionWrapper}>{renderSuggestions()}</ul>
        )}
      </div>
    );
  };
  
  export default BookingMaps;