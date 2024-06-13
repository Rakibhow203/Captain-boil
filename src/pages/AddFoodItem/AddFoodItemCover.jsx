import { Link } from 'react-router-dom';

const AddFoodItemCover = () => {
  return (
    <div className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 flex justify-center items-center p-6 rounded-lg">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        {/* Cover Page Content */}
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="w-full md:w-1/2 h-64 md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9"
              alt="Delicious food"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Text Section */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Add Your Favorite Food Item
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
              Enhance your menu by adding delicious food items. Fill out the form to share your culinary delights with everyone!
            </p>
            <Link to="/addFoodItem">
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow hover:from-purple-700 hover:to-indigo-700 transition-transform transform hover:scale-105">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFoodItemCover;
