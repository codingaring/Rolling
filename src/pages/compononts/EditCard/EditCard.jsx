import Modal from '../../../components/Modal';
import { ModalPortal } from '../../../components/Portal';
import { useModal } from '../../../hooks/useModal';
import COLORS from '../../../utils/colors';
import { formatDate } from '../../../utils/formatDate';
import styled from 'styled-components';
import RelationshipBadge from '../../../components/RelationshipBadge';
import Buttons from '../../../components/Buttons';
import deleteIcon from '../../../assets/icons/delete.svg';
import DeleteModal from '../../../components/deleteModal';
import { useParams } from 'react-router-dom';

const EditCard = ({ messageId, profileImageURL, sender, relationship, content, createdAt }) => {
  const { openModal, handleClose, handleOpen } = useModal();
  const { openModal: deleteOpenModal, handleClose: deleteHandleClose, handleOpen: deleteHandleOpen } = useModal();

  const { id } = useParams();

  const handleDeleteClick = () => {
    deleteHandleOpen();
  };

  return (
    <>
      <ModalPortal>
        <Modal
          openModal={openModal}
          handleClose={handleClose}
          sender={sender}
          profileImageURL={profileImageURL}
          relationship={relationship}
          content={content}
          createdAt={createdAt}
        />
      </ModalPortal>
      <ModalPortal>
        <DeleteModal
          type="message"
          messageId={messageId}
          recipientId={id}
          openModal={deleteOpenModal}
          handleClose={deleteHandleClose}
        >
          정말 메세지를 삭제하시겠어요?
        </DeleteModal>
      </ModalPortal>
      <MessageCardContainer>
        <CardHeader>
          <CardProfile profileImageURL={profileImageURL} />
          <div>
            <Sender>
              From. <b>{sender}</b>
            </Sender>
            <RelationshipBadge relationship={relationship} />
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <Buttons buttonType="Outlined40" buttonSize="xsmall" onClick={handleDeleteClick}>
              <img src={deleteIcon} alt="deleteIcon" />
            </Buttons>
          </div>
        </CardHeader>
        <CardContents>{content}</CardContents>
        <CardFooter>
          <Btn onClick={handleOpen}>더보기</Btn>
          <div>{formatDate(createdAt)}</div>
        </CardFooter>
      </MessageCardContainer>
    </>
  );
};

const MessageCardContainer = styled.div`
  height: 29rem;
  background-color: #fff;
  border-radius: 1.6rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${COLORS.gray200};
`;

const CardContents = styled.div`
  padding: 2rem 0 1rem;
  color: ${COLORS.gray600};
  font-size: 1.8rem;
  font-weight: 400;
  flex-grow: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
`;

const CardFooter = styled.div`
  color: ${COLORS.gray400};
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 1rem;
`;

const CardProfile = styled.div`
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 10rem;
  border: 0.1rem solid ${COLORS.gray200};
  background: ${COLORS.white};
  background-image: url(${(props) => props.profileImageURL});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
`;

const Sender = styled.p`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const Btn = styled.button`
  display: block;
  width: fit-content;
  margin-left: auto;
  margin-bottom: 10px;
  color: ${COLORS.gray400};
  &:hover {
    color: ${COLORS.gray500};
  }
`;

export default EditCard;