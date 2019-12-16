import React from 'react';
import { ReactComponent as Sun } from './icons/sun.svg';
import { ReactComponent as PartlyCloudy } from './icons/partly_cloudy.svg';
import { ReactComponent as Cloud } from './icons/cloud.svg';
import { ReactComponent as Rain } from './icons/rain.svg';
import { ReactComponent as Storm } from './icons/storm.svg';

class BasicInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  getWeatherInfo(weatherCode) {   
    let weatherInfo = {};
    weatherCode = weatherCode.toLowerCase();

    switch (weatherCode) {
      case "clouds":
        weatherInfo.weatherDesc = "Облачно";
        weatherInfo.weatherIcon = <Cloud />;
        break;
      case "rain":
        weatherInfo.weatherDesc = "Дождь";
        weatherInfo.weatherIcon = <Rain />;
      case "drizzle":
        weatherInfo.weatherDesc = "Мелкий дождь";
        weatherInfo.weatherIcon = <Rain />;
        break;
      case "snow":
        weatherInfo.weatherDesc = "Снег";
        weatherInfo.weatherIcon = <Rain />;
      case "thunderstorm":
        weatherInfo.weatherDesc = "Гроза";
        weatherInfo.weatherIcon = <Sun />;
        break;
      case "сlear":
      default:        
        weatherInfo.weatherDesc = "Солнечно";
        weatherInfo.weatherIcon = <Sun />;
        break;
    }

    return weatherInfo;
  }

  getTemperature(scale, temp) {    
    let temperature;

    switch (scale) {
      case 'f':
        temperature = Math.round((temp - 273.15) * 9 / 5 + 32);
        break;
      case 'c':
      default:
        temperature = Math.round(temp - 273.15);
        break;
    }

    return temperature;
  }

  render() {
    const weatherInfo = this.getWeatherInfo(this.props.data.weather[0].main);
    const temperature = this.getTemperature(this.props.scale, this.props.data.main.temp);

    return (
      <div className="basic-info">
        <div className="basic-info__inner">
          <div className="basic-info__row">
            <div className="weather-icon">
              {weatherInfo.weatherIcon}
            </div>
            <div className="weather-temp">
              {temperature}
            </div>
          </div>
          <div className="basic-info__row">
            <div className="weather-desc">
              {weatherInfo.weatherDesc}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BasicInfo;