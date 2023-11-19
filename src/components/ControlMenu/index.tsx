import { ChangeEvent, FormEvent, useContext, useRef, useState } from 'react';
import styles from './ControlMenu.module.css';
import { MainPageContext } from '../../pages/MainPage';

export const TEST_ID = 'search-bar';

function SearchBar() {
  const { searchTerm, updateSearchTerm } = useContext(MainPageContext);
  const inputElement = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState(searchTerm);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const current = inputElement.current;

    if (current) {
      const value = current.value.trim();
      setInputValue(value);
      updateSearchTerm(value);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <form
      className={styles.search}
      onSubmit={handleSubmit}
      data-testid={TEST_ID}
    >
      <input
        type="text"
        ref={inputElement}
        value={inputValue}
        placeholder="Search..."
        className={styles.input}
        onChange={handleChange}
      />
      <button type="submit" title="Search" className={styles.button}>
        press
      </button>
    </form>
  );
}

export default SearchBar;
