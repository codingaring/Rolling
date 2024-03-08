import checkIcon from '../../../../assets/icons/check.svg';
import * as S from './ProfileImageSelectStyled';

const profile_images = [
  'https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png',
  'https://picsum.photos/id/522/100/100',
  'https://picsum.photos/id/547/100/100',
  'https://picsum.photos/id/268/100/100',
  'https://picsum.photos/id/1082/100/100',
  'https://picsum.photos/id/571/100/100',
  'https://picsum.photos/id/494/100/100',
  'https://picsum.photos/id/859/100/100',
  'https://picsum.photos/id/437/100/100',
  'https://picsum.photos/id/1064/100/100',
];

const ProfileImageSelect = ({ onChange, selectedImgUrl }) => {
  const handleProfileImgClick = (imageUrl) => {
    onChange('profileImageURL', imageUrl);
  };

  // const handleProfileImgClick = (imageUrl) => {
  //   onChange({ type: 'SET_FIELD', field: 'profileImageURL', value: imageUrl });
  // };

  return (
    <S.Container>
      <S.PreviewContent>
        <S.Preview src={selectedImgUrl} />
      </S.PreviewContent>

      <S.ImgSelectContent>
        <S.Title>프로필 이미지를 선택해주세요!</S.Title>
        <S.ProfileCandidates>
          {profile_images.map((image, i) => (
            <S.ImgContainer key={i} onClick={() => handleProfileImgClick(image)}>
              {selectedImgUrl === image && (
                <div>
                  <S.Deem />
                  <S.CheckIcon src={checkIcon} alt="checkIcon" />
                </div>
              )}
              <img src={image} alt="profileImg" />
            </S.ImgContainer>
          ))}
        </S.ProfileCandidates>
      </S.ImgSelectContent>
    </S.Container>
  );
};

export default ProfileImageSelect;
