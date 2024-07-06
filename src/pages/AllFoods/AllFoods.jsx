


// import { useEffect, useState } from "react";
// import ShowAllFoods from "./ShowAllFoods";
// import AllFoodBanner from "../AllFoodBanner/AllFoodBanner";
// import FoodSearch from "./FoodSearch";

// const AllFoods = () => {
//   const [cards, setCards] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     const fetchFoods = async () => {
//       try {
//         console.log('Searching for:', searchQuery);
//         const response = await fetch(`https://the-captain-boil-server.vercel.app/foods?q=${encodeURIComponent(searchQuery)}`);
//         const data = await response.json();
//         console.log('Fetched foods:', data);
//         setCards(data); // Update state with the fetched foods
//       } catch (error) {
//         console.error('Error fetching foods:', error);
//       }
//     };

//     fetchFoods();
//   }, [searchQuery]); // Re-fetch foods when the search query changes

//   return (
//     <div>
//       <div className="mb-5 mt-5">
//         <AllFoodBanner />
//       </div>
//       <FoodSearch onSearch={setSearchQuery} /> {/* Pass setSearchQuery to handle search */}
//       <div>
//         <h1 className="font-bold text-3xl text-center text-black mb-4 mt-10">All Foods</h1>
//       </div>
//       <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mb-4">
//         {cards.map(card => (
//           <ShowAllFoods key={card._id} card={card} />
//         ))}
//       </div>
//       {cards.length === 0 && (
//         <div className="text-center text-gray-500 mt-10">No foods found.</div>
//       )}
//     </div>
//   );
// };

// export default AllFoods;

import { useEffect, useState } from "react";
import ShowAllFoods from "./ShowAllFoods";
import AllFoodBanner from "../AllFoodBanner/AllFoodBanner";
import FoodSearch from "./FoodSearch";

const AllFoods = () => {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        console.log('Searching for:', searchQuery);
        const response = await fetch(`https://the-captain-boil-server.vercel.app/foods?q=${encodeURIComponent(searchQuery)}`);
        const data = await response.json();
        console.log('Fetched foods:', data);
        setCards(data);
      } catch (error) {
        console.error('Error fetching foods:', error);
      }
    };

    fetchFoods();
  }, [searchQuery]); // Re-fetch foods when the search query changes

  return (
    <div>
      <div className="mb-5 mt-5">
        <AllFoodBanner />
      </div>
      <FoodSearch onSearch={setSearchQuery} /> {/* Pass setSearchQuery to handle search */}
      <div>
        <h1 className="font-bold text-3xl text-center text-black mb-4 mt-10">All Foods</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mb-4">
        {cards.map(card => (
          <ShowAllFoods key={card._id} card={card} />
        ))}
      </div>
      {cards.length === 0 && (
        <div className="text-center text-gray-500 mt-10">No foods found.</div>
      )}
    </div>
  );
};

export default AllFoods;
