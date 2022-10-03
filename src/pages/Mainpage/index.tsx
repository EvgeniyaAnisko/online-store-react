import { Cards } from 'components/Cards';
import { SearchBar } from 'components/SearchBar';
import { books } from 'data/books';
import React from 'react';

const Mainpage = () => {
  return (
    <>
      <SearchBar />
      <Cards books={books} />
    </>
  );
};

export { Mainpage };
