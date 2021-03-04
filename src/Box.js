import React, { Component } from 'react';
import './Box.css';
class Box extends Component {
  render() {
    return <div className="Box-container">
        <button onClick={this.props.removeBoxe}>X</button>
        <div className="Box" style={{ height: `${this.props.height}em`, width: `${this.props.width}em`, backgroundColor: this.props.color }} />
      </div>;
  }
}

export default Box;
