import { GetMyOutfits } from '@/lib/axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { OutFit } from '@/types';
import OutfitCard from '@/components/OutfitCard/OutfitCard';
import { PlusIcon } from 'lucide-react';

const ShowAllOutFit: React.FC = () => {
  const [totalItems, setTotalItems] = useState(0);
  const [outfits, setOutfits] = useState<OutFit[]>([]);
  const [page, setPage] = useState(1);
  //TODO:DOnner la possibilité à l'utilisateur de choisir le nombre d'item par page qu'il reçoit de l'api,le max à 5
  const itemsPerPage = 5;

  const userOutFits = async (page: number, itemsPerPage: number) => {
    const data = await GetMyOutfits(page, itemsPerPage);
    setOutfits(data?.outfits);
    setTotalItems(data?.totalItems);
  };
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    userOutFits(page, itemsPerPage);
  }, [page]);

  return (
    <div className="container mx-auto px-3 py-8">
      <div className="flex justify-center items-center mb-4">
        <h1 className="text-2xl font-bold mr-10">Mes tenues ({totalItems})</h1>
        <Link
          to={'/out-fit-compositor'}
          className="px-4 py-2 rounded bg-primary text-white text-lg font-semibold flex items-center"
        >
          <PlusIcon size={21} className="font-bold mr-2" />
          Créer
        </Link>
      </div>
      <div className="flex flex-wrap justify-center  gap-10 mt-10">
        {outfits?.map((outfit, index) => (
          <OutfitCard key={index} {...outfit} />
        ))}
      </div>
      <div className="pagination-controls mt-20 flex justify-center items-center gap-3">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className={`px-4 py-2 rounded text-lg font-semibold text-white ${
            page === 1
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-primary cursor-pointer'
          }`}
        >
          Précedent
        </button>
        <span className="text-center">
          Page {page} sur {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className={`px-4 py-2 rounded text-lg font-semibold text-white ${
            page === totalPages
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-primary cursor-pointer'
          }`}
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default ShowAllOutFit;
