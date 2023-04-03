import React, { useEffect, useState } from "react";
import { useLocation } from "../hooks/useLocation";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import style from "../styles/home.module.css";
import Temperature from "./Temperature";

const Home = () => {
  const [inputCity, setInputCity] = useState("");

  const {
    fetchProgressInfo,
    getLocation,
    cityLocation,
    weatherData,
    city,
    error,
    setError,
  } = useLocation();

  const handleInputCity = (e) => {
    setInputCity(e.target.value);
  };

  const currentLocation = () => {
    getLocation();
    cityLocation();
    if (city) {
      fetchProgressInfo(city.cityData, null, city.countryData, null);
    }
  };
  const errorCity = () => {
    if(weatherData){
      if(weatherData.location.name === 'Null'){
        setError(true);
        console.log("ciudad null");
    }
    }
}

useEffect(() => {
  errorCity();
}, [weatherData])

  const handleSubmit = () => {
    if ([inputCity].includes("")) {
      setError(true);
      console.log("ingresa datos");
      return;
    }
    setError(false);

    return fetchProgressInfo(null, inputCity, null, null);
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      ></Box>

      <div className={style.container}>
        <h1>Consulta El Clima</h1>

        <div className={style.containerForm}>
          <form onSubmit={handleSubmit} className={style.form}>
            <TextField
              error={error ? true : false}
              onChange={handleInputCity}
              label={"Ingrese Ciudad"}
            />

            <div className={style.buttonSubmit}>
              <Button
                color="inherit"
                onClick={() => handleSubmit()}
                variant="outlined"
              >
                Obtener El Clima
              </Button>
            </div>
          </form>
          <Button
            color="inherit"
            onClick={() => currentLocation()}
            variant="outlined"
          >
            Obtener Clima de mi Ubicacion Actual
          </Button>
        </div>
      </div>

      {error ? (
        <h1 className={style.contentError}>Permita que identifiquemos su ubicacion<br/> o ingrese una ciudad valida</h1>
      ) : (
        <div>
          {weatherData ? (
            <Temperature weatherData={weatherData} />
          ) : (
            <Box sx={{ width: "30%" }}>
              <p>Esperando El Clima... </p>
              <LinearProgress color="inherit" />
            </Box>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
