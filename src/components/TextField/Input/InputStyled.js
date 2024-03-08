import styled from 'styled-components';
import FONTS from '../../../styles/fonts';
import COLORS from '../../../styles/colors';

export const Input = styled.input`
  width: ${({ width }) => width || '32rem'};
  padding: 1.2rem 1.6rem;
  background-color: ${COLORS.white};
  ${FONTS.font16_Regular}
  color: ${COLORS.gray500};
  border-radius: 0.8rem;
  border: 0.1rem solid ${({ $isError }) => ($isError ? COLORS.error : COLORS.gray300)};

  &:focus {
    outline: 0.2rem solid ${({ $isError }) => ($isError ? COLORS.error : COLORS.gray500)};
  }

  &::placeholder {
    ${FONTS.font16_Regular}
    color: ${COLORS.gray300};
  }

  &:disabled {
    border: 1px solid ${COLORS.gray300};
    background-color: ${COLORS.gray100};

    &::placeholder {
      color: ${COLORS.gray400};
    }
  }

  @media screen and (max-width: 1199px) {
    width: 100%;
  }
`;
