import { OutFit } from '@/types';
import ShareOutfitPopup from '../ShareOutFit/ShareOutFit';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Share2Icon } from 'lucide-react';
type OutFitCardProps = {
  isShared?: boolean;
} & OutFit;
const OutfitCard: React.FC<OutFitCardProps> = ({
  name,
  uuid,
  garments,
  isShared = false,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="bg-white p-5 shadow rounded-md  min-w-[320px] w-[320px] max-w-xs">
      <div className="grid grid-cols-2 gap-1 mb-1">
        <div className="col-span-1 aspect-square overflow-hidden">
          {garments?.mainTop?.imageUrl && (
            <img
              src={garments?.mainTop?.imageUrl}
              alt={`${garments?.mainTop?.name}`}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="col-span-1 aspect-square overflow-hidden">
          {garments?.subTop?.imageUrl && (
            <img
              src={garments?.subTop?.imageUrl}
              alt={`${garments?.subTop?.name}`}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="col-span-1 aspect-square overflow-hidden">
          {garments?.bottom?.imageUrl && (
            <img
              src={garments?.bottom?.imageUrl}
              alt={`${garments?.bottom?.name}`}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="col-span-1 aspect-square overflow-hidden">
          <img
            src={garments?.shoes?.imageUrl}
            alt={`${garments?.shoes?.name}`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex items-center mt-6">
        <div className="w-1/3">
          <p className={`text-xs font-bold ${!isShared ? 'text-center' : ''}`}>
            {name}
          </p>
        </div>
        {!isShared && (
          <div className="flex space-x-1 w-2/3 justify-end">
            <button
              className="rounded bg-secondary text-white text-lg font-semibold py-1 px-3"
              onClick={() => setIsPopupOpen(true)}
            >
              <span className="sr-only">Partager</span>
              <Share2Icon />
            </button>
            <Link
              to={`/my-outfit-plan/${uuid}`}
              className="rounded bg-secondary text-white text-lg font-semibold px-7 py-1"
            >
              Voir
            </Link>
          </div>
        )}
      </div>
      <div>
        <ShareOutfitPopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          uuid={uuid}
        />
      </div>
    </div>
  );
};
export default OutfitCard;
