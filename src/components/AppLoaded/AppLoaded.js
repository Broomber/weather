import React from 'react';
import Settings from '../Settings/Settings.js';
import BasicInfo from '../BasicInfo/BasicInfo.js';
import ExtraInfo from '../ExtraInfo/ExtraInfo.js';

class AppLoaded extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: 'c',
      searchOpen: false
    };
    this.handleSettingsChange = this.handleSettingsChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleMyLocationBtnClick = this.handleMyLocationBtnClick.bind(this);
  }

  handleSettingsChange(e) {
    if (this.state.scale !== e) {
      this.setState(state => ({
        scale: e
      }));
    }
  }

  handleSearchClick(e) {
    this.setState(state => ({
      searchOpen: !e
    }));
  }

  handleCityChange(city) {
    this.props.onCityChange(city);
    this.setState(state => ({
      searchOpen: false
    }));
  }

  handleMyLocationBtnClick(e) {
    this.props.onMyLocationBtnClick(e);
  }

  render() {
    return (
      <div className="weather__inner">
        <Settings
          scale = {this.state.scale}
          onSettingsChange = {this.handleSettingsChange}
          onSearchClick = {this.handleSearchClick}
          onMyLocationBtnClick = {this.handleMyLocationBtnClick}
          searchOpen = {this.state.searchOpen}          
          data = {this.props.data}
          onCityChange = {this.handleCityChange}
        />

        <BasicInfo
          data = {this.props.data}
          scale = {this.state.scale}
        />

        <ExtraInfo
          data = {this.props.data}
        />
      </div>
    );
  }
}

export default AppLoaded;