import React from 'react';

export const CGU = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto p-6 bg-transparent rounded-lg mt-10 mb-20">
        <h1 className="text-2xl font-bold mb-10">
          Conditions Générales d'Utilisation (CGU) de Garbin
        </h1>

        <h2 className="text-xl font-semibold mt-6 mb-4">1. Introduction</h2>
        <p>
          Bienvenue sur Garbin, accessible à l'adresse
          <a
            href="https://garbin.hassan-ndam.com/"
            className="hover:underline"
          >
            {' '}
            https://garbin.hassan-ndam.com/
          </a>
          . Les présentes conditions générales d'utilisation (CGU) régissent
          l'accès et l'utilisation de la plateforme Garbin. En utilisant notre
          service, vous acceptez de vous conformer aux présentes CGU.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">
          2. Présentation de Garbin
        </h2>
        <p>
          Garbin est une plateforme dédiée à la mode et à l'optimisation de
          votre garde-robe, vous permettant de découvrir, partager et acheter
          des vêtements et accessoires. Elle est développée par une équipe
          passionnée composée de :
        </p>
        <ul className="list-disc list-inside mb-4 mb-4">
          <li>Hassan</li>
          <li>Jordan</li>
          <li>Ahmed</li>
          <li>Soufiane</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-4">3. Acceptation des CGU</h2>
        <p>
          En accédant à Garbin, vous reconnaissez avoir lu, compris et accepté
          ces CGU. Si vous n'acceptez pas ces conditions, vous devez vous
          abstenir d'utiliser la plateforme.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">
          4. Inscription et Utilisation
        </h2>
        <h3 className="font-semibold mt-4">4.1. Inscription</h3>
        <p>
          Pour accéder à certaines fonctionnalités de Garbin, vous devez créer
          un compte utilisateur en fournissant des informations exactes et
          complètes. Vous vous engagez à maintenir la confidentialité de vos
          identifiants de connexion.
        </p>

        <h3 className="font-semibold mt-4 mb-4">4.2. Utilisation du Service</h3>
        <p>
          Vous vous engagez à utiliser Garbin conformément à la législation en
          vigueur et à ne pas violer les droits de propriété intellectuelle ou
          les droits des tiers.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">
          5. Propriété Intellectuelle
        </h2>
        <p>
          Tous les contenus présents sur Garbin, y compris les textes, images,
          logos et logiciels, sont la propriété exclusive des porteurs de projet
          ou de leurs partenaires. Toute reproduction ou représentation, totale
          ou partielle, est interdite sans autorisation préalable.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">6. Données Personnelles</h2>
        <p>
          Garbin s'engage à respecter la confidentialité de vos données
          personnelles. Pour plus d'informations sur la collecte et
          l'utilisation de vos données, veuillez consulter notre Politique de
          Confidentialité.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">
          7. Limitation de Responsabilité
        </h2>
        <p>
          Garbin ne pourra être tenu responsable des dommages directs ou
          indirects résultant de l'utilisation ou de l'impossibilité d'utiliser
          la plateforme. Nous nous réservons le droit de modifier ou
          d'interrompre le service à tout moment.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">8. Modifications des CGU</h2>
        <p>
          Nous nous réservons le droit de modifier les présentes CGU à tout
          moment. Les modifications seront publiées sur cette page. Votre
          utilisation continue de Garbin après la publication des modifications
          constitue votre acceptation des CGU révisées.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">9. Droit Applicable</h2>
        <p>
          Les présentes CGU sont régies par la loi en vigueur dans le pays de
          résidence des porteurs de projet. Tout litige sera soumis aux
          tribunaux compétents.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">10. Contact</h2>
        <p>
          Pour toute question concernant ces CGU, veuillez nous contacter à
          l'adresse suivante :
          <a
            href="mailto:contact@garbin.hassan-ndam.com"
            className="text-blue-500 hover:underline"
          >
            {' '}
            info@garbin.hassan-ndam.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};
