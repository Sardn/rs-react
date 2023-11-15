import styles from './Logo.module.css';
import imgHeader from '../../assets/img/rick-and-morty.jpg';

function Logo() {
  return (
    <div>
      <img className={styles.img} src={imgHeader} alt="image Rick and Morty" />
    </div>
  );
}

export default Logo;
