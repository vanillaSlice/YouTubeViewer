import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from '../../node_modules/prop-types';

import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displaySearchSmall: false,
      term: '',
    };

    this.toggleDisplaySearchSmall = this.toggleDisplaySearchSmall.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  toggleDisplaySearchSmall() {
    this.setState(prevState => ({
      displaySearchSmall: !prevState.displaySearchSmall,
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSearch(this.state.term);
  }

  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <header className="Header">
        <div className="content">
          <h1 className={`brand visible-md ${this.state.displaySearchSmall ? 'hidden-sm' : 'visible-sm'}`}>
            <a href="." title="YouTube Viewer">
              <FontAwesome className="logo" name="youtube-play" tag="i" />
              YouTube Viewer
            </a>
          </h1>
          <button
            className={`back-button icon-button hidden-md ${this.state.displaySearchSmall ? 'visible-sm' : 'hidden-sm'}`}
            type="button"
            onClick={this.toggleDisplaySearchSmall}
          >
            <FontAwesome name="arrow-left" tag="i" />
            <span className="sr-only">Back</span>
          </button>
          <form
            className={`search-form visible-md ${this.state.displaySearchSmall ? 'visible-sm' : 'hidden-sm'}`}
            onSubmit={this.handleSubmit}
          >
            <input
              type="search"
              placeholder="Search"
              autoComplete="off"
              value={this.state.term}
              onChange={this.handleTermChange}
            />
            <button
              className={'submit-button'}
              type="submit"
            >
              <FontAwesome name="search" tag="i" />
              <span className="sr-only">Submit</span>
            </button>
          </form>
          <button
            className={`search-button icon-button hidden-md ${this.state.displaySearchSmall ? 'hidden-sm' : 'visible-sm'}`}
            type="button"
            onClick={this.toggleDisplaySearchSmall}
          >
            <FontAwesome name="search" tag="i" />
            <span className="sr-only">Search</span>
          </button>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Header;
