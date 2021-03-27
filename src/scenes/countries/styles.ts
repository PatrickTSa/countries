import styled from 'styled-components';
import { Layout } from 'antd';

const { Header: HeaderDefault } = Layout;

export const Container = styled.div``;

export const LayoutStyled = styled(Layout)`
  background-color: transparent;
  height: 100vh;
  margin: auto;
  width: 60%;

  @media (max-width: 1800px) {
    width: 80%;
  }

  @media (max-width: 1400px) {
    width: 100%;
  }
`;

export const ContentStyled = styled(Layout.Content)`
  background-color: transparent;
  padding-top: 75px;
`;

export const Header = styled(HeaderDefault)`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 60%;
  z-index: 999;

  @media (max-width: 1800px) {
    width: 80%;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
  }

  @media (max-width: 1400px) {
    width: 100%;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
  }
`;
