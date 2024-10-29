import { useState } from 'react';
import style from '../assets/garments.module.css';
import { Input } from '@/components/ui/input';

const Toolbar = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Tous');

  const filters = ['Tous', 'Hauts', 'Bas', 'Chaussures'];

  return (
    <div className="toolbar bg-white p-8 rounded-xl mb-2">
      <div className="flex justify-between">
        <div className="filters flex gap-4">
          {filters.map((filter) => (
            <div
              key={filter}
              className={`${style.filter} ${activeFilter === filter ? style.active : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              <p>{filter}</p>
            </div>
          ))}
        </div>

        <div className="searchbar w-60">
          <Input type="search" placeholder="Rechercher" />
        </div>
      </div>
    </div>
  );
};
export default Toolbar;
