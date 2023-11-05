import CharacterList from './components/CharacterList';
import ControlMenu from './components/ControlMenu';
import React from 'react';
import './App.css';
import Pagination from './components/Pagination';
import { Route, Routes } from 'react-router-dom';

export default class App extends React.Component<object, AppState> {
  state: AppState = {
    query: null,
  };

  onChangeQuery(q: string) {
    this.setState({ query: q });
  }

  render() {
    return (
      <Routes>
        <Route>
          <>
            <header>
              <h1>Rick & Morty</h1>
              <ControlMenu
                onChange={(query) => this.onChangeQuery(query)}
              ></ControlMenu>
            </header>
            <main className="main">
              <CharacterList name={this.state.query} />
              <Pagination />
            </main>
          </>
        </Route>
      </Routes>
    );
  }
}

// type AppState = {
//   query: string | null;
// };

// const App = () => {
//   state: AppState = {
//     query: null,
//   };

//   onChangeQuery(q: string) {
//     this.setState({ query: q });
//   }
//   return (
//     <>
//       <header>
//         <h1>Rick & Morty</h1>
//         <ControlMenu
//           onChange={(query) => this.onChangeQuery(query)}
//         ></ControlMenu>
//       </header>
//       <main className="main">
//         <CharacterList name={this.state.query} />
//       </main>
//     </>
//   );
// };

// export default App;

// function onChangeQuery(q: any, string: any) {
//   throw new Error('Function not implemented.');
// }
