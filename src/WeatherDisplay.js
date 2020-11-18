import React from "react";

class WeatherDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      weatherData: null,
    };
  }
  componentDidMount() {
    const zip = this.props.zip;
    const lang = this.props.lang;
    const URL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      zip +
      "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric&lang=" +
      lang;
    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        this.setState({ weatherData: json });
      });
  }
  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData)
      return <div>Сейчас загрузится...</div>;
    const weather = weatherData.weather[0];
    const iconUrl =
      "http://openweathermap.org/img/w/" +
      weather.icon +
      ".png";
    return (
      <div>
        <h1>{weather.main}</h1>
        <img src={iconUrl} alt={weatherData.description} />
        <p>
          Температура (°C):{" "}
          {Math.round(weatherData.main.temp)}
        </p>
        <p>
          Скорость ветра (м/с):{" "}
          {Math.round(weatherData.wind.speed)}
        </p>
      </div>
    );
  }
}

export default WeatherDisplay;
