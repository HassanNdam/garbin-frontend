import React, { useState } from 'react';
import { X } from 'lucide-react';

type ShareOutFitType = {
  isOpen: boolean;
  onClose: () => void;
  uuid?: string;
};

const ShareOutfitPopup = ({ isOpen, onClose, uuid }: ShareOutFitType) => {
  const [isCopied, setIsCopied] = useState(false);
  const link = `${location?.origin}/outfit-shared/${uuid}`;

  const shareMyOutFit = async () => {
    await navigator.clipboard.writeText(link);
    setIsCopied(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center my-auto">
      <div className="bg-white rounded-lg py-8 px-16 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>
        <h2 className="text-xl font-semibold mt-8 mb-4 text-center">
          Partager ma tenue
        </h2>
        <p className="text-black mb-4 text-center font-normal">
          Partages ce lien pour montrer ta tenue à la personne de ton choix
        </p>
        <div className="flex justify-center mt-9 mb-6">
          <label htmlFor="copyField" className="sr-only">
            Lien à copier
          </label>
          <input
            id="copyField"
            type="text"
            value={link}
            readOnly
            className="max-w-64 overflow-hidden whitespace-nowrap text-ellipsis border border-gray-300 p-1 border-none focus-visible:outline-none"
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-primary text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
            onClick={shareMyOutFit}
          >
            {isCopied ? 'lien copié' : 'Copier'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareOutfitPopup;
