/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import styles from './Search.module.scss';
import imgSearch from '../../assets/img/search-svgrepo-com.svg';
// import close from '../assets/img/4115230_cancel_close_delete_icon.svg';

interface searchProps {}

class Search extends Component {
  constructor(props: searchProps) {
    super(props);
  }

  render() {
    return (
      <div className={styles.root}>
        <img className={styles.icon} src={imgSearch} width={25} alt="" />
        <input
          // value={searchValue}
          // onChange={(event) => setSearchValue(event.target.value)}
          type="text"
          className={styles.input}
          placeholder="Search..."
        />
        {/* {searchValue && (
          <img
            className={styles.closeIcon}
            onClick={() => setSearchValue('')}
            src={close}
            width={25}
            alt=""
          />
        )} */}
      </div>
    );
  }
}
// function Search() {
//   const { searchValue, setSearchValue } = React.useContext;

//   return (
//     <div className={styles.root}>
//       <img className={styles.icon} src={imgSearch} width={25} alt="" />
//       <input
//         value={searchValue}
//         onChange={(event) => setSearchValue(event.target.value)}
//         type="text"
//         className={styles.input}
//         placeholder="Search..."
//       />
//       {searchValue && (
//         <img
//           className={styles.closeIcon}
//           onClick={() => setSearchValue('')}
//           src={close}
//           width={25}
//           alt=""
//         />
//       )}
//     </div>
//   );
// }

export default Search;
