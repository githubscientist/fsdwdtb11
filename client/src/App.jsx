import { useEffect, useState } from "react";

const App = () => {

  const [currentWeather, setCurrentWeather] = useState({});

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=madurai&appid=9b3abd72af5e8ee4c215adb53b59b0e5`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setCurrentWeather(data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  useEffect(() => {
    console.log(currentWeather)
  }, [currentWeather]);

  return (
    <div>
      <h1>Current Weather</h1>
      {
        currentWeather.weather && (
          <div>
            <h2>{currentWeather.weather[0].main}</h2>
            <h2>{currentWeather.weather[0].description}</h2>
          </div>
        )
      }

    </div>
  )
}

export default App;