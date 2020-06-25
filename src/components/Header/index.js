import React from 'react';

import Logo from './components/start/Logo';
import Menu from './components/start/Menu';

import * as S from './styled';

const Header = () => (
  <S.HeaderWrapper>
    <S.HeaderStart>
      <Menu />
      <Logo />
      <S.HeaderTitle to="/">YouTube</S.HeaderTitle>
    </S.HeaderStart>
  </S.HeaderWrapper>
);

export default Header;
