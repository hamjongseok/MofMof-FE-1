import Select from 'react-select';
import data from './data.json';
import * as M from '@/styles/Input/InputStyle';

const options = data.map((item) => ({
  value: item,
  label: item,
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
  multiValue: (provided: any) => ({
    ...provided,
    backgroundColor: 'lightblue', // 선택한 옵션의 배경색
    borderRadius: '4px',
    padding: '2px 4px',
    marginRight: '4px',
  }),
  multiValueLabel: (provided: any) => ({
    ...provided,
    color: 'white', // 선택한 옵션의 텍스트 색상
  }),
  multiValueRemove: (provided: any) => ({
    ...provided,
    cursor: 'pointer',
    color: 'blue', // 선택한 옵션의 삭제 아이콘 색상
    ':hover': {
      color: 'red', // 선택한 옵션의 삭제 아이콘 호버 색상
    },
  }),
};

export const InputCalc = () => {
  return (
    <>
      <M.InputWrapper>
        {/* <M.Input placeholder="모프를 찾아보세요"></M.Input> */}
        <Select
          options={options}
          placeholder={'모프를 선택해보세요'}
          isMulti
          styles={customStyles}
          maxMenuHeight={180} // 선택 가능한 항목의 개수에 따라 조절
        ></Select>
      </M.InputWrapper>
    </>
  );
};
