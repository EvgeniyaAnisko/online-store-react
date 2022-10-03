import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

import { Navigation } from 'components/Navigation';

class Layout extends Component {
  render(): React.ReactNode {
    return (
      <>
        <header>
          <Navigation />
        </header>
        <Outlet />
        <footer>2022</footer>
      </>
    );
  }
}

export { Layout };
