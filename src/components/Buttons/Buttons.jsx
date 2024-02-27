import { Outlined36, Outlined40, Outlined56, Primary40, Primary56, Secondary40 } from './ButtonsStyled';

export const Buttons = ({ children, buttonType, buttonSize }) => {
  switch (buttonType) {
    case 'Primary56':
      return <Primary56 buttonSize={buttonSize}>{children}</Primary56>;
    case 'Primary40':
      return <Primary40 buttonSize={buttonSize}>{children}</Primary40>;
    case 'Secondary40':
      return <Secondary40 buttonSize={buttonSize}>{children}</Secondary40>;
    case 'Outlined56':
      return <Outlined56 buttonSize={buttonSize}>{children}</Outlined56>;
    case 'Outlined40':
      return <Outlined40 buttonSize={buttonSize}>{children}</Outlined40>;
    case 'Outlined36':
      return <Outlined36 buttonSize={buttonSize}>{children}</Outlined36>;
  }
};
