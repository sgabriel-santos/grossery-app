import { transparentize } from 'polished';
import { MdClose } from 'react-icons/md';
import ReactModal from 'react-modal';
import styled from 'styled-components';

export const Container = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    span {
      text-transform: capitalize;
      font-weight: 500;
      font-size: 2rem;
      color: ${(props) => props.theme.colors.card.market};
    }

    button {
      outline: none;
      border: none;
      background-color: transparent;
    }
  }
`;

export const CloseIcon = styled(MdClose)`
  color: ${(props) => props.theme.colors.card.market};
  font-size: 2rem;
`;

export const ReactModalStyles: ReactModal.Styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    padding: '1rem',
    maxWidth: '80%',
    maxHeight: '70%',
    overflow: 'auto',
  },
  overlay: {
    background: transparentize(0.3, '#000'),
  },
};
