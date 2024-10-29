import React from 'react';
import { Link} from 'react-router-dom'; // Assurez-vous d'importer Link si vous utilisez React Router

const Footer = () => {
  return (
    <footer className="bg-light text-dark mb-10">
      <div className="container mx-auto max-w-8xl p-4 flex justify-between items-center">
        <div className="flex-1">
          <p className="font-bold text-lg">Garbin 2024</p>
        </div>
        <div className="flex-1 text-right">
          <p className="font-bold text-lg">
            <Link to="/CGU" className="text-dark-500 hover:underline">
              Conditions Générales d'Utilisation
            </Link>
            {' - '} Mentions légales
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;