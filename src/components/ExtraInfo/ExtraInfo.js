import React from 'react';
import ExtraInfoItem from '../ExtraInfoItem/ExtraInfoItem.js';

class ExtraInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windDirection: this.windDirection(this.props.data.wind.deg)
    };
  }

  windDirection(deg) {
    let windDirection;

    if(0 < deg && deg <= 90) {      
      windDirection = "северный";
    } else if (90 < deg && deg <= 180) {
      windDirection = "восточный";
    } else if (180 < deg && deg <= 270) {
      windDirection = "южный";
    } else {
      windDirection = "западный";
    }

    return windDirection;
  }

  render() {
    const pressure = this.props.data.main.pressure;
    const humidity = this.props.data.main.humidity;
    const windSpeed = this.props.data.wind.speed;
    const windDirection = this.state.windDirection;

    return (
      <div className="extra-info">
        <div className="extra-info__list">

          <ExtraInfoItem
            detailTitle = "Ветер"
            detailValue = {`${windSpeed} м/c, ${windDirection}`}
          />
          <ExtraInfoItem 
            detailTitle = "Давление"
            detailValue = {`${pressure} мм рт. ст.`}
          />
          <ExtraInfoItem 
            detailTitle = "Влажность"
            detailValue = {`${humidity}%`}
          />
          <ExtraInfoItem 
            detailTitle = "Вероятность дождя"
            detailValue = {`20%`}
          />
        </div>
      </div>
    );
  }
}

export default ExtraInfo;