import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  render(): React.ReactNode {
    return (
      <>
        <NavLink to="/" className={({ isActive }): string => (isActive ? 'active-link' : '')} end>
          Главная
        </NavLink>
        <NavLink to="/about" className={({ isActive }): string => (isActive ? 'active-link' : '')}>
          О нас
        </NavLink>
      </>
    );
  }
}

export { Navigation };
