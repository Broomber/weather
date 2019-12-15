import React from 'react';

class SearchField extends React.Component {  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onSearchBtnClick(this.props.searchOpen);
  }

  render() {
    return (
      <div className="search-field">
        <div className="search-field__inner">
          <input class="search-field__input" placeholder={this.props.city} />
          <button
            className="search-field__btn"
            onClick = {this.handleClick}
              >OK</button>
        </div>        
      </div>
    );
  }
}

export default SearchField;