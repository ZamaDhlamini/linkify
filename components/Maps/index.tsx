import {useLoadScript,GoogleMap,MarkerF,CircleF,} from '@react-google-maps/api';
  import type { NextPage } from 'next';
  import { useMemo, useState } from 'react';
  import usePlacesAutocomplete, {getGeocode,getLatLng,} from 'use-places-autocomplete';
  import styles from './Maps.module.css';
  
  const Maps: NextPage = () => {
    const [lat, setLat] = useState(-25.9958835);
    const [lng, setLng] = useState(27.976703);

  
    const libraries = useMemo(() => ['places'], []);
    const mapCenter = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng]);

    const [place, setPlaces] = useState<Place[]>([
      {
        name: "Sassa Branch 1",
        address: "Old Pretoria Road &, Church St, Grand Central, Midrand, 1685",
        longitude: 28.128175801796655,
        latitude: -25.993231336658457,
      },
      {
        name: "Sassa Branch 2",
        address: "Old Pretoria Road &, Church St, Grand Central, Midrand, 1685",
        longitude: 28.128175801796655,
        latitude: -25.993231336658454,
      },
      {
        name: "Sassa Branch 3",
        address: "Old Pretoria Road &, Church St, Grand Central, Midrand, 1685",
        longitude: 28.128175801796655,
        latitude: -25.993231336658453,
      },
      {
        name: "Sassa Branch 4",
        address: "Old Pretoria Road &, Church St, Grand Central, Midrand, 1685",
        longitude: 28.128175801796655,
        latitude: -25.993231336658452,
      },
    ])
  
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
        <h1 className={styles.heading1}>Find a Sassa Branch</h1>
        <div className={styles.sidebar}>
          {/* render Places Auto Complete and pass custom handler which updates the state */}
          <PlacesAutocomplete
            onAddressSelect={(address) => {
              getGeocode({ address: address }).then((results) => {
                const { lat, lng } = getLatLng(results[0]);
  
                setLat(lat);
                setLng(lng);
              });
            }}
          />
        </div>
        <GoogleMap
          options={mapOptions}
          zoom={14}
          center={mapCenter}
          mapTypeId={google.maps.MapTypeId.ROADMAP}
          mapContainerStyle={{ width: '3000px', height: '700px' }}
          onLoad={(map) => console.log('Map Loaded')}
        >
          <MarkerF
  position={{ lat: -25.9958835, lng: 27.976703 }}
  onLoad={() => console.log('Marker Loaded')}
  onClick={() => {
    place === selectedPlace
    ? setSelectedPlace(undefined)
    : setSelectedPlace(place);
  }}
/>
  
          {/* {[1000, 2500].map((radius, idx) => {
            return (
              <CircleF
                key={idx}
                center={mapCenter}
                radius={radius}
                onLoad={() => console.log('Circle Load...')}
                options={{
                  fillColor: radius > 1000 ? 'red' : 'green',
                  strokeColor: radius > 1000 ? 'red' : 'green',
                  strokeOpacity: 0.8,
                }}
              />
            );
          })} */}
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
          placeholder="SASSA Branch"
        />
  
        {status === 'OK' && (
          <ul className={styles.suggestionWrapper}>{renderSuggestions()}</ul>
        )}
      </div>
    );
  };
  
  export default Maps;