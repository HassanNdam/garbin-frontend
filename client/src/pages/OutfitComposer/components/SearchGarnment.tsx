import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Categories, GarnmentAPI } from '@/types';
import {
  selectCategoryGarnments,
  useComposerDispatch,
  useComposerState,
} from '../OutfitComposer.state';
import styles from './SearhGarnment.module.css';

interface ClothingSearchProps {
  items: GarnmentAPI[];
  categoryLabel: Categories['categoryLabel'];
}

const SearchGarnment: React.FC<ClothingSearchProps> = ({
  items,
  categoryLabel,
}) => {
  const state = useComposerState();
  const selectedGarnment = selectCategoryGarnments(categoryLabel)(state);
  const dispatch = useComposerDispatch();

  console.log('items', items);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState<GarnmentAPI[]>(
    items ?? [],
  );

  useEffect(() => {
    console.log('in useEffect', items);
    const filtered = items?.filter(
      (item) =>
        item?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item?.colors
          .map((color) => color.toLowerCase())
          .includes(searchTerm.toLowerCase()),
    );

    setFilteredItems(filtered);
  }, [searchTerm, items]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleItemClick = (item: GarnmentAPI) => {
    dispatch?.({
      type: 'SELECT_GARNMENT',
      payload: { categoryLabel, garnment: item },
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-4">
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Rechercher"
          className="w-full py-2 pl-4 pr-10 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300"
          value={searchTerm}
          onChange={handleSearch}
        />
        <Search
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={20}
        />
      </div>

      <div
        className={`space-y-2 h-full max-h-[500px] overflow-y-scroll ${styles.scrol}`}
      >
        {filteredItems.length == 0 ? (
          <p></p>
        ) : (
          filteredItems?.map((item) => (
            <div
              key={item.uuid}
              className={`flex items-center p-2 rounded-lg cursor-pointer transition-colors ${
                selectedGarnment?.uuid === item.uuid
                  ? 'bg-pink-100 border border-pink-300'
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => handleItemClick(item)}
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md mr-4"
              />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">
                  {item.colors.join(', ')}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchGarnment;
