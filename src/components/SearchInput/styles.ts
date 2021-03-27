import styled from 'styled-components';
import { Input as InputDefault } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export const Container = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  height: 40px;
  width: 100%;
`;

export const Input = styled(InputDefault)`
  border-radius: 25px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding-left: 25px;
  width: 50%;

  @media (max-width: 1400px) {
    width: 80%;
  }
`;

export const Icon = styled.div`
  align-items: center;
  background-color: ${({ theme: { palette } }) => palette.white};
  border-bottom-right-radius: 25px;
  border-top-right-radius: 25px;
  border: 1px solid ${({ theme: { palette } }) => palette.alto};
  border-left-width: 0;
  transition: 0.5s;

  display: flex;
  justify-content: center;
  width: 60px;

  &:hover {
    cursor: pointer;
    border: 1px solid ${({ theme: { palette } }) => palette.dodgerBlue};
    border-left-width: 0;
  }
`;

export const SearchIcon = styled(SearchOutlined)`
  font-size: 22px;
  transition: 0.5s;

  ${Icon}:hover & {
    color: ${({ theme: { palette } }) => palette.dodgerBlue};
  }
`;
