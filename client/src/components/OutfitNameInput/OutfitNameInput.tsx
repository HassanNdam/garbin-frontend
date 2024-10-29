import React, { ChangeEvent } from 'react';

interface IOutfitNameInputProps {
  value: string; // Le nom actuel de la tenue
  onChange: (newName: string) => void; // Callback pour gérer la mise à jour du nom
}

export const OutfitNameInput = ({ value, onChange }: IOutfitNameInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value); // Appelle la fonction onChange avec la nouvelle valeur
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Nom de la tenue"
      style={{
        padding: '10px',
        fontSize: '16px',
        width: '100%',
        borderRadius: '5px',
        border: '1px solid #ccc',
        marginBottom: '10px',
      }}
    />
  );
};
