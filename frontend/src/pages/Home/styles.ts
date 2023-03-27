import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};

  display: flex;
  justify-content: center;
  align-items: center;

  main {
    width: 47.5rem;

    h1 {
      color: ${(props) => props.theme.colors.title};
      font-size: 6.4rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 8rem;
    }

    form {
      width: 100%;

      button[type='submit'] {
        width: 100%;
        height: 6.4rem;
        border: none;
        border-radius: 0.4rem;
        padding: 1.4rem;
        background-color: ${(props) => props.theme.colors.primary};

        color: ${props => props.theme.colors.buttonText};
        font-weight: 700;
        text-align: center;
        font-size: 2.2rem;
        line-height: 3.6rem;

        margin-top: 1.6rem;
      }
    }
  }
`;
