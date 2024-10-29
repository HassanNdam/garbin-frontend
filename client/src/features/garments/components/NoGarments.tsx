import { GarnmentAPI } from '@/types';
import NoGarmentsImage from '../assets/no-garments.png';
import AddGarmentModal from './AddGarmentModal';

interface NoGarmentsProps {
  setGarments: (garments: GarnmentAPI[]) => void;
}

const NoGarments = ({ setGarments }: NoGarmentsProps) => {
  return (
    <div className="flex justify-center items-center flex-col mt-28 text-center">
      <h1 className="text-3xl font-medium mx-5">Garde-robe vide...</h1>
      <div className="h-52 my-10">
        <img className="w-full h-full" src={NoGarmentsImage} alt="" />
      </div>
      <div className="container w-50">
        <p className="font-medium text-wrap mx-5">
          Ajoutes une photo de vêtement dès maintenant pour commencer
          l’expérience !
        </p>
      </div>
      <div className="my-10">
        <AddGarmentModal setGarments={setGarments} />
      </div>
    </div>
  );
};

export default NoGarments;
