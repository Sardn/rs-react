import Image from 'next/image';
import type { FC } from 'react';
import Logo from '../../assets/img/rick-and-morty.jpg';
import styles from './Header.module.css';
const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.img}>
        <Image src={Logo} alt="image Rick and Morty" />
      </div>
    </header>
  );
};

export { Header };
