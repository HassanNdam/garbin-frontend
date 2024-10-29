import React from 'react';
import picSelectCategory from '../../assets/images/invitationSelectionOut.png';
const NoGarmentSelected = () => {
  return (
    <div className="text-center max-w-md mx-auto">
      <div>
        <img src={picSelectCategory} alt={picSelectCategory} />
      </div>
      <p className="text-gray-500 text-lg">
        Sélectionne une
        <br />
        catégorie pour ouvrir
        <br />
        ta garde-robe
      </p>
    </div>
  );
};

export default NoGarmentSelected;
