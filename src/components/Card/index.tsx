import { IBook } from 'models';
import React from 'react';
import { Component } from 'react';
import { Buttons } from './Buttons';
import { Range } from './Range';

import './style.css';

interface CardProps {
  card: IBook;
}

export class Card extends Component {
  props: CardProps;

  constructor(props: CardProps) {
    super(props);
    this.props = props;
  }

  render(): React.ReactNode {
    return (
      <div className="card unhidden" id={String(this.props.card.id)} data-id={this.props.card.id}>
        <div className="book">
          <img className="book__image" src={this.props.card.img} alt={this.props.card.title} />
          <div className="book__wrapper">
            <div className="book__information">
              <div className="book__information-main">
                <div className="book__information-main-description">
                  <h2 className="book__information-title">{this.props.card.title}</h2>
                  <h3 className="book__information-author">
                    {this.props.card.author},{' '}
                    <span className="book__information-year">{this.props.card.year}</span>
                  </h3>
                </div>
                <span className="price">{this.props.card.price}$</span>
              </div>
              <Range range={this.props.card.range} />
              <span className="book__information-category"> {this.props.card.category} </span>
              <span className="book__information-subtitle">Издательство</span>
              <span className="book__information-publisher"> {this.props.card.publisher} </span>
              <span className="book__information-subtitle">Переплёт</span>
              <span className="book__information-binding"> {this.props.card.binding} </span>
              <span className="book__information-subtitle">Остаток на складе</span>
              <span className="book__information-count"> {this.props.card.count} </span>
            </div>
            <Buttons card={this.props.card} />
          </div>
        </div>
      </div>
    );
  }
}
