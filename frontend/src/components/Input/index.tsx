import React from 'react';

import { Container } from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ ...rest }) => {
  return <Container {...rest} />;
};
