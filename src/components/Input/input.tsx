import * as M from '@/styles/Input/InputStyle';
import {useState} from 'react';
import Select from 'react-select';
import data from './data.json';

// const options = [
//   {value: 'option1', label: 'Option 1'},
//   {value: 'option2', label: 'Option 2'},
//   {value: 'option3', label: 'Option 3'},
// ];

const options = data.map((item) => ({
  value: item,
  label: item,
  isDisabled: item.startsWith('-'),
}));

const customStyles: StylesConfig<OptionType, true> = {
  control: (provided: any) => ({
    ...provided,
    width: 300, // 원하는 너비 값으로 설정하세요
    cursor: 'pointer',
    textAlign: 'center', // 가운데 정렬
  }),
  menu: (provided: any) => ({
    ...provided,
    cursor: 'pointer', // 커서를 포인터로 설정
    textAlign: 'center', // 가운데 정렬
  }),
};

export const Input = () => {
  const [selectedOptions, setSelectedOptions] = useState(null);

  return (
    <>
      <M.InputWrapper>
        {/* <M.Input placeholder="모프를 찾아보세요"></M.Input> */}
        <Select
          options={options}
          placeholder={'모프를 선택해보세요'}
          value={selectedOptions}
          styles={customStyles}
        ></Select>
        <M.SearchBtn>검색</M.SearchBtn>
      </M.InputWrapper>
    </>
  );
};
