import React from 'react';

class ExtraInfoItem extends React.Component {
  
  render() {
    return (
      <div className="extra-info__item">
        <div className="extra-info-part">
          <div className="extra-info-part__title">
            {this.props.detailTitle}
          </div>
          <div className="extra-info-part__value">
            {this.props.detailValue}
          </div>
        </div>
      </div>
    );
  }
}

export default ExtraInfoItem;