import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../API';
import { useState, useEffect } from 'react';
import { Character } from '../../Types/api';
import styles from './Sidebar.module.css';

type Params = {
  id?: string;
};

export default function Sidebar(): JSX.Element {
  const params = useParams<Params>();
  const id = params.id;
  const [character, setCharacter] = useState<Character | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadCharacter = async (charId: number) => {
      setIsLoading(true);
      const resp = await api.getCharacter(charId);
      setCharacter(resp);
      setIsLoading(false);
    };

    if (id) {
      loadCharacter(+id);
    }
  }, [id, params]);

  function onClose() {
    const url = new URL(location.href);
    url.pathname = '';
    navigate(`${url.pathname}${url.search}`);
  }

  return (
    <div className={styles.page}>
      <div className={styles.wrapClose}>
        <button className={styles.close} type="button" onClick={onClose}>
          x
        </button>
      </div>
      {isLoading ? (
        <div>
          <h3>Loading...</h3>
        </div>
      ) : character && character.name ? (
        <>
          <h3>{character.name}</h3>
          <img src={character.image}></img>
          <p>Status: {character.status}</p>
          <p>Gender: {character.gender}</p>
          <p>Species: {character.species}</p>
        </>
      ) : (
        <h3>No Character</h3>
      )}
    </div>
  );
}
