import { useLoadScript, GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import styles from './Maps.module.css';
import { Button, Input } from 'antd';
import Link from 'next/link';

interface Place {
  name: string;
  address: string;
  longitude: number;
  latitude: number;
  operatingTimes: string;
}

const Maps: React.FC = () => {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [searchValue, setSearchValue] = useState('');
  const [map, setMap] = useState<any>(null);

  const places: Place[] = [
    {
      name: "Sassa Branch Broadacres",
      address: "Old Pretoria Road &, Church St, Grand Central, Midrand, 1685",
      longitude: 27.9904,
      latitude: -25.9982,
      operatingTimes: "Mon - Sun: 9:00 AM - 5:00 PM",
    },
    {
      name: "Sassa Branch Chartwell",
      address: "Chartwell Castle, 1 Hood Rd (Cnr. Watercombe) Chartwell West",
      longitude: 27.9715,
      latitude: -25.9870,
      operatingTimes: "Mon - Sun: 9:00 AM - 5:00 PM",
    },
    {
      name: "Sassa Branch Cosmo",
      address: " Dawn Rd, Cosmo City, Roodepoort, 2188",
      longitude: 27.9404,
      latitude: -26.0151,
      operatingTimes: "Mon - Sun: 9:00 AM - 5:00 PM",
    },
    // Add other places...
  ];

  const mapOptions = {
    disableDefaultUI: true,
    clickableIcons: true,
    scrollwheel: false,
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: ['places'],
  });

  useEffect(() => {
    if (loadError) {
      console.error('Error loading Google Maps API:', loadError);
    }
  }, [loadError]);

  const handleMapLoad = (mapInstance: any) => {
    setMap(mapInstance);
  };

  const handleSearch = async () => {
    try {
      const geocoder = new window.google.maps.Geocoder();
      const result = await new Promise<any>((resolve, reject) => {
        geocoder.geocode({ address: searchValue }, (results, status) => {
          if (status === window.google.maps.GeocoderStatus.OK && results && results.length > 0) {
            resolve(results[0]);
          } else {
            reject(status);
          }
        });
      });
  
      if (result.geometry && result.geometry.location) {
        const { lat, lng } = result.geometry.location;
        if (map) {
          map.panTo({ lat: lat(), lng: lng() });
        }
      }
    } catch (error) {
      console.error('Error searching location:', error);
    }
  };

  if (loadError) {
    return <p>Error loading Google Maps API</p>;
  }

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1 className={styles.heading1}>Find a Sassa Branch</h1>
      <div className={styles.searchContainer}>
        <Input
          className={styles.searchInput}
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search"
        />
        <Button className={styles.searchButton} onClick={handleSearch}>
          Search
        </Button>
      </div>
      <div className={styles.homeWrapper}>
        <GoogleMap
          options={mapOptions}
          zoom={14}
          center={{ lat: -25.9958835, lng: 27.976703 }}
          mapContainerStyle={{ width: '100%', height: '600px' }}
          onLoad={handleMapLoad}
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
                <Link href='/Booking'>
                <Button className={styles.mapButton}>Book</Button>
                </Link>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
    </>
  );
};

export default Maps;
