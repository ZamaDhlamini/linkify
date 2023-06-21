import {
    useLoadScript,
    GoogleMap,
    MarkerF,
    CircleF,
  } from '@react-google-maps/api';
  import type { NextPage } from 'next';
  import { useMemo, useState } from 'react';
  import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from 'use-places-autocomplete';
  import styles from './BookingMaps.module.css';
  
  const BookingMaps: NextPage = () => {
    const [lat, setLat] = useState(27.672932021393862);
    const [lng, setLng] = useState(85.31184012689732);
  
    const libraries = useMemo(() => ['places'], []);
    const mapCenter = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng]);
  
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
          <MarkerF
            position={mapCenter}
            onLoad={() => console.log('Marker Loaded')}
          />
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