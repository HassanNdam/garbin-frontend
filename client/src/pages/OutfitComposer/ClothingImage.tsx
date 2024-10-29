import { CategoryLabelEnum, ClothingItem } from '@/types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';

type ClothingImageProps = {
  onRemove?: () => void;
  items: any;
  key: string;
  clothingImageCategory: CategoryLabelEnum | null;
};

const ClothingImage: React.FC<ClothingImageProps> = ({
  items,
  key,
  clothingImageCategory,
}) => {
  let item: ClothingItem | undefined = undefined;

  if (items.length > 0) {
    item = items[0];
  }

  const imageDisplayed =
    // clothingImageCategory === null ? <button>Click here</button> :
    clothingImageCategory !== item?.categoryLabel ? (
      <img src={''} alt={''} className="w-full h-24 object-contain" />
    ) : (
      <img
        src={item ? item.imageUrl : ''}
        alt={item ? item.categoryLabel : ''}
        className="w-full h-24 object-contain"
      />
    );

  return (
    <div
      key={key}
      className="relative bg-white rounded-lg shadow-md overflow-hidden"
    >
      {imageDisplayed}
      <div className="absolute left-1 top-1/2 -translate-y-1/2">
        <ChevronLeft size={20} className="text-gray-500" />
      </div>
      <div className="absolute right-1 top-1/2 -translate-y-1/2">
        <ChevronRight size={20} className="text-gray-500" />
      </div>
    </div>
  );
};
export default ClothingImage;
