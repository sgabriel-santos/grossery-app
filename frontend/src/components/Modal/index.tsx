import React from 'react';
import ReactModal from 'react-modal';
import { useThemeMode } from '../../hooks/useThemeMode';

import { CloseIcon, Container, ReactModalStyles } from './styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title = '',
}) => {
  const { theme } = useThemeMode();
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        content: {
          ...ReactModalStyles.content,
          backgroundColor: theme.colors.card.background,
        },
        overlay: { ...ReactModalStyles.overlay },
      }}
    >
      <Container>
        <header>
          <span>{title}</span>
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </header>
        {children}
      </Container>
    </ReactModal>
  );
};
