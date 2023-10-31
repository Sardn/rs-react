import CharacterList from './components/CharacterList';
import ControlMenu from './components/ControlMenu';
import React from 'react';
import './App.css';

type AppState = {
  query: string | null;
};

export default class App extends React.Component<object, AppState> {
  state: AppState = {
    query: null,
  };

  onChangeQuery(q: string) {
    this.setState({ query: q });
  }

  render() {
    return (
      <>
        <header>
          <h1>Rick & Morty</h1>
          <ControlMenu
            onChange={(query) => this.onChangeQuery(query)}
          ></ControlMenu>
        </header>
        <main className="main">
          <CharacterList name={this.state.query} />
        </main>
      </>
    );
  }
}
