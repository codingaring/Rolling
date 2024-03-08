import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { postMessage } from '../../api/api';
import Layout from '../../layout/Layout';
import PostInput from './components/PostInput';
import ProfileImageSelect from './components/ProfileImageSelect';
import RelationshipSelect from './components/RelationshipSelect';
import EnterContent from './components/EnterContent';
import FontSelect from './components/FontSelect';
import Buttons from '../../components/Buttons';
import * as S from './MessageStyled';

const initialState = {
  sender: '', // 보낸이 이름
  profileImageURL:
    'https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png', // 프로필 이미지 URL
  relationship: '지인', // 관계
  content: '', // 내용
  font: 'Noto Sans', // 기본 폰트
};

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_FIELD':
//       return {...state, [action.field]: action.value};
//     case 'RESET':
//       return initialState;
//     default:
//       return state;
//   }
// }

const Message = () => {
  const [messageData, setMessageData] = useState(initialState);
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [isInputError, setIsInputError] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // 이미 요청 중인 경우 무시
    if (isSubmitting) {
      return;
    }

    try {
      setIsSubmitting(true);
      await postMessage({ id, body: { team: 10, recipientId: id, ...messageData } });
      navigate(`/post/${id}`);
    } catch (error) {
      return;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (key, value) => {
    setMessageData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  // const handleChange = (field, value) => {
  //   dispatchEvent({type: 'SET_FIELD', field, value});
  // }

  return (
    <Layout>
      <S.Container onSubmit={handleSubmit}>
        <div>
          <S.Title>From.</S.Title>
          <PostInput onChange={handleChange} isInputError={isInputError} setIsInputError={setIsInputError} />
        </div>

        <div>
          <S.Title>프로필 이미지</S.Title>
          <ProfileImageSelect onChange={handleChange} selectedImgUrl={messageData.profileImageURL} />
        </div>

        <div>
          <S.Title>상대와의 관계</S.Title>
          <RelationshipSelect onChange={handleChange} setMessageData={setMessageData} messageData={messageData} />
        </div>

        <S.EnterContentWrapper>
          <S.Title>내용을 입력해주세요</S.Title>
          <EnterContent onChange={handleChange} setMessageData={setMessageData} />
        </S.EnterContentWrapper>

        <div>
          <S.Title>폰트 선택</S.Title>
          <FontSelect onChange={handleChange} setMessageData={setMessageData} messageData={messageData} />
        </div>

        <Buttons buttonType="Primary56" buttonSize="large" type="text" isDisabled={isInputError || isSubmitting}>
          생성하기
        </Buttons>
      </S.Container>
    </Layout>
  );
};

export default Message;
