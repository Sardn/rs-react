import { type SelectData } from '@/data/types';
import { type FC } from 'react';

interface SelectProps {
  data: SelectData;
  selected: number;
  onSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: FC<SelectProps> = ({ data, selected, onSelect }) => {
  return (
    <label>
      {`${data.selectLabel} `}
      <select
        defaultValue={selected}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>): void => {
          onSelect(event);
        }}
      >
        {data.selectOptions.map((item: number) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export { Select };
