import React from 'react';

interface IErrorMessageProps {
  message: string; // Le message d'erreur à afficher
}

export const ErrorMessage = ({ message }: IErrorMessageProps) => {
  if (!message) return null; // Ne rien rendre si le message est vide

  return (
    <div
      role="alert"
      style={{
        color: '#ff4d4f',
        backgroundColor: '#fff1f0',
        padding: '10px',
        borderRadius: '5px',
        marginTop: '10px',
        fontSize: '14px',
      }}
    >
      {message}
    </div>
  );
};
