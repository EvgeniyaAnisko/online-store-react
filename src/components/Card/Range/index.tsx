import React, { Component } from 'react';

import './style.css';

interface RangeProps {
  range: number;
}

class Range extends Component {
  props: RangeProps;
  constructor(props: RangeProps) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <>
        <div className="book__information-range" data-range={this.props.range}>
          <img src="./assets/svg/starActive.svg" alt="1" />
          <img
            src={this.props.range - 1 > 0 ? './assets/svg/starActive.svg' : './assets/svg/star.svg'}
            alt="2"
          />
          <img
            src={this.props.range - 2 > 0 ? './assets/svg/starActive.svg' : './assets/svg/star.svg'}
            alt="3"
          />
          <img
            src={this.props.range - 3 > 0 ? './assets/svg/starActive.svg' : './assets/svg/star.svg'}
            alt="4"
          />
          <img
            src={this.props.range - 4 > 0 ? './assets/svg/starActive.svg' : './assets/svg/star.svg'}
            alt="5"
          />
        </div>
      </>
    );
  }
}

export { Range };
