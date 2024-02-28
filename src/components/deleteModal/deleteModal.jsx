import styled from 'styled-components';
import COLORS from '../../utils/colors';
import Buttons from '../Buttons';
import FONTS from '../../utils/Fonts';

const DeleteModal = ({ openModal, handleClose, children }) => {
  if (!openModal) {
    return <></>;
  }

  const handleDeemClick = () => {
    handleClose();
  };

  return (
    <>
      <Deem onClick={handleDeemClick} />
      <Container>
        {children}
        <div>
          <Buttons buttonType="Primary40" buttonSize="xsmall">
            삭제
          </Buttons>
        </div>
      </Container>
    </>
  );
};

const Deem = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9998;
  background: rgba(0, 0, 0, 0.6);
`;

const Container = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 16px;
  background: ${COLORS.white};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  padding: 40px;
  box-sizing: border-box;
  ${FONTS.font16_Regular}

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);

  @media (max-width: 630px) {
    width: 400px;
  }
`;

export default DeleteModal;
