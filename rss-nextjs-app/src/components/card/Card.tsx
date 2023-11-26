import Image from 'next/image';
import { type FC } from 'react';
import { TEST_DATA } from '../../data/data';
import { type ResultData } from '../../data/types';
import styles from './Card.module.css';

interface CardProps {
  data: ResultData;
  onDetailsClick: () => void;
}

const Card: FC<CardProps> = ({ data, onDetailsClick }) => {
  const { image, name } = data;

  return (
    <div
      data-testid={TEST_DATA.CARD}
      onClick={onDetailsClick}
      className={styles.card}
    >
      <div className="relative w-[60%] aspect-square m-2">
        <Image
          src={image}
          loader={() => image}
          fill
          alt="image"
          className={styles.img}
          unoptimized
        />
      </div>

      <h2>{name}</h2>
    </div>
  );
};

export { Card };
