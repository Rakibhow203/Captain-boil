


import { Link } from "react-router-dom";

const ShowAllFoods = ({ card }) => {
  const { category, image, name, price, _id } = card;

  return (
    <div className="w-full  p-4 ">
      <div className="card rounded-lg  shadow-lg bg-white overflow-hidden transform transition duration-500 hover:scale-105 mb-4 mt-4 hover:shadow-lg hover:shadow-yellow-500/50">
        <figure className="h-56 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full transform transition-transform duration-300 hover:scale-105" />
        </figure>
        <div className="p-4">
          <h2 className="text-gray-800 font-bold text-xl mb-2">{name}</h2>
          <p className="text-gray-700 font-semibold mb-2">Category: {category}</p>
          <p className="text-gray-700 font-semibold mb-4">Price: ${price}</p>
          <div className="flex justify-center">
            <Link to={`/singleDetails/${_id}`}>
              <button className="btn btn-primary bg-gradient-to-r from-green-400 to-orange-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowAllFoods;
