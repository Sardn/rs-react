import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DataLoader from '../../services/dataLoader/dataLoader';
import { CharacterData } from '../../types/types';
// import Loader from '../../Loader';
import styles from './Sidebar.module.css';

export const TEST_ID = 'character-details';
export const CLOSE_BTN_TEST_ID = 'close-btn';

type Data = CharacterData | null;

function CharacterDetails() {
  const { characterID } = useParams();
  const [characterData, setCharacterData] = useState<Data>(null);
  const [, setLoader] = useState(false);
  const navigate = useNavigate();
  const NOT_SPECIFIED = 'not specified';

  useEffect(() => {
    const dataLoader = new DataLoader();

    const loadData = async (id: string) => {
      try {
        const data = await dataLoader.getCharacterData(id);

        setTimeout(() => {
          setCharacterData(data);
          setLoader(false);
        }, 250);
      } catch (err) {
        console.error(err);
        setLoader(false);
      }
    };

    setLoader(true);
    loadData(characterID || '');
  }, [characterID]);

  const closeDetails = () => {
    navigate('..');
  };

  return (
    <>
      {/* {loader ? <Loader /> : null} */}
      {characterData !== null ? (
        <div className={styles.container} data-testid={TEST_ID}>
          <div className={styles.overlay} onClick={closeDetails}></div>
          <div className={styles.details}>
            <button onClick={closeDetails} data-testid={CLOSE_BTN_TEST_ID}>
              X
            </button>
            <div className={styles.carddetails}>
              {characterData ? (
                <>
                  <h3>{characterData.name}</h3>
                  <div className={styles.img}>
                    <img src={characterData.image} />
                  </div>
                  <div>
                    <table>
                      <tbody>
                        <tr>
                          <td>Status:</td>
                          <td>{characterData.status || NOT_SPECIFIED}</td>
                        </tr>
                        <tr>
                          <td>Species:</td>
                          <td>{characterData.species || NOT_SPECIFIED}</td>
                        </tr>
                        <tr>
                          <td>Type:</td>
                          <td>{characterData.type || NOT_SPECIFIED}</td>
                        </tr>
                        <tr>
                          <td>Gender:</td>
                          <td>{characterData.gender || NOT_SPECIFIED}</td>
                        </tr>
                        <tr>
                          <td>Origin:</td>
                          <td>{characterData.origin.name || NOT_SPECIFIED}</td>
                        </tr>
                        <tr>
                          <td>Location:</td>
                          <td>
                            {characterData.location.name || NOT_SPECIFIED}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </>
              ) : (
                <>
                  <div className="character-description">
                    The character is not found...
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default CharacterDetails;
