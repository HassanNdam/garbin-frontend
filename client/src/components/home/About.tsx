import React from 'react';
import Garbin from '../../assets/images/garbin-phone.png';

const About = () => {
  return (
    <div className="container mx-auto p-6 max-w-7xl mt-10">
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="flex-1 rounded-lg">
          <p className="text-gray-700 mb-5 text-justify">
            Avec toutes les options de fringues qu'on a aujourd'hui, trouver une
            tenue qui nous plaît peut vite devenir galère. Cette appli te
            <span className="font-bold"> simplifie la vie</span> en te
            permettant de créer des{' '}
            <span className="font-bold">looks stylés</span> direct depuis ta
            garde-robe.
          </p>
          <p className="text-gray-700 mb-5 text-justify">
            Le concept est super simple : tu prends en photo tes vêtements, tu
            les uploades dans l'appli, et avec un outil méga intuitif, tu peux
            composer des tenues en deux temps trois mouvements. Quand t’as un
            look qui te plaît, tu le sauvegardes dans ton{' '}
            <span className="font-bold">espace perso</span>, histoire de le
            retrouver facilement.
          </p>
          <p className="text-gray-700 text-justify">
            En plus, Garbin te permet de{' '}
            <span className="font-bold">partager tes looks</span> avec tes potes
            et de récolter leurs avis. Et pour pimenter le tout, des suggestions
            basées sur les tendances ou des styles similaires te donneront
            encore plus d'inspi. Bref, c'est à la fois{' '}
            <span className="font-bold">pratique et fun</span>!
          </p>
        </div>

        {/* Image bloc */}
        <div className="flex-1">
          <img
            src={Garbin}
            alt="À propos - Garbin"
            className="w-3/4 h-100 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
