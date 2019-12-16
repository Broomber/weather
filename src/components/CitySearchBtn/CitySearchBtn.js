import React from 'react';

class SearchBtn extends React.Component {  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onSearchBtnClick(this.props.searchOpen);
  }

  render() {
    return (
      <button
        className="settings-btn _change-city"
        onClick = {this.handleClick}
          >{this.props.text}
      </button>
    );
  }
}

export default SearchBtn;