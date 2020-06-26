import React from 'react';

import Logo from './components/start/Logo';
import Menu from './components/start/Menu';
import Search from './components/center/Search';

import * as S from './styled';

const Header = () => (
  <S.HeaderWrapper>
    <S.HeaderStart>
      <Menu />
      <Logo />
      <S.HeaderTitle to="/">YouTube</S.HeaderTitle>
    </S.HeaderStart>
    <S.HeaderCenter>
      <Search />
    </S.HeaderCenter>
  </S.HeaderWrapper>
);

export default Header;
