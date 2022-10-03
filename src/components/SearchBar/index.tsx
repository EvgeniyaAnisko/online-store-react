import React, { Component } from 'react';
import './style.css';

class SearchBar extends Component {
  state = {
    search: '',
  };

  componentDidMount() {
    const searchLocal = localStorage.getItem('search');
    if (searchLocal !== '') {
      this.setState({ search: searchLocal });
    } else {
      this.setState({ search: '' });
    }
  }

  componentWillUnmount() {
    if (this.state.search) {
      localStorage.setItem('search', this.state.search);
    }
  }

  handleChange = (event: { target: HTMLInputElement }) => {
    const input: HTMLInputElement = event.target;
    this.setState({ [input.name]: input.value });
  };

  render(): React.ReactNode {
    return (
      <div className="search-bar">
        Найти книгу:{' '}
        <input
          name="search"
          id="search"
          className="search"
          placeholder="..."
          autoFocus
          autoComplete="password"
          value={this.state.search ? this.state.search : ''}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export { SearchBar };
