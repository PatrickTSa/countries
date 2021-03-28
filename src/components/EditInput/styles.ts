import { EditOutlined, SaveOutlined } from '@ant-design/icons';
import { Typography, Input } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

export const Title = styled(Typography.Text)`
  color: ${({ theme: { palette } }) => palette.scorpion};
  font-family: ${({ theme: { font } }) => font.Regular};
  font-size: 14px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.div`
  align-items: center;
  background-color: ${({ theme: { palette } }) => palette.white};
  border-radius: 2px;
  border: 1px solid ${({ theme: { palette } }) => palette.alto};
  border-left-width: 0;
  display: flex;
  height: 40px;
  justify-content: center;
  width: 40px;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    border: 1px solid ${({ theme: { palette } }) => palette.dodgerBlue};
  }
`;

export const EditIcon = styled(EditOutlined)`
  font-size: 16px;
  transition: 0.5s;

  ${Icon}:hover & {
    color: ${({ theme: { palette } }) => palette.dodgerBlue};
  }
`;

export const SaveIcon = styled(SaveOutlined)`
  font-size: 16px;
  transition: 0.5s;

  ${Icon}:hover & {
    color: ${({ theme: { palette } }) => palette.dodgerBlue};
  }
`;

// eslint-disable-next-line no-undef
export const InputStyled = styled(Input)<{ styleWidth: number }>`
  height: 40px;
  width: auto;
`;
