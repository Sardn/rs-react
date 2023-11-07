import React, { useState } from 'react';
import { keyPrevQuery } from '../../Types/constants';
import { useNavigate } from 'react-router-dom';
import styles from './ControlMenu.module.css';

export default function SearchBar(): JSX.Element {
  const navigate = useNavigate();
  const [query, setQuery] = useState<string>(
    localStorage.getItem(keyPrevQuery) ?? ''
  );

  function onChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setQuery(value);
  }

  function onSearchClick() {
    const q = query.trim();
    localStorage.setItem(keyPrevQuery, q);
    navigate(`/?query=${q}`);
  }
  return (
    <div className={styles.control}>
      <input
        className={styles.search}
        value={query}
        onChange={(event) => onChangeInput(event)}
        type="search"
        placeholder="Search..."
      ></input>
      <button type="button" onClick={() => onSearchClick()}>
        Search
      </button>
    </div>
  );
}
