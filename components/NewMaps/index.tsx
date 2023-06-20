import { useEffect } from 'react';

const MapPage = (): JSX.Element => {
  useEffect(() => {
    // Initialize the map
    function initMap(): void {
      const johannesburg = { lat: -26.2041, lng: 28.0473 };
      const map = new google.maps.Map(document.getElementById('map'), {
        center: johannesburg,
        zoom: 12
      });
    }

    // Perform a search on the map
    function searchMap(): void {
      const searchInput = (document.getElementById('search-input') as HTMLInputElement).value;

      // Create a Geocoder instance to convert the search input to coordinates
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: searchInput }, function(results, status) {
        if (status === 'OK') {
          const location = results[0].geometry.location;

          // Update the map with the searched location
          const map = new google.maps.Map(document.getElementById('map'), {
            center: location,
            zoom: 12
          });

          // Add a marker to the searched location
          new google.maps.Marker({
            position: location,
            map: map,
            title: searchInput
          });
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    }

    // Load the Google Maps API with the API key
    function loadGoogleMaps(): void {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }

    loadGoogleMaps();
  }, []);

  return (
    <>
      <h1>Google Maps Search</h1>
      <div>
        <input type="text" id="search-input" placeholder="Enter a location" />
        <button onClick={searchMap}>Search</button>
      </div>
      <div id="map" style={{ height: '400px', width: '100%' }}></div>
    </>
  );
};

export default MapPage;
