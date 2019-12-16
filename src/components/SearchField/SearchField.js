import React from 'react';

class SearchField extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({city: e.target.value});
  }

  handleSubmit(e) {
    this.props.onCityChange(this.state.city);
    e.preventDefault();
  }

  render() {
    return (
      <div className="search-field">
        <div className="search-field__inner">
          <form onSubmit={this.handleSubmit}>
            <input 
              className="search-field__input"
              type="text" 
              placeholder = "Город"
              value = {this.state.city} 
              onChange = {this.handleChange} />
            <input 
              className="search-field__btn" 
              type="submit" 
              value="OK" />
          </form>
        </div>        
      </div>
    );
  }
}

export default SearchField;