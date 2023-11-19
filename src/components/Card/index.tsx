import { CharacterData } from '../../types/types';
import styles from './Card..module.css';

export const TEST_ID = 'character-card';

function CharacterCard({ name, image }: CharacterData) {
  return (
    <div className={styles.card} data-testid={TEST_ID}>
      <div>
        <img src={image} />
      </div>
      <div>{name}</div>
    </div>
  );
}

export default CharacterCard;
