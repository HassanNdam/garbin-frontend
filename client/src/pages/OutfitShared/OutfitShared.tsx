import OutfitCard from '../../components/OutfitCard/OutfitCard';
import { userOutfitShared } from '@/lib/axios';
import { OutFit } from '@/types';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// TODO: Déplacer ce type dans le fichier type
type outfitShared = {
  creator: {
    username: string;
  };
} & OutFit;
const OutfitShared = () => {
  const { id } = useParams();
  const [outfitShared, setSharedOutfit] = useState<outfitShared>();
  console.log(id);
  const getOutfitShared = async (uuid: string) => {
    const response = await userOutfitShared(uuid);
    setSharedOutfit(response?.data);
  };

  useEffect(() => {
    if (id) {
      getOutfitShared(id);
    }
  }, []);
  console.log({ outfitShared });
  return (
    <div className="grid place-items-center h-screen">
      <div>
        <OutfitCard
          name={outfitShared?.name as string}
          // @ts-ignore: Unreachable code error
          //TODO : revoir le typage de garment
          garments={outfitShared?.garments}
          isShared
        />
        <p className="mt-7">
          Cette magnifique tenue a été créée par{' '}
          <strong>{outfitShared?.creator?.username}</strong>
        </p>
        <span className="italic font-extralight text-primary">
          n'hésitez pas à lui donner votre avis et à en faire de même
        </span>
      </div>
    </div>
  );
};

export default OutfitShared;
