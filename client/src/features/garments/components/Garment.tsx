import { GarnmentAPI } from '@/types';
import styles from '../assets/garments.module.css';
import EditGarmentModal from './EditGarmentModal';

interface GarmentProps {
  garment: GarnmentAPI;
  setGarments: (garments: GarnmentAPI[]) => void;
}

const Garment = ({ garment, setGarments }: GarmentProps) => {
  return (
    <EditGarmentModal garment={garment} setGarments={setGarments}>
      <div key={garment.uuid} className={styles.garmentCard}>
        <div className="overflow-hidden flex justify-center mx-auto ">
          <img
            src={garment.imageUrl}
            alt={garment.name}
            className=""
            style={{ height: '14rem' }}
          />
        </div>
        <div
          className="title pt-3 bg-red-0 flex flex-col justify-center gap-1"
          style={{ height: '5.5rem' }}
        >
          <p>{garment.name}</p>
          <small>{garment.brand}</small>
        </div>
      </div>
    </EditGarmentModal>
  );
};

export default Garment;
