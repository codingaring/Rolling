import TextFields from '../../../../components/TextField/TextFields';

const EnterContent = ({ onChange }) => {
  const handleEnterContentChange = (content) => {
    onChange('content', content);
  };

  // const handleEnterContentChange = (content) => {
  //   onChange({ type: 'SET_FIELD', field: 'content', value: content });
  // };

  return (
    <>
      <TextFields textFieldType="TextEditor" onChange={handleEnterContentChange} />
    </>
  );
};

export default EnterContent;
