import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Homepage from '../../assets/images/homepagebg.png';

const slider = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat w-"
      style={{
        backgroundImage: `url(${Homepage})`,
      }}
    >
      <div className="py-24 sm:py-32 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p
              className="mt-2 text-3xl font-semibold tracking-tight sm:text-5xl text-white"
              style={{ lineHeight: '1.5' }}
            >
              Simplifiez votre garde-robe dès maintenant
            </p>
            <p className="mt-8 text-2xl text-white mb-10">
              Créez des tenues uniques et partagez les avec vos amis
            </p>
          </div>
          <div className="flex justify-center">
            <Button className="px-20 py-7 text-2xl  font-normal" type="submit">
              <Link to={'/login'}>
                <small> Commencer </small>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default slider;
