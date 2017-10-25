import React, { Component } from 'react';
import './Card.scss';

class Card extends Component {
  render() {
    return (
      <div
        className="card"
        name="card"
        onKeyDown={event => this.props.onKeyDown(event, this.props.index)}
        tabIndex="1"
      >
        <div className={`card-body body-bg${this.props.pic}`}>
            <span className="card-title">{this.props.title}</span>
            <span className="card-title-hide">{this.props.name}</span>
        </div>
      </div>
    );
  }     
}
  
export default Card;




