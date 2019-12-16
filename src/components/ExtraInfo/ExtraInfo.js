import React from 'react';
import ExtraInfoItem from '../ExtraInfoItem/ExtraInfoItem.js';

class ExtraInfo extends React.Component {

  getWindDirection(deg) {
    let direction;

    if(deg > 303.75 || deg <= 56.25) {
      direction = "северный";
    } else if (deg > 56.25 && deg <= 146.25) {
      direction = "восточный";
    } else if (deg > 146.25 && deg <= 236.25) {
      direction = "южный";
    } else if (deg > 236.25 && deg <= 303.75) {
      direction = "западный";
    }

    return direction;
  }

  render() {
    const pressure = Math.round(this.props.data.main.pressure * 0.750062);
    const humidity = this.props.data.main.humidity;
    const windSpeed = this.props.data.wind.speed;
    const windDirection = this.getWindDirection(this.props.data.wind.deg);

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