import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

import GlobalStyle from '../../styles/global';
import * as S from './styled';

const Layout = () => {
  return (
    <S.LayoutWrapper>
      <GlobalStyle />
      <Header />
      <Footer />
    </S.LayoutWrapper>
  );
};

export default Layout;
