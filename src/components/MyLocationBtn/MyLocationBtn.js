import React from 'react';

class MyLocationBtn extends React.Component {  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onMyLocationBtnClick(this.props.searchOpen);
  }

  render() {
    return (
      <button
        className="settings-btn _by-location"
        onClick = {this.handleClick}
          >{this.props.text}
      </button>
    );
  }
}

export default MyLocationBtn;