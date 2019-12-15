import React from 'react';

class TempSwitcherBtn extends React.Component {  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onScaleChange(this.props.scale);
  }

  render() {
    const scale = this.props.activeScale;
    const letter = this.props.scale;
    const className = scale === letter ? 'temp-switcher__btn _active' : 'temp-switcher__btn';

    return (
      <button
        className={className}
        onClick = {this.handleClick}>
          {this.props.scale.toUpperCase()}
      </button>
    );
  }
}

export default TempSwitcherBtn;