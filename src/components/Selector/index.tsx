import { ChangeEvent, useContext } from 'react';
import { API_ITEMS_PER_PAGE } from '../../services/dataLoader/settingsAPI';
import { MainPageContext } from '../pages/MainPage';

interface Props {
  optionsCount?: number;
}

function ItemsPerPage({ optionsCount = 3 }: Props) {
  const { itemsPerPage, updateItemsPerPage } = useContext(MainPageContext);
  const options: JSX.Element[] = [];

  for (let i = 1; i <= optionsCount; i++) {
    const value = API_ITEMS_PER_PAGE * i;
    options.push(
      <option key={i} value={value}>
        {value}
      </option>
    );
  }

  const handleChangeEvent = (event: ChangeEvent<HTMLSelectElement>) =>
    updateItemsPerPage(+event.target.value);

  return (
    <div className="select">
      <select value={itemsPerPage} onChange={handleChangeEvent}>
        {options}
      </select>
    </div>
  );
}

export default ItemsPerPage;
