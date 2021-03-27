import React, { useState } from 'react';
import { Container, Icon, Input, SearchIcon } from './styles';

interface SearchInputType {
  onSearch(filter: string): void;
}

const SearchInput: React.FC<SearchInputType> = ({ onSearch }) => {
  const [filter, setFilter] = useState<string>('');
  return (
    <Container>
      <Input
        placeholder="Buscar"
        onChange={({ target }) => setFilter(target.value)}
        onPressEnter={() => onSearch(filter)}
      />
      <Icon onClick={() => onSearch(filter)}>
        <SearchIcon />
      </Icon>
    </Container>
  );
};

export default SearchInput;
