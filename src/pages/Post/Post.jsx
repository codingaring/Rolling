import styled from 'styled-components';
import { ColorBoxBtn } from './component/ColorBox';
import COLORS from '../../utils/colors';
import FONTS from '../../utils/Fonts';
import { Buttons } from '../../components/Buttons';

export const Post = () => {
  return (
    <PostLayout>
      <SendToInputContainer>
        <MainDescription>To.</MainDescription>
        <InputBox type="text" placeholder="받는 사람 이름을 입력해 주세요" />
      </SendToInputContainer>
      <div>
        <MainDescription>배경화면을 선택해 주세요.</MainDescription>
        <Subscription>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</Subscription>
      </div>
      <div>
        <SelectButton type="button">컬러</SelectButton>
        <SelectButton type="button">이미지</SelectButton>
      </div>
      <ColorBoxContainer>
        <ColorBoxBtn type="button" bgcolor="yellow" />
        <ColorBoxBtn type="button" bgcolor="purple" />
        <ColorBoxBtn type="button" bgcolor="blue" />
        <ColorBoxBtn type="button" bgcolor="green" />
      </ColorBoxContainer>
      <Buttons buttonType="Primary56" buttonSize="large">
        생성하기
      </Buttons>
    </PostLayout>
  );
};

const PostLayout = styled.form`
  padding-top: 6rem;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`;

const PostContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4rem;
`;

const InputBox = styled.input`
  width: 72rem;
  padding: 1.2rem 1.6rem;
  border: 0.1rem solid ${COLORS.gray300};
  border-radius: 0.8rem;
`;

const MainDescription = styled.h2`
  ${FONTS.font24_Bold}
  color: ${COLORS.gray900};
`;

const Subscription = styled.p`
  ${FONTS.font16_Regular}
  color: ${COLORS.gray500};
`;

const SendToInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.2rem;
`;

const ColorBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;
`;

const SelectButton = styled.button`
  display: inline-block;
  width: 12rem;
  padding: 0.7rem 1.6rem;
  color: ${COLORS.gray900};
  text-align: center;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.6rem;
  letter-spacing: -0.016rem;
  border-radius: 0.8rem;
  background-color: ${COLORS.gray100};
  border: 0.2rem solid ${COLORS.gray100};

  &:hover,
  &:active {
    border: 0.2rem solid ${COLORS.purple700};
    color: ${COLORS.purple700};
    font-weight: 700;
  }
`;
