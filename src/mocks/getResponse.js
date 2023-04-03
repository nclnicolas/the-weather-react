export const response = {
    request : {
        type: "City",
        query: "Quilmes, Argentina",
        language: "en",
        unit: "m"
    },
    location : {
        name: "Quilmes",//ciudad
        country: "Argentina",//pais
        region: "Buenos Aires",//provincia
        lat: "-34.720",
        lon: "-58.269",
        timezone_id: "America/Argentina/Buenos_Aires",
        localtime: "2023-03-14 12:36",//hora local
        localtime_epoch: 1678797360,
        utc_offset: "-3.0"
    },
    current : {
        observation_time: "03:36 PM",
        temperature: 31,//temperatura
        weather_code: 113,
        weather_icons: [
            "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
        ],
        weather_descriptions: [//descripciones meteorologicas
            "Sunny"
        ],
        wind_speed: 9, //velocidad del viento
        wind_degree: 10,
        wind_dir: "N",
        pressure: 1012,
        precip: 0,//precipitacion
        humidity: 63,//humedad
        cloudcover: 0,
        feelslike: 33,//sensacion termica
        uv_index: 8,//indice UV
        visibility: 10,//visibilidad
        is_day: "yes"
    }
}