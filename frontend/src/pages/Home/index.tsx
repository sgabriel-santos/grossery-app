import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/Input';
import { LoadingDots } from '../../components/Loading/LoadingDots';
import { useSearch } from '../../hooks/useSearch';

import { Container } from './styles';

export const Home: React.FC = () => {
  const [input, setInput] = useState('');
  const { isLoading, onSearchProduct, data } = useSearch();
  const navigate = useNavigate();

  const searchInput = async () => {
    onSearchProduct(input);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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

  useEffect(() => {
    if (data) {
      navigate('/search');
    }
  }, [data]);

  return (
    <Container>
      <main>
        <h1>Grocery App</h1>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Digite seu produto aqui"
            onChange={handleOnChange}
            onKeyDown={handleKeyDown}
            value={input}
          />
          <button type="submit">
            {isLoading ? <LoadingDots /> : <span>Pesquisar</span>}
          </button>
        </form>
      </main>
    </Container>
  );
};
