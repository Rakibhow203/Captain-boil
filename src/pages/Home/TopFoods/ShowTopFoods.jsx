
import { Link } from "react-router-dom";

const ShowTopFoods = ({ card }) => {
  const { category, image, name, price, _id } = card;

  return (
    <div className="flex justify-center items-center p-4">
      <div className="card w-96 bg-white shadow-2xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-105 mb-4 mt-4 hover:shadow-lg hover:shadow-yellow-500/50">
        <figure className="px-10 pt-10 h-44 flex justify-center items-center overflow-hidden">
          <img
            src={image}
            alt={name}
            className="rounded-xl h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
        </figure>
        <div className="card-body items-center text-center p-4">
          <h2 className="card-title text-gray-800 font-extrabold text-xl mb-2">
            <span className="font-bold">Name:</span> {name}
          </h2>
          <p className="text-gray-700 font-bold mb-2">Category: {category}</p>
          <p className="text-gray-700 font-bold mb-4">Price: ${price}</p>
          <div className="card-actions">
            <Link to={`/Top/${_id}`}>
              <button className="btn btn-primary bg-gradient-to-r from-green-400 to-orange-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                Get Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowTopFoods;
