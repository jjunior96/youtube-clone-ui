import { Link } from 'gatsby';
import styled from 'styled-components';

export const HeaderWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  /* background-color: #262626; */
  background-color: rgba(33, 33, 33, 0.98);
  /* opacity: 0.9; */
  padding: 0 16px;
  height: 56px;
`;

export const HeaderStart = styled.nav`
  display: flex;
  align-items: center;
`;

export const HeaderTitle = styled(Link)`
  color: #ffffff;
  font-family: Roboto, sans-serif;
  font-weight: bolder;
  line-height: 1.4;
  font-size: 18px;
  height: 24px;
  text-decoration: none;
`;

export const HeaderCenter = styled.nav`
  display: flex;
  align-items: center;
`;
