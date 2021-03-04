import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import './BoxList.css';

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [] };
    this.create = this.create.bind(this);
  }
  remove(id) {
    this.setState({
      boxes: this.state.boxes.filter((box) => box.id !== id),
    });
  }
  create(newBox) {
    this.setState({
      boxes: [...this.state.boxes, newBox],
    });
  }
  render() {
    const boxes = this.state.boxes.map((box) => (
      <Box
        key={box.id}
        id={box.id}
        width={box.width}
        height={box.height}
        color={box.color}
        removeBoxe={() => {
          this.remove(box.id);
        }} // if you passa the arrow funcion here, you don´t need make a bind in the constructor but keep the performace in mind
      />
    ));
    return (
      <div className="BoxList">
        <h1>Color Box Making The World Better</h1>
        <NewBoxForm createBox={this.create} />
        <span>{boxes}</span>
      </div>
    );
  }
}

export default BoxList;
