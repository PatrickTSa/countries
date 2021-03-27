import styled from 'styled-components';
import { Typography } from 'antd';

export const Container = styled.div`
  align-items: center;
  display: flex;
  padding: 15px;
  margin: 10px;
  flex-direction: column;
  transition: 0.5s;

  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  height: 230px;

  &:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 770px) {
    height: auto;
  }
`;

// eslint-disable-next-line no-undef
export const Flag = styled.div<{ url: string }>`
  background-image: url(${({ url }) => url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  height: 125px;
  width: 200px;

  @media (max-width: 767px) {
    height: 250px;
    width: 400px;
  }

  @media (max-width: 480px) {
    height: 150px;
    width: 200px;
  }
`;

export const Title = styled(Typography.Text)`
  font-family: ${({ theme: { font } }) => font.Medium};
  font-size: 22px;
  margin-top: 15px;
  text-align: center;
`;

export const Capital = styled(Typography.Text)`
  font-family: ${({ theme: { font } }) => font.Regular};
  font-size: 16px;
  text-align: center;
`;
