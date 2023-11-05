import CharacterList from './components/CharacterList';
import ControlMenu from './components/ControlMenu';
import React from 'react';
import './App.css';
import Pagination from './components/Pagination';
import { Route, Routes } from 'react-router-dom';

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <header>
              <h1>Rick & Morty</h1>
              <ControlMenu />
            </header>
            <main className="main">
              <CharacterList />
              <Pagination
                currentPage={0}
                allPage={null}
                nextPage={function (): void {
                  throw new Error('Function not implemented.');
                }}
                prevPage={function (): void {
                  throw new Error('Function not implemented.');
                }}
              />
            </main>
          </>
        }
      ></Route>
    </Routes>
  );
}
