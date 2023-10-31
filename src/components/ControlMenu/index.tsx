import React from 'react';
import { keyPrevQuery } from '../../types/Const';
import styles from './ControlMenu.module.css';

type SearchBarProps = {
  onChange: (query: string) => void;
};

type SearchBarState = {
  query: string;
  error: Error | null;
};

export default class SearchBar extends React.Component<
  SearchBarProps,
  SearchBarState
> {
  state: SearchBarState = {
    query: localStorage.getItem(keyPrevQuery) || '',
    error: null,
  };

  onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    this.setState({ query: value });
  }

  onSearchClick() {
    const query = this.state.query.trim();
    localStorage.setItem(keyPrevQuery, query);
    this.props.onChange(query);
  }

  render() {
    if (this.state.error) throw this.state.error;
    return (
      <div>
        <input
          className={styles.search}
          value={this.state.query}
          onChange={(event) => this.onChange(event)}
          type="search"
          placeholder="Search..."
        ></input>
        <button type="button" onClick={() => this.onSearchClick()}>
          Search
        </button>
        <button onClick={() => this.setState({ error: new Error() })}>
          Throw an error
        </button>
      </div>
    );
  }
}
