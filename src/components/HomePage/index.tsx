import { Outlet, useNavigate } from 'react-router-dom';
import Cards from '../Cards';
import ControlMenu from '../ControlMenu';
import styles from './HomePage.module.css';
import imgHeader from '../../assets/img/rick-and-morty.jpg';

export default function Layout(): JSX.Element {
  const navigate = useNavigate();

  function onClick() {
    const url = new URL(location.href);
    url.pathname = '';
    navigate(`${url.pathname}${url.search}`);
  }

  return (
    <div className="app">
      <div className="main-page" onClick={onClick}>
        <header>
          <div>
            <img
              className={styles.img}
              src={imgHeader}
              alt="image Rick and Morty"
            />
          </div>
          <ControlMenu />
        </header>
        <main className="main">
          <Cards />
        </main>
      </div>
      <Outlet />
    </div>
  );
}
