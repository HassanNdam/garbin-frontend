import React from 'react';

interface ISaveButtonProps {
  onClick: () => void; // Callback déclenché lors du clic sur le bouton
  disabled?: boolean; // Optionnel, pour désactiver le bouton si nécessaire
}

export const SaveOutFitButton = ({
  onClick,
  disabled = false,
}: ISaveButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: disabled ? '#f0f0f0' : '#ff6961',
        color: disabled ? '#888' : '#fff',
        border: 'none',
        padding: '10px 20px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        borderRadius: '5px',
        fontSize: '16px',
      }}
    >
      Enregistrer
    </button>
  );
};
