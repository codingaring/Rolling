import styled from 'styled-components';
import COLORS from '../../../utils/colors';

const { orange200, purple200, blue200, green200 } = COLORS;

const BOX_COLOR = {
  yellow: orange200,
  purple: purple200,
  blue: blue200,
  green: green200,
};

export const ColorBoxBtn = styled.div`
  width: 16.8rem;
  height: 16.8rem;
  border-radius: 1.6rem;
  background-color: ${({ bgcolor }) => BOX_COLOR[bgcolor] ?? BOX_COLOR['yellow']};
  cursor: pointer;
`;
