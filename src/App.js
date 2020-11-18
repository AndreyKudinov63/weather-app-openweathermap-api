import React from "react";
import WeatherDisplay from "./WeatherDisplay";
import "./App.css";

const PLACES = [
  { name: "Самара", zip: "Samara", lang: "ru" },
  { name: "Ульяновск", zip: "Ulyanovsk", lang: "ru" },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0,
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="weatherDisplay">
        {PLACES.map((place, index) => (
          <button
            className="btn btn-effect"
            key={index}
            onClick={() => {
              this.setState({ activePlace: index });
            }}
          >
            {place.name}
          </button>
        ))}
        <WeatherDisplay
          key={activePlace}
          zip={PLACES[activePlace].zip}
          lang={PLACES[activePlace].lang}
        />
      </div>
    );
  }
}

export default App;
