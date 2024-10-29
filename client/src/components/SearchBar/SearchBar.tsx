import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Search } from 'lucide-react';

interface IItem {
  uuid: string;
  categoryLabel: 'MAIN_TOP' | 'SUB_TOP' | 'BOTTOM' | 'SHOES';
  imageUrl: string;
  name: string;
  colors?: string[];
  wornNumber?: number;
}

interface ISearchBarProps {
  items: IItem[];
  onItemSelect: (item: IItem) => void;
  onClose: () => void;
  selectedItem?: IItem | null;
}

export const SearchBar: React.FC<ISearchBarProps> = ({
  items,
  onItemSelect,
  onClose,
  selectedItem,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState<IItem[]>(items);
  const searchRef = useRef<HTMLDivElement>(null);

  const handleSearch = useCallback(
    (term: string) => {
      setSearchTerm(term);
      const filtered = items.filter((item) =>
        item.name.toLowerCase().includes(term.toLowerCase()),
      );
      setFilteredItems(filtered);
    },
    [items],
  );

  const handleItemClick = useCallback(
    (item: IItem) => {
      onItemSelect(item);
      onClose(); // Ferme la barre de recherche après la sélection
    },
    [onItemSelect, onClose],
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={searchRef}
      className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg"
    >
      <div className="relative">
        <input
          type="text"
          placeholder="Rechercher"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
        <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
      </div>
      {filteredItems.length > 0 ? (
        <ul className="mt-2 max-h-60 overflow-y-auto">
          {filteredItems.map((item) => (
            <li
              key={item.uuid}
              onClick={() => handleItemClick(item)}
              className={`flex items-center p-2 cursor-pointer transition-colors duration-200 ${
                selectedItem?.uuid === item.uuid
                  ? 'bg-pink-100 border border-pink-300'
                  : 'hover:bg-gray-100'
              }`}
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-12 h-12 object-cover rounded-md mr-3"
              />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">
                  Porté {item.wornNumber} fois
                </p>
                <p className="text-sm text-gray-600">
                  {item?.colors?.join(', ')}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center py-4 text-gray-500">Aucun résultat trouvé</p>
      )}
    </div>
  );
};
