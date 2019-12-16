import React from 'react';
import TempSwitcherBtn from '../TempSwitcherBtn/TempSwitcherBtn.js';
import CitySearchBtn from '../CitySearchBtn/CitySearchBtn.js';
import MyLocationBtn from '../MyLocationBtn/MyLocationBtn.js';
import SearchField from '../SearchField/SearchField.js';

class Settings extends React.Component {  
  constructor(props) {
    super(props);
    this.handleScaleChange = this.handleScaleChange.bind(this);
    this.handleSearchBtnClick = this.handleSearchBtnClick.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleMyLocationBtnClick = this.handleMyLocationBtnClick.bind(this);
  }

  handleScaleChange(e) {
    this.props.onSettingsChange(e);
  }

  handleSearchBtnClick(e) {
    this.props.onSearchClick(e);
  }

  handleCityChange(city) {
    this.props.onCityChange(city);
  }

  handleMyLocationBtnClick(e) {
    this.props.onMyLocationBtnClick(e);
  }

  render() {
    let className = this.props.searchOpen ? 'settings _search-open' : 'settings';

    return (
      <div className={className}>

        <div className="settings__row">
          <div className="settings__item">
            <div className="current-city">{this.props.data.name}</div>
          </div>

          <div className="settings__item">
            <div className="temp-switcher">
              <div className="temp-switcher__btnWrapper">
                <TempSwitcherBtn
                  activeScale = {this.props.scale}
                  scale = 'c'
                  onScaleChange = {this.handleScaleChange}
                />
                <TempSwitcherBtn
                  activeScale = {this.props.scale}
                  scale = 'f'
                  onScaleChange = {this.handleScaleChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="settings__row">
          <div className="settings__item">
            <CitySearchBtn
              searchOpen = {this.props.searchOpen}
              text = {"Сменить город"}
              onSearchBtnClick = {this.handleSearchBtnClick}
            />
            <MyLocationBtn
              text = {"Мое местоположение"}
              onMyLocationBtnClick = {this.handleMyLocationBtnClick}
            />
          </div>
        </div>
        <SearchField
          searchOpen = {this.props.searchOpen}
          onCityChange = {this.handleCityChange}
        />

      </div>
    );
  }
}

export default Settings;