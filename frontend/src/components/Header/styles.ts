import { MdSearch } from 'react-icons/md';
import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 6.4rem;

  margin-bottom: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 6.4rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.title};

    :hover {
      cursor: pointer;
    }
  }
`;

export const SearchWrapper = styled.div`
  height: 6.4rem;
  display: flex;

  .input-wrapper {
    width: 36rem;
    margin-right: 1.6rem;
  }
`;

export const SearchButton = styled.button`
  height: 6.4rem;
  width: 6.4rem;
  border-radius: 0.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const SearchIcon = styled(MdSearch)`
  color: ${(props) => props.theme.colors.shape};
  font-size: 4.2rem;
`;
