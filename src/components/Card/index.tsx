import React, { useCallback } from 'react';
import { useHistory } from 'react-router';
import { Country } from '~/domain/country';
import { Capital, Container, Flag, Title } from './styles';

interface CardType {
  data: Country;
}

const Card: React.FC<CardType> = ({
  data: {
    numericCode,
    nativeName,
    capital,
    flag: { svgFile },
  },
}) => {
  const history = useHistory();

  const handleClick = useCallback(
    () => history.push(`/detail/${numericCode}`),
    [numericCode, history]
  );

  return (
    <Container onClick={handleClick}>
      <Flag url={svgFile} />
      <Title>{nativeName}</Title>
      <Capital>{capital}</Capital>
    </Container>
  );
};

export default Card;
