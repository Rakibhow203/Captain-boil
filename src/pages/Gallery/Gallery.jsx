import { useLoaderData } from 'react-router-dom';
import Photo from './Photo';
import TopBanner from './TopBanner';


const Gallery = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div className="mt-5 mb-5">
        <TopBanner></TopBanner>
      </div>
      <div className="mb-5 mt-5 text-center font-bold text-3xl">
        Our Food Gallery
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mb-4">
        {data.map(card => (
          <Photo key={card._id} card={card}></Photo>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
