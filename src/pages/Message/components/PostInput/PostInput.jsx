import { useState } from 'react';
import TextFields from '../../../../components/TextField/TextFields';
import * as S from './PostInputStyled';

const PostInput = ({ onChange, isInputError, setIsInputError }) => {
  const [name, setName] = useState('');
  const [touched, setTouched] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setName(value);
    onChange('sender', value);
    // onChange({ type: 'SET_FIELD', field: 'sender', value: value });
    setIsInputError(!value.trim()); // 공백만 있는 경우도 에러로 처리
    if (!touched) setTouched(true); // 사용자가 입력을 시작하면 touched를 true로 설정
  };

  const handleBlur = () => {
    setIsInputError(!name.trim()); // onBlur에서도 공백을 에러로 처리
    if (!touched) setTouched(true); // 사용자가 필드에서 벗어나면 touched를 true로 설정
  };

  return (
    <>
      <TextFields
        textFieldType="Input"
        placeholder="이름을 입력해 주세요."
        width="72rem"
        onChange={handleInputChange}
        onBlur={handleBlur}
        value={name}
        $isError={isInputError && touched}
      />
      <S.ErrorMessage $isError={isInputError && touched}>이름을 입력해주세요.</S.ErrorMessage>
    </>
  );
};

export default PostInput;
