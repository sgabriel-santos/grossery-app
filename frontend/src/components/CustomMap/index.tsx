import React, { useCallback, useState } from "react";
import {
  DirectionsRenderer,
  DirectionsService,
  GoogleMap,
  useJsApiLoader,
} from "@react-google-maps/api";
import { Container } from "./styles";
import { useLocation } from "../../hooks/useLocation";

interface CustomMapInput {
  destination: string;
}

export const CustomMap: React.FC<CustomMapInput> = ({ destination }) => {
  const { coords } = useLocation();
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY ?? "",
  });
  const [directions, setDirections] = useState<any>(null);

  const renderMap = useCallback(() => {
    return (
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "50rem" }}
        center={{ lat: coords.latitude, lng: coords.longitude }}
        zoom={15}
      >
        {!!directions ? (
          <DirectionsRenderer directions={directions} />
        ) : (
          <DirectionsService
            options={{
              origin: "69044170",
              destination,
              travelMode: window.google.maps.TravelMode.DRIVING,
            }}
            callback={(result) => {
              console.log("result", result);
              setDirections(result);
            }}
          />
        )}
      </GoogleMap>
    );
  }, [coords.latitude, coords.longitude, destination, directions, origin]);

  return <Container>{isLoaded ? renderMap() : <></>}</Container>;
};
