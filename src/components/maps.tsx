import React, { useEffect } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import Loading from './loading';

const mapContainerStyle = {
  width: '100%',
  height: '100%' 
};

const center = {
  lat: -22.487864582540347,
  lng: -44.07027011181234
};

const googleMapsApiKey = 'AIzaSyAqCM1TE1BdKxIeryhnZZP2JMWd2X6wiRM';

export default function Maps() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey
  });

  // Mova a função initMap para o nível superior do escopo da função Maps
  function initMap() {
    if (isLoaded && !loadError) {
      const myLatLng = { lat: center.lat, lng: center.lng };

      const map = new window.google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          zoom: 15,
          center: myLatLng,
        }
      );

      new window.google.maps.Marker({
        position: myLatLng,
        map,
        title: "EasyPass",
      });
    }
  }

  useEffect(() => {
    // Chama a função de inicialização do mapa após o carregamento da API
    initMap();
  }, [isLoaded, loadError]);

  if (loadError) {
    return <div>Error loading Google Maps API</div>;
  }

  if (!isLoaded) {
    return <Loading />;
  }

  return <div id="map" style={mapContainerStyle}></div>;
}
