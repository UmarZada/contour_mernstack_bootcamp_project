import React, { useState } from 'react';
import { useQuery } from 'react-query';

function Dropdownmenu() {
  const countries_cities = [
    { country_name: "Select Country", value: "" },
    { country_name: "pakistan", value: "pakistan", cities: ["karachi", "islamabad", "lahore","buner"] },
    { country_name: "japan", value: "japan", cities: ["osaka", "kyoto", "tokyo"] }
  ];

  const [countries, setCountries] = useState("countries");
  const [cities, setCities] = useState([""]);
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");

  const selectCountry = (event) => {
    setCountries(event.target.value);
    setResult("");
    const selectedCities = countries_cities.find(data => data.value === event.target.value);
    if (selectedCities) {
      setCities(selectedCities.cities);
    } else {
      setCities([""]);
    }
  };

  const fetchWeatherData = async (data) => {
    if (city){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cd0aab3ba61e4af27742fa6aa6fd4cdd`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const data = await response.json();
    const {main} =data; 
    const cel = main.temp - 273.15;
    setResult(`Weather of ${city} is: ${parseInt(cel)} °C`);
    
    return data;
  }};

  const { isLoading, isError,  } = useQuery(['weather', city], () => fetchWeatherData(city));

  const weatherApiCall = (event) => {
    const selectedCity = event.target.value;
    setCity(selectedCity);
    setResult("");
  };

  if (isLoading) {
    return <p>Loading weather data...</p>;
  }

  if (isError) {
    return <p>Error fetching weather data</p>;
  }

 
  return (
    <>
      <select value={countries} className="select" onChange={selectCountry}>
        {countries_cities.map((key, i) => (
          <option key={i} value={key.value}>{key.country_name}</option>
        ))}
      </select>
      <select className="select" value={city} onChange={weatherApiCall}>
        <option value="">Select city</option>
        {cities.map((key, i) => (
          <option key={i} value={key}>{key}</option>
        ))}
      </select>
      <h1 className="result">{result}</h1>
    </>
  );
}

export default Dropdownmenu;
