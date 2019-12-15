import React from 'react';
import Settings from '../Settings/Settings.js';
import BasicInfo from '../BasicInfo/BasicInfo.js';
import ExtraInfo from '../ExtraInfo/ExtraInfo.js';
import JsonData from './weather.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: JsonData,
      temperature: '',
      scale: 'c',
      searchOpen: false
    };
    this.handleSettingsChange = this.handleSettingsChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
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

  render() {
    return (
      <div className="weather">
        <div className="weather__inner">

          <Settings
            scale = {this.state.scale}
            onSettingsChange = {this.handleSettingsChange}
            onSearchClick = {this.handleSearchClick}
            searchOpen = {this.state.searchOpen}
          />

          <BasicInfo
            data = {this.state.data}
            temperature = {this.state.temperature}
            scale = {this.state.scale}
          />

          <ExtraInfo
            data = {this.state.data}
          />

        </div>
      </div>
    );
  }
}

export default App;
