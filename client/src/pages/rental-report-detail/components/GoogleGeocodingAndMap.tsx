import React from "react";
// React Hooks
import { useEffect, useState } from "react";
// APIs
import GoogleMapReact from "google-map-react";
import Geocode from "react-geocode";
// Environment
import environment from "../../../environment";

interface Props {
  fullAddress: string;
}

function GoogleGeocodingAndMap({ fullAddress }: Props) {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

  const googleApiKey = environment.googleApiKey;
  Geocode.setApiKey(googleApiKey);
  Geocode.setLanguage("en");
  Geocode.setRegion("en");
  useEffect(() => {
    Geocode.fromAddress(fullAddress).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setCoordinates({ lat: lat, lng: lng });
      },
      (error) => {
        console.error(error);
      }
    );
  }, [fullAddress]);

  const defaultProps = {
    center: {
      lat: coordinates.lat,
      lng: coordinates.lng,
    },
    zoom: 13,
  };

  const renderMarkers = (map: any, maps: any) => {
    let marker = new maps.Marker({
      position: {
        lat: coordinates.lat,
        lng: coordinates.lng,
      },
      map,
    });
    return marker;
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "552px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleApiKey }}
        center={defaultProps.center}
        zoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      ></GoogleMapReact>
    </div>
  );
}

export default GoogleGeocodingAndMap;
