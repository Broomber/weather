import React from 'react';
import TempSwitcherBtn from '../TempSwitcherBtn/TempSwitcherBtn.js';
import SearchBtn from '../SearchBtn/SearchBtn.js';
import SearchField from '../SearchField/SearchField.js';

class Settings extends React.Component {  
  constructor(props) {
    super(props);
    this.handleScaleChange = this.handleScaleChange.bind(this);
    this.handleSearchBtnClick = this.handleSearchBtnClick.bind(this);
  }

  handleScaleChange(e) {
    this.props.onSettingsChange(e);
  }

  handleSearchBtnClick(e) {
    this.props.onSearchClick(e);
  }

  render() {
    let className = this.props.searchOpen ? 'settings _search-open' : 'settings';

    return (
      <div className={className}>

        <div className="settings__row">
          <div className="settings__item">
            <div className="current-city">Омск</div>
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
            <SearchBtn
              searchOpen = {this.props.searchOpen}
              text = {"Сменить город"}
              onSearchBtnClick = {this.handleSearchBtnClick}
            />
            <button className="settings-btn _by-location js--byLocation">Мое местоположение</button>
          </div>
        </div>
        <SearchField
          searchOpen = {this.props.searchOpen}
          onSearchBtnClick = {this.handleSearchBtnClick}
          city = "Петропавловск Камчатский"
        />

      </div>
    );
  }
}

export default Settings;