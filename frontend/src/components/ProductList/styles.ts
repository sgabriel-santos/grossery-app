import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 1400px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 8rem;
  }

  @media (max-width: 1350px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 4rem;
  }

  @media (max-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 8rem;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 4rem;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 8rem;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-column-gap: 8rem;
  }

  width: 100%;
  height: 100%;
  overflow-y: auto;

  padding: 0rem 1rem;

  display: grid;
  grid-template-rows: 30rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 8rem;
  grid-row-gap: 4rem;

  transition: grid-column-gap 0.2s;
`;
