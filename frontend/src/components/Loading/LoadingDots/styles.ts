import styled, { keyframes } from 'styled-components';

const transformAnimation = keyframes`
  0% {
    transform: translateY(0rem);
  }
  25% {
    transform: translateY(-0.5rem);
  }
  68%,
  71% {
    transform: translateY(0.5rem);
  }
  99% {
    transform: translateY(0rem);
  }
`;

export const Container = styled.div`
  display: inline-block;

  span {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;

    background-color: ${(props) => props.theme.colors.shape};

    :not(:last-child) {
      margin-right: 0.5rem;
    }

    animation: ${transformAnimation} infinite;
    animation-duration: 0.8s;
    animation-timing-function: linear;

    :nth-child(1) {
      animation-delay: -6s;
    }

    :nth-child(2) {
      animation-delay: -0.2s;
    }
  }
`;
