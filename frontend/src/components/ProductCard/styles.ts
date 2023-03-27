import { darken } from 'polished';
import { MdLocationPin } from 'react-icons/md';
import styled from 'styled-components';

export const Container = styled.section`
  /* width: 24rem; */
  width: 100%;
  height: 28rem;
  border-radius: 1.6rem;
  background-color: ${(props) => props.theme.colors.card.background};

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 0.8rem;
  padding-bottom: 3rem;

  .title-wrapper {
    max-height: 4.1rem;
    padding: 0rem 2rem;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    h2 {
      font-size: 2rem;
      font-weight: 400;
      line-height: 2rem;
      text-align: center;
      color: ${(props) => props.theme.colors.card.title};
    }
  }

  h1 {
    font-size: 4rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.title};
  }

  .market-wrapper {
    max-height: 3.3rem;
    padding: 0rem 2rem;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    h3 {
      font-size: 1.6rem;
      font-weight: 400;
      color: ${(props) => props.theme.colors.card.market};
      line-height: 1.6rem;

      text-align: center;
    }
  }
`;

export const MapWrapper = styled.button`
  border: none;
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 50%;

  background-color: ${(props) => props.theme.colors.primary};

  position: absolute;
  bottom: -3.2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.4s;

  :hover {
    background-color: ${(props) => darken(0.15, props.theme.colors.primary)};
    cursor: pointer;
  }
  :hover svg {
    color: ${(props) => darken(0.15, props.theme.colors.shape)};
  }
`;

export const PinIcon = styled(MdLocationPin)`
  transition: color 0.4s;
  color: ${(props) => props.theme.colors.shape};
  font-size: 4rem;
`;

export const MapContainer = styled.div``;
