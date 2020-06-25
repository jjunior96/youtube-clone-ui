import React from 'react';

import { Youtube } from 'styled-icons/boxicons-logos';

import * as S from './styled';

const Logo = () => (
  <S.LogoWrapper to="/">
    <S.LogoIcon>
      <Youtube />
    </S.LogoIcon>
  </S.LogoWrapper>
);

export default Logo;
