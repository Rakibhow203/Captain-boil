import { useEffect, useState } from "react";
import ShowTopFoods from "./ShowTopFoods";
import { Link } from "react-router-dom";

const TopFoods = () => {
  const [topFoods, setTopFoods] = useState([]);

  useEffect(() => {
    const getTopFoods = async () => {
      try {
        const response = await fetch('https://the-captain-boil-server.vercel.app/tops');
        const foods = await response.json();
        // Check if the food items have a `purchaseCount` property
        if (foods && Array.isArray(foods)) {
          const sortedFoods = foods.sort((a, b) => b.purchaseCount - a.purchaseCount);
          setTopFoods(sortedFoods.slice(0, 6)); // Get the top 6 foods
        } else {
          console.error('Data is not in expected format or empty');
        }
      } catch (error) {
        console.error('Error fetching top foods:', error);
      }
    };

    getTopFoods();
  }, []);

  return (
    <div>
      <div>
        <h1 className="font-bold text-3xl text-center mt-8 mb-2 text-black outline-pink-500">
          Our Top Foods
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mb-4">
        {topFoods.length > 0 ? (
          topFoods.map(food => (
            <ShowTopFoods key={food._id} food={food} />
          ))
        ) : (
          <p className="text-center text-gray-500">Loading top foods...</p>
        )}
      </div>
      <div className="text-center">
        <Link to={'/allFoods/'}>
          <button className="btn btn-wide btn-outline btn-secondary">See All</button>
        </Link>
      </div>
    </div>
  );
};

export default TopFoods;
