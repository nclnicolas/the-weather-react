import React, { useState } from "react";


export function useLocation() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(null);
  const [city, setCity] = useState(null);
  const [error, setError] = useState(false);
  

  const fetchProgressInfo = async(cityLocation, cityInput, countryLocation, countryInput) => {
    const respuesta = await fetch(
      `http://api.weatherstack.com/current?access_key=e7f64fd40bd675acc80331ac25c15a38&query=${cityLocation || cityInput},${countryLocation || countryInput}`);
    const resultado = await respuesta.json();
  
    setWeatherData(resultado);
  }

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      alert("La ubicacion no esta disponible");
    }
  };

  const cityLocation = () => {
    if (location) {
      const apiKey = import.meta.env.VITE_WEATHERSTACK_API_KEY;
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${apiKey}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const cityData = data.results[0].address_components.find(
            (component) => component.types.includes("locality")
          ).long_name;
          const countryData = data.results[0].address_components.find(
            (component) => component.types.includes("country")
          ).long_name;
          setCity({
            cityData,
            countryData,
          });
          setError(false)
        })
        .catch((error) => {
          console.log("ERROR", error);
        });
    } else {
      console.log("No hay ciudad");
      setError(true)
    }
  };

  return {
    fetchProgressInfo,
    getLocation,
    cityLocation,
    weatherData,
    city,
    setCity,
    location,
    error,
    setError
  };
}

//AIzaSyC2w_BSXDSsdDoNo67n1ZIDnE9cR2lG0ps
//Clave de api
