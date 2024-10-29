import Capture from '../../assets/images/capturez.png';
import Composez from '../../assets/images/composez.png';
import Partagez from '../../assets/images/partagez.png';

const blocksData = [
  {
    imgSrc: Capture,
    title: 'Capturez',
    description:
      'Importez vos vêtements préférés dans votre garde-robe digitale',
    number: '1.',
  },
  {
    imgSrc: Composez,
    title: 'Composez',
    description:
      'Utilisez notre compositeur de tenues et libérez votre créativité',
    number: '2.',
  },
  {
    imgSrc: Partagez,
    title: 'Partagez',
    description:
      'Montrez vos tenues et révélez l’artiste qui sommeille en vous',
    number: '3.',
  },
];

const Howgarbin = () => {
  return (
    <div className="container mx-auto mt-5 max-w-3xl p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {blocksData.map((block, index) => (
          <div
            key={index}
            className="bg-transparent p-4 flex flex-col items-center"
          >
            <div className="flex items-center mb-4">
              <span className="text-6xl font-bold text-gray-900 mr-2">
                {block.number}
              </span>
              {''}
              <img
                src={block.imgSrc}
                alt={block.title}
                className="w-12 h-12 object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">{block.title}</h3>
            <p className="text-gray-700 text-center">{block.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Howgarbin;
