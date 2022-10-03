import { Card } from 'components/Card';
import { IBook } from 'models';
import React, { Component } from 'react';

import './style.css';

interface CardsProps {
  books: IBook[];
}

class Cards extends Component {
  props: CardsProps;

  constructor(props: CardsProps) {
    super(props);
    this.props = props;
  }

  render(): React.ReactNode {
    return (
      (this.props.books.length && (
        <div className="cards">
          {this.props.books.map((book) => (
            <Card card={book} key={book.id} />
          ))}
        </div>
      )) || <></>
    );
  }
}

export { Cards };
