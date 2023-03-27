import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../hooks/useSearch';
import { Input } from '../Input';

import { Container, SearchButton, SearchIcon, SearchWrapper } from './styles';

export const Header: React.FC = () => {
  const [input, setInput] = useState('');
  const { isLoading, onSearchProduct } = useSearch();
  const navigate = useNavigate();

  const searchInput = async () => {
    onSearchProduct(input);
  };

  const handleOnClickSearch = () => {
    if (!input || isLoading) return;
    searchInput();
  };

  const handleKeyDown = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter' && input && !isLoading) {
      searchInput();
    }
  };

  const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInput(target.value);
  };

  const handleOnClickTitle = () => {
    onSearchProduct('');
    navigate('/', { replace: true });
  };

  return (
    <Container>
      <h1 onClick={handleOnClickTitle}>Grocery App</h1>
      <SearchWrapper>
        <div className="input-wrapper">
          <Input
            placeholder="Digite seu produto aqui"
            onChange={handleOnChange}
            onKeyDown={handleKeyDown}
            value={input}
          />
        </div>
        <SearchButton onClick={handleOnClickSearch}>
          <SearchIcon />
        </SearchButton>
      </SearchWrapper>
    </Container>
  );
};
