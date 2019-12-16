import React from 'react';
import AppLoader from '../AppLoader/AppLoader.js';
import AppLoaded from '../AppLoaded/AppLoaded.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      error: null,
      isLoaded: false,
      prevCity: "Moscow"
    };
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleMyLocationBtnClick = this.handleMyLocationBtnClick.bind(this);
  }

  fetchData(url) {
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          const status = result.cod;

          if (status === 200) {
            this.setState(state => ({
              isLoaded: true,
              data: result,
              prevCity: "Moscow",
              city: result.name
            }));
          } else {
            this.fetchDataByCity(this.state.prevCity);
            console.error(`Code: ${result.cod}. Error: ${result.message}`);
          }
        },
        (error) => {
          this.setState(state => ({
            isLoaded: false,
            error: error
          }));
        }
      )
  }

  fetchDataByLocation() {
    const options = {
      enableHighAccuracy: true,
      timeout: 3000,
      maximumAge: 0
    };

    let getPosition = function (options) {
      return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
      });
    }

    getPosition()
      .then((position) => {
        let coord = {};
        coord.lat = position.coords.latitude;
        coord.lon = position.coords.longitude;
        const apiString = `https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&APPID=de3d62b7850fadd38fa54f188fe10ab4`;
        this.fetchData(apiString);
      })
      .catch((err) => {
        alert("Не удалось узнать местоположение");
        console.error(err.message);
        this.fetchDataByCity(this.state.city);
      });
  }

  fetchDataByCity(city) {
    const apiString = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=de3d62b7850fadd38fa54f188fe10ab4`; 
    this.fetchData(apiString);
  }

  componentDidMount() {
    this.fetchDataByLocation();
  }

  handleCityChange(city) {
    this.setState(state => ({
      prevCity: this.state.city,
      city: city
    }));
    this.fetchDataByCity(city);
  }

  handleMyLocationBtnClick(e) {
    this.fetchDataByLocation();
  }

  render() {
    const isLoaded = this.state.isLoaded;
    const code = this.state.data.cod;

    if (isLoaded && code === 200) {
      return (
        <div className="weather">
          <AppLoaded 
            data = {this.state.data}
            city = {this.state.city}
            onCityChange = {this.handleCityChange}
            onMyLocationBtnClick = {this.handleMyLocationBtnClick}
          />
      </div>
      )
    } else if (isLoaded && code !== 200) {
      return (
        alert('alert')
      )
    } else {
      return (
        <div className="weather">
          <AppLoader text = {"Loading..."} />
        </div>
      )
    }
  }
}

export default App;