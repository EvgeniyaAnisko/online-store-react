import { IBook } from 'models';
import React from 'react';
import { Component } from 'react';

import './style.css';

interface ButtonsProps {
  card: IBook;
}

export class Buttons extends Component {
  props: ButtonsProps;

  constructor(props: ButtonsProps) {
    super(props);
    this.props = props;
  }

  addWish = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    (event.target as HTMLElement).classList.toggle('active');
  };

  render(): React.ReactNode {
    return (
      <div className="book__sales">
        <div className="btns">
          <button className="button-more btn" onClick={(e) => this.addWish(e)}>
            Детали
          </button>
          <button className="button-wish btn" onClick={(e) => this.addWish(e)}>
            {<img src="./assets/svg/heart.svg" alt="to-wish" />}
            Добавить в избранное
          </button>
        </div>
      </div>
    );
  }
}
