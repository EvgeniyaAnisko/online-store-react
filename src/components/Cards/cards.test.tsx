import { render, screen } from '@testing-library/react';
import { IBook } from 'models';
import React from 'react';
import { Cards } from '.';

const data: IBook[] = [
  {
    id: 2,
    title: 'Бойцовский клуб',
    img: './assets/images/fight_club_2.jpg',
    author: 'Чак Паланик',
    year: 2019,
    description:
      '"Бойцовский клуб" – самый знаменитый роман Чака Паланика. Все помнят фильм режиссера Дэвида Финчера с Брэдом Питтом в главной роли? Он именно по этой книге. Это роман-вызов, роман, созданный всем назло и вопреки всему, в нем описывается поколение озлобившихся людей, потерявших представление о том, что можно и чего нельзя, где добро и зло, кто они сами и кто их окружает. Сам Паланик называет свой "Бойцовский клуб" новым "Великим Гэтсби". Какие же они – эти Гэтсби конца XX века?',
    category: 'Современная литература',
    publisher: 'АСТ',
    binding: 'Мягкий',
    range: 5,
    count: 7,
    price: 3.91,
  },
];

describe('Cards component', () => {
  it('Cards renders', () => {
    render(<Cards books={data} />);

    expect(screen.getByText(/2019/i)).toBeInTheDocument();
  });
});
