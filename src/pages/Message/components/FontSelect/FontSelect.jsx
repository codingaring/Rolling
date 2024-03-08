import TextFields from '../../../../components/TextField/TextFields';

const OPTIONS = [
  { value: 'Noto Sans', name: 'Noto Sans' },
  { value: 'Pretendard', name: 'Pretendard' },
];

export const FontSelect = ({ onChange }) => {
  const handleFontChange = (selectedOption) => {
    onChange('font', selectedOption);
  };

  // const handleFontChange = (selectedOption) => {
  //   onChange({ type: 'SET_FIELD', field: 'font', value: selectedOption.value });
  // };

  return (
    <>
      <TextFields
        textFieldType="Dropdown"
        defaultValue="Noto Sans"
        options={OPTIONS}
        width="72rem"
        onChange={handleFontChange}
      />
    </>
  );
};

export default FontSelect;
