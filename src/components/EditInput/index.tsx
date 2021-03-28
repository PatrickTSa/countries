import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import {
  Container,
  EditIcon,
  Icon,
  InputContent,
  InputStyled,
  SaveIcon,
  Title,
} from './styles';

interface EditInputType {
  placeholder: string;
  value: string | number;
  width?: number;
}

const EditInput: React.FC<EditInputType> = ({ placeholder, value, width }) => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [internalValue, setInternalValue] = useState<string | number>(value);
  const [type, setType] = useState<'string' | 'number'>('string');

  useEffect(() => {
    setInternalValue(value);
    setType(Number.isNaN(Number(value)) ? 'string' : 'number');
  }, [value]);

  const RenderIcon = useCallback(() => {
    if (disabled) {
      return <EditIcon />;
    }

    return <SaveIcon />;
  }, [disabled]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value: inputValue } = e.target;
      if (type === 'string') {
        setInternalValue(inputValue);
      } else {
        const reg = /^-?\d*(\.\d*)?$/;
        if (
          (!Number.isNaN(Number(inputValue)) && reg.test(inputValue)) ||
          value === '' ||
          value === '-'
        ) {
          setInternalValue(inputValue);
        }
      }
    },
    [type]
  );

  return (
    <Container>
      <Title>{placeholder}</Title>
      <InputContent>
        <InputStyled
          placeholder={placeholder}
          value={internalValue}
          disabled={disabled}
          onChange={handleChange}
          styleWidth={width ?? 0}
        />
        <Icon onClick={() => setDisabled(!disabled)}>
          <RenderIcon />
        </Icon>
      </InputContent>
    </Container>
  );
};

export default EditInput;
