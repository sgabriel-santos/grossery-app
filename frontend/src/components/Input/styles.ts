import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.input`
  width: 100%;
  height: 6.4rem;
  border: none;

  border-radius: 0.4rem;
  padding: 1.6rem;
  font-size: 2.2rem;
  font-weight: 500;

  background-color: ${(props) => props.theme.colors.shape};
  color: ${(props) => props.theme.colors.inputText};

  ::placeholder {
    color: ${(props) => transparentize(0.3, props.theme.colors.inputText)};
  }
`;
