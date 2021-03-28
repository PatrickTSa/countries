import { Button, Layout, Col as ColAntd } from 'antd';
import styled from 'styled-components';

export const LayoutStyled = styled(Layout)`
  background-color: ${({ theme: { palette } }) => palette.transparent};
  height: 100vh;
  margin: auto;
  width: 40%;

  @media (max-width: 1300px) {
    width: 60%;
  }

  @media (max-width: 850px) {
    width: 80%;
  }
`;

export const ContentStyled = styled(Layout.Content)`
  background-color: ${({ theme: { palette } }) => palette.transparent};
  padding-top: 75px;
`;

export const Container = styled.div`
  padding: 25px;
  border-radius: 5px;

  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  -webkit-backdrop-filter: blur(2.5px);
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const ResetButton = styled(Button).attrs(() => ({
  type: 'primary',
}))`
  height: 40px;
  margin-top: 22px;
  width: 214px;
`;

// eslint-disable-next-line no-undef
export const Flag = styled.div<{ source: string }>`
  background-image: url(${({ source }) => source});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 5px;
  height: 150px;
  width: 250px;
`;

export const FlagContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

export const Col = styled(ColAntd).attrs(() => ({
  xs: 24,
  sm: 24,
  md: 12,
}))`
  align-items: center;
  display: flex;
  justify-content: center;
`;
