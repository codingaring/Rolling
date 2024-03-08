import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPopularRecipientList, getRecipientList } from '../../api/api';
import Layout from '../../layout/Layout';
import CardList from './components/CardList';
import Card from './components/Card';
import arrowRightIcon from '../../assets/icons/arrow_right.svg';
import arrowLeftIcon from '../../assets/icons/arrow_left.svg';
import Buttons from '../../components/Buttons';
import * as S from './ListStyled';

const List = () => {
  const [recipientList, setRecipientList] = useState([]);
  const [popularRecipientList, setPopularRecipientList] = useState([]);
  const [topSlideX, setTopSlideX] = useState(0);
  const [bottomSlideX, setBottomSlideX] = useState(0);
  const recipientListWidth = useRef();

  const topContainerRef = useRef(null);
  const bottomContainerRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [clickPoint, setClickPoint] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleLoadRecipientList = async (options) => {
    try {
      const PopularData = await getPopularRecipientList(options);
      const recentData = await getRecipientList(options);

      setPopularRecipientList(PopularData.results);
      setRecipientList(recentData.results);

      const w = PopularData.results.length - 1;
      recipientListWidth.current = -(w * 275 + w * 20) + 1160;
    } catch (error) {
      console.error(error);
    }
  };

  const handleSlideLeftClick = (e) => {
    if (e.target.id === 'top') {
      if (topSlideX < 0) {
        setTopSlideX((slideX) => slideX + 295);
      }
    } else {
      if (bottomSlideX < 0) {
        setBottomSlideX((slideX) => slideX + 295);
      }
    }
  };

  const handleSlideRightClick = (e) => {
    if (e.target.id === 'top') {
      if (recipientListWidth.current <= topSlideX) {
        setTopSlideX((slideX) => slideX - 295);
      }
    } else {
      if (recipientListWidth.current <= bottomSlideX) {
        setBottomSlideX((slideX) => slideX - 295);
      }
    }
  };

  const handleMouseDownEvent = (e, containerRef) => {
    if (window.innerWidth <= 1190) {
      setDragging(true);
      if (containerRef.current) {
        setClickPoint(e.pageX);
        setScrollLeft(containerRef.current.scrollLeft);
      }
    }
  };

  const handleMouseMoveEvent = (e, containerRef) => {
    if (!dragging) return;
    e.preventDefault();
    if (containerRef.current) {
      const walk = e.pageX - clickPoint;
      const speedCoefficient = 0.5; // 이동 속도를 조절하는 계수 (수를 조정하여 속도 조절 가능)
      containerRef.current.scrollLeft = scrollLeft - walk * speedCoefficient;
    }
  };

  useEffect(() => {
    handleLoadRecipientList();
  }, []);

  return (
    <Layout>
      <S.Container>
        <S.Content>
          <S.Title>인기 롤링 페이퍼 🔥</S.Title>
          <S.Wrapper>
            {topSlideX < 0 && (
              <S.LeftBtn onClick={handleSlideLeftClick} id="top">
                <img src={arrowLeftIcon} alt="arrowLeftIcon" id="top" />
              </S.LeftBtn>
            )}
            {topSlideX > recipientListWidth.current && (
              <S.RightBtn onClick={handleSlideRightClick} id="top">
                <img src={arrowRightIcon} alt="arrowRightIcon" id="top" />
              </S.RightBtn>
            )}
            <S.CardListContainer
              ref={topContainerRef}
              onMouseDown={(e) => handleMouseDownEvent(e, topContainerRef)}
              onMouseLeave={() => setDragging(false)}
              onMouseUp={() => setDragging(false)}
              onMouseMove={(e) => handleMouseMoveEvent(e, topContainerRef)}
            >
              <CardList slideX={topSlideX}>
                {popularRecipientList.map((card) => (
                  <Card
                    key={card.id}
                    id={card.id}
                    title={card.name}
                    backgroundColor={card.backgroundColor}
                    backgroundImageURL={card.backgroundImageURL}
                    messageCount={card.messageCount}
                    messages={card.recentMessages}
                    topReactions={card.topReactions}
                  />
                ))}
              </CardList>
            </S.CardListContainer>
          </S.Wrapper>
        </S.Content>

        <S.Content>
          <S.Title>최근에 만든 롤링 페이퍼 ⭐️️</S.Title>
          <S.Wrapper>
            {bottomSlideX < 0 && (
              <S.LeftBtn onClick={handleSlideLeftClick} id="bottom">
                <img src={arrowLeftIcon} alt="arrowLeftIcon" id="bottom" />
              </S.LeftBtn>
            )}
            {bottomSlideX > recipientListWidth.current && (
              <S.RightBtn onClick={handleSlideRightClick} id="bottom">
                <img src={arrowRightIcon} alt="arrowRightIcon" id="bottom" />
              </S.RightBtn>
            )}
            <S.CardListContainer
              ref={bottomContainerRef}
              onMouseDown={(e) => handleMouseDownEvent(e, bottomContainerRef)}
              onMouseLeave={() => setDragging(false)}
              onMouseUp={() => setDragging(false)}
              onMouseMove={(e) => handleMouseMoveEvent(e, bottomContainerRef)}
            >
              <CardList slideX={bottomSlideX}>
                {recipientList.map((card) => (
                  <Card
                    key={card.id}
                    id={card.id}
                    title={card.name}
                    backgroundColor={card.backgroundColor}
                    backgroundImageURL={card.backgroundImageURL}
                    messageCount={card.messageCount}
                    messages={card.recentMessages}
                    topReactions={card.topReactions}
                  />
                ))}
              </CardList>
            </S.CardListContainer>
          </S.Wrapper>
        </S.Content>

        <S.ButtonContainer>
          <Link to="/post">
            <Buttons buttonType="Primary56" buttonSize="small" tabletButtonSize="full">
              나도 만들어보기
            </Buttons>
          </Link>
        </S.ButtonContainer>
      </S.Container>
    </Layout>
  );
};

export default List;
