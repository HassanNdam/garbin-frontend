import { Categories, GarnmentAPI } from '@/types';
import React, { useState, useEffect } from 'react';

interface IItemCarouselProps {
  items: GarnmentAPI[];
  categoryLabel: Categories['categoryLabel'];
  selectedItem: GarnmentAPI | null;
  onItemChange?: (item: GarnmentAPI) => void;
}

export const ItemCarousel = ({
  items,
  categoryLabel,
  onItemChange,
  selectedItem,
}: IItemCarouselProps) => {
  const itemIndex = items.findIndex((item) => item.uuid === selectedItem?.uuid);

  // Si un article est sélectionné, le place comme article initial dans le carousel
  // useEffect(() => {
  //   if (selectedItem) {
  //     const selectedIndex = items.findIndex((item) => item.uuid === selectedItem.uuid);
  //     if (selectedIndex !== -1) {
  //       setCurrentIndex(selectedIndex);
  //     }
  //   }
  // }, [selectedItem, items]);

  const handlePrev = () => {
    const newIndex = itemIndex - 1;
    onItemChange?.(items.at(newIndex)!);
  };

  const handleNext = () => {
    const newIndex = (itemIndex + 1) % items.length;
    onItemChange?.(items.at(newIndex)!);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button
        onClick={handlePrev}
        aria-label="Previous Item"
        style={{ cursor: 'pointer' }}
      >
        &lt;
      </button>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '0 20px',
        }}
      >
        <img
          src={selectedItem?.imageUrl}
          alt={`${categoryLabel} item`}
          style={{ width: '100px', height: '100px', cursor: 'pointer' }}
        />
        <span>{categoryLabel}</span>
      </div>

      <button
        onClick={handleNext}
        aria-label="Next Item"
        style={{ cursor: 'pointer' }}
      >
        &gt;
      </button>
    </div>
  );
};
