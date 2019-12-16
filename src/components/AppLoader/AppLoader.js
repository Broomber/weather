import React from 'react';

class AppLoader extends React.Component {

  render() {
    return (
      <div className="weather__inner">
        <div className="weather__row _loading">
        Loading...</div>
      </div>
    );
  }
}

export default AppLoader;