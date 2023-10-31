import React from 'react';
import CharacterCard from '../Card';
import { Character, CharacterResponse } from '../types/api';
import { api } from '../api';
import { keyPrevQuery } from '../types/Const';
import styles from './characterList.module.css';

type CharacterListProps = {
  name: string | null;
};

type CharacterListState = {
  charactersResponse: CharacterResponse | null;
  isLoading: boolean;
};

export default class CharacterList extends React.Component<
  CharacterListProps,
  CharacterListState
> {
  state: CharacterListState = {
    charactersResponse: null,
    isLoading: false,
  };

  async update(query: string | null): Promise<void> {
    this.setState({ isLoading: true });
    let response: CharacterResponse;
    if (query) {
      response = await api.search(query);
    } else {
      response = await api.getCharacters();
    }
    this.setState({ charactersResponse: response, isLoading: false });
  }

  componentDidMount(): void {
    const prevQuery = localStorage.getItem(keyPrevQuery);
    this.update(prevQuery);
  }

  componentDidUpdate(prevProps: Readonly<CharacterListProps>): void {
    if (this.props.name !== prevProps.name) {
      this.update(this.props.name);
    }
  }

  render(): JSX.Element {
    return (
      <div className={styles.list}>
        <div className={styles.cards}>
          {this.state.isLoading && (
            <div>
              <h3>Loading...</h3>
            </div>
          )}
          {this.state.charactersResponse &&
            this.state.charactersResponse.results &&
            !this.state.isLoading &&
            this.state.charactersResponse.results?.map((char: Character) => (
              <CharacterCard key={char.id} character={char} />
            ))}
          {(!this.state.charactersResponse ||
            !this.state.charactersResponse.results) &&
            !this.state.isLoading && <h3>No Results</h3>}
        </div>
      </div>
    );
  }
}
