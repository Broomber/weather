import React from 'react';
import { ReactComponent as Sun } from './icons/sun.svg';
import { ReactComponent as PartlyCloudy } from './icons/partly_cloudy.svg';
import { ReactComponent as Cloud } from './icons/cloud.svg';
import { ReactComponent as Rain } from './icons/rain.svg';
import { ReactComponent as Storm } from './icons/storm.svg';

class BasicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherInfo: this.weatherInfo(this.props.data.weather[0].main)
    };
  }

  weatherInfo(weatherCode) {
    let weatherInfo = {};
    weatherCode = weatherCode.toLowerCase();

    switch (weatherCode) {
      case "clear sky":
        weatherInfo.weatherDesc = "Солнечно";
        weatherInfo.weatherIcon = <Sun />;
        break;
      case "few clouds":
        weatherInfo.weatherDesc = "Переменная облачность";
        weatherInfo.weatherIcon = <PartlyCloudy />;
        break;
      case "scattered clouds":
        weatherInfo.weatherDesc = "Облачно";
        weatherInfo.weatherIcon = <Cloud />;
        break;
      case "rain":
        weatherInfo.weatherDesc = "Дождь";
        weatherInfo.weatherIcon = <Rain />;
        break;
      case "thunderstorm":
        weatherInfo.weatherDesc = "Гроза";
        weatherInfo.weatherIcon = <Sun />;
        break;
      default:        
        weatherInfo.weatherDesc = "Солнечно";
        weatherInfo.weatherIcon = <Storm />;
        break;
    }

    return weatherInfo;
  }

  toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }

  toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }

  render() {
    const weatherIcon = this.state.weatherInfo.weatherIcon;
    const weatherDesc = this.state.weatherInfo.weatherDesc;
    const tempScale = this.props.scale;
    let temperature = this.props.data.main.temp;

    switch (tempScale) {
      case 'c':
        break;
      case 'f':
        temperature = this.toFahrenheit(temperature);
        break;
      default:
        break;
    }

    temperature = Math.round(temperature);

    return (
      <div className="basic-info">
        <div className="basic-info__inner">
          <div className="basic-info__row">
            <div className="weather-icon">
              {weatherIcon}
            </div>
            <div className="weather-temp">
              {temperature}
            </div>
          </div>
          <div className="basic-info__row">
            <div className="weather-desc">
              {weatherDesc}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BasicInfo;