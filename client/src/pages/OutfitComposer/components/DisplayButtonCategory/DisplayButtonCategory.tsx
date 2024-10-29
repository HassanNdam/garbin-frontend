import React, { useState, useEffect } from 'react';
import { ItemCarousel } from '../ItemCarousel/ItemCarousel';
import {
  Categories,
  ClothingItem,
  CategoryLabelType,
  GarnmentAPI,
} from '@/types';
import {
  selectCategoryGarnments,
  useComposerDispatch,
  useComposerState,
} from '../../OutfitComposer.state';

type ICategoryButtonProps = {
  label: string;
  categoryLabel: CategoryLabelType;
  items: GarnmentAPI[];
  selectedItem?: GarnmentAPI;
};

export const DisplayButtonCategory = ({
  label,
  items,
  categoryLabel,
}: ICategoryButtonProps) => {
  const state = useComposerState();
  const selectedGarnment = selectCategoryGarnments(categoryLabel)(state);
  const dispatch = useComposerDispatch();

  console.log('my items', items);
  // Fermer le carousel & revenir au bouton & enlever l'élément selectionné dans la catégorie
  const handleCloseCarousel = () => {
    dispatch?.({ type: 'DESELECT_GARNMENT', payload: { categoryLabel } });
  };

  const handleOpenCarouselClick = () => {
    dispatch?.({
      type: 'SELECT_GARNMENT',
      payload: { categoryLabel, garnment: items[0] },
    });
  };

  const handleItemChange = (item: GarnmentAPI) => {
    dispatch?.({
      type: 'SELECT_GARNMENT',
      payload: { categoryLabel, garnment: item },
    });
  };

  return (
    <div>
      {selectedGarnment === undefined ? (
        // TODO: Séparer en deux composant
        <button
          type="button"
          onClick={() => handleOpenCarouselClick()}
          className="border bg-white min-w-[150px] min-h-[150px]"
        >
          {label}
        </button>
      ) : (
        <div style={{ position: 'relative' }}>
          {/* Bouton pour fermer le carousel */}
          <button
            onClick={handleCloseCarousel}
            style={{
              position: 'absolute',
              top: '0',
              right: '0',
              background: 'transparent',
              border: 'none',
              fontSize: '20px',
              cursor: 'pointer',
            }}
            aria-label="Fermer le carousel"
          >
            &times;
          </button>

          {/* Carousel qui permet la navigation et la sélection automatique */}
          <ItemCarousel
            items={items}
            categoryLabel={categoryLabel}
            selectedItem={selectedGarnment}
            onItemChange={handleItemChange}
          />
        </div>
      )}
    </div>
  );
};
