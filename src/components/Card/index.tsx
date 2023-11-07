import { useNavigate } from 'react-router-dom';
import { Character } from '../../Types/api';
import styles from './Card.module.css';

type CharacterListProps = {
  character: Character;
};

export default function CharacterCard({
  character,
}: CharacterListProps): JSX.Element {
  const navigate = useNavigate();

  function showCharacter(id: number) {
    const url = new URL(location.href);
    url.pathname = `/character/${id}`;
    navigate(`${url.pathname}${url.search}`);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div
      className={styles.card}
      onClick={(e) => {
        e.stopPropagation();
        showCharacter(character.id);
      }}
    >
      <img src={character.image} />
      <h4>{character.name}</h4>
    </div>
  );
}
