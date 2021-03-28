import styled from 'styled-components';
import { Layout } from 'antd';

const { Header: HeaderDefault } = Layout;

export const Container = styled.div``;

export const LayoutStyled = styled(Layout)`
  background-color: ${({ theme: { palette } }) => palette.transparent};
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
  background-color: ${({ theme: { palette } }) => palette.transparent};
  padding-top: 75px;
`;

export const Header = styled(HeaderDefault)`
  align-items: center;
  background: ${({ theme: { palette } }) => palette.transparent};
  display: flex;
  justify-content: center;
  position: fixed;
  width: 60%;
  z-index: 999;
  padding: 0 10px;

  @media (max-width: 1800px) {
    width: 80%;
  }

  @media (max-width: 1400px) {
    width: 100%;
  }
`;

export const HeaderContent = styled.div`
  align-items: center;
  background: ${({ theme: { palette } }) => palette.transparent};
  display: flex;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  -webkit-backdrop-filter: blur(2.5px);
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  width: 100%;
  height: 100%;
`;
