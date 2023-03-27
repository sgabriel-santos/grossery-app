import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme.colors.background};
  padding: 3.2rem 12.8rem;
  padding-bottom: 0rem;
`;
