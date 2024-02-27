import styled from 'styled-components';
import COLORS from '../utils/colors';
import { Link } from 'react-router-dom';
import logoImg from '../assets/rolling_Logo.svg';
import Layout from '../layout/Layout';
import { Buttons } from './Buttons';

const Navbar = () => {
  return (
    <Nav>
      <Layout>
        <Container>
          <Ul>
            <li>
              <Link to="/">
                <h1>
                  <img src={logoImg} alt="logoImg" />
                </h1>
              </Link>
            </li>
            <li>
              <Buttons buttonType="Outlined40" buttonSize="small">
                롤링 페이퍼 만들기
              </Buttons>
            </li>
          </Ul>
        </Container>
      </Layout>
    </Nav>
  );
};

const Nav = styled.nav`
  border-bottom: 1px solid ${COLORS.gray200};
  position: relative;
  z-index: 10;
  background-color: ${COLORS.white};
`;

const Container = styled.div`
  height: 64px;
`;

const Ul = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Navbar;
