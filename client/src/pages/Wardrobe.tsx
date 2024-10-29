import { getGarmentsAPI } from '../lib/axios';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import NoGarments from '@/features/garments/components/NoGarments';
import { GarnmentAPI } from '@/types';
import { useAuth } from '@/context/useAuth';
import Toolbar from '@/features/garments/components/Toolbar';
import Garment from '@/features/garments/components/Garment';
import AddGarmentModal from '@/features/garments/components/AddGarmentModal';

const Wardrobe = () => {
  const [garments, setGarments] = useState<GarnmentAPI[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { isReady } = useAuth();

  useEffect(() => {
    const getGarments = async () => {
      try {
        const fetchedGarments = await getGarmentsAPI();
        setGarments(fetchedGarments);
      } finally {
        setIsLoading(false); // Stop loading in any case
      }
    };

    if (isReady) {
      getGarments();
    }
  }, [isReady]);

  // Conditional rendering based on loading, error, and garments data
  if (isLoading) return <Loader isLoading={isLoading} />;
  if (!garments || garments.length === 0)
    return <NoGarments setGarments={setGarments} />;

  return (
    <div className="text-center p-10 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-10 flex gap-3">
        Ma garde-robe ({garments.length}){' '}
        <AddGarmentModal setGarments={setGarments} />
      </h2>
      <div className="container">
        <Toolbar />
        <div className="grid grid-cols-5 gap-3">
          {garments.map((garment) => {
            return (
              <Garment
                key={garment.uuid}
                garment={garment}
                setGarments={setGarments}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Wardrobe;
