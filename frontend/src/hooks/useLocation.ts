import { useCallback, useEffect, useState } from "react";

export interface Coords {
  latitude: number;
  longitude: number;
}

interface UseLocationReturn {
  coords: Coords;
}

export const useLocation = (): UseLocationReturn => {
  const [coords, setCoords] = useState<Coords>({ latitude: 0, longitude: 0 });

  const getGeolocationCoords = (): Promise<Coords> => {
    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          resolve({ latitude, longitude });
        }
      );
    });
  };

  const getCurrentLocation = useCallback(async () => {
    const { latitude, longitude } = await getGeolocationCoords();
    setCoords({ latitude, longitude });
  }, []);

  useEffect(() => {
    if ("geolocation" in navigator) {
      getCurrentLocation();
    }
  }, [getCurrentLocation]);

  return { coords };
};
