import React, { useEffect, useState } from 'react'

import './App.css';
import axios from 'axios';

import AddCity from './components/AddCity'
import Weather from './components/Weather.js'
import ShowWeather from './components/ShowWeather.jsx';


function App() {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([])
  const [weather, setWeather] = useState(null)


  const handleSubmit = (e) => {
    e.preventDefault();
    addCity(city)
  }

  const addCity = async (city) => {
    await axios.post(`/api/cities`, {city})
    getCities();
    setCity('');
  }

  const getCities = async () => {
    const {data} = await axios('/api/cities');
    const cities = data.cities.map((city) => city.city_name);
    setCities(cities);
  }
  
  const getWeather = async (city) =>{
    const {data} = await axios(`/api/weather/${city}`)
    console.log(data.weather)
    setWeather(data)
  }

  useEffect(() =>{
    getCities()
  }, [])


  return (
    <div className="container text-center mx-auto my-20 text-gray-600">
      <h1 className="my-2 text-gray-500" >Awesome Weather Dashboard</h1>
      <p>the current wather for your favorite cities!</p>
      <AddCity
        handleSubmit={handleSubmit}
        handleInputChange={(e) => setCity(e.target.value)}
        newCity={city}
      />
      <Weather
        cities={cities}
        handleSelectCity = {(e) => getWeather(e.target.value)}
      />
      { weather && <ShowWeather data={weather}/>}
    </div>
  );
}

export default App;
