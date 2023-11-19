import { useContext } from 'react';
import { CharacterData } from '../../types/types';
import Card from '../Card';
import styles from './Cards.module.css';
import NotFoundCard from '../NotFoundCard';
import Pagination from '../Pagination';
import Selector from '../Selector';
import { MainPageContext } from '../../pages/MainPage';

export const TEST_ID = 'characters-list';

function CharactersList() {
  const { charactersData, goTo } = useContext(MainPageContext);

  const showData = (
    data: CharacterData[] | null
  ): JSX.Element | JSX.Element[] => {
    if (data === null) return <></>;
    if (!data.length) return <NotFoundCard />;

    return data.map((character: CharacterData) => (
      <div
        key={character.id}
        onClick={() => goTo(`./details/${character.id}`)}
        className={styles.link}
      >
        <Card {...character} />
      </div>
    ));
  };

  return (
    <>
      <div className={styles.controls}>
        <Pagination />
        <Selector />
      </div>
      <div className={styles.list} data-testid={TEST_ID}>
        {showData(charactersData)}
      </div>
    </>
  );
}

export default CharactersList;
