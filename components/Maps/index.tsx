import { useLoadScript, GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import styles from './Maps.module.css';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';

interface Place {
  name: string;
  address: string;
  longitude: number;
  latitude: number;
  operatingTimes: string;
}

const Maps: React.FC = () => {
  const [lat, setLat] = useState(-25.9958835);
  const [lng, setLng] = useState(27.976703);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  useEffect(() => {
    if (selectedPlace) {
      setLat(selectedPlace.latitude);
      setLng(selectedPlace.longitude);
    }
  }, [selectedPlace]);

  const places: Place[] = [
    {
      name: "Sassa Branch 1",
      address: "Old Pretoria Road &, Church St, Grand Central, Midrand, 1685",
      longitude: 28.128175801796655,
      latitude: -25.993231336658457,
      operatingTimes: "9:00 AM - 5:00 PM",
    },
    // Add other places...
  ];

  const mapOptions = {
    disableDefaultUI: true,
    clickableIcons: true,
    scrollwheel: false,
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: ['places'],
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
        center={{ lat, lng }}
        mapContainerStyle={{ width: '100%', height: '600px' }}
      >
        {places.map((place) => (
          <Marker
            key={place.name}
            position={{ lat: place.latitude, lng: place.longitude }}
            onClick={() => setSelectedPlace(place)}
          />
        ))}

        {selectedPlace && (
          <InfoWindow
            position={{ lat: selectedPlace.latitude, lng: selectedPlace.longitude }}
            onCloseClick={() => setSelectedPlace(null)}
          >
            <div>
              <h2>{selectedPlace.name}</h2>
              <p>Address: {selectedPlace.address}</p>
              <p>Operating Times: {selectedPlace.operatingTimes}</p>
              {/* Add other information or buttons as needed */}
            </div>
          </InfoWindow>
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
        placeholder="SASSA Branch"
      />

      {status === 'OK' && (
        <ul className={styles.suggestionWrapper}>{renderSuggestions()}</ul>
      )}
    </div>
  );
};

export default Maps;
