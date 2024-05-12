import { useEffect } from "react";
import { useState } from "react";
import ShowTopFoods from "./ShowTopFoods";


const TopFoods = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/tops')
      .then(res => res.json())
      .then(data => setCards(data));
  }, []);
  return (
    <div>

      <div>
        <h1 className="font-bold text-3xl text-center">Our Top Foods</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mb-4">
        {cards.map(card => (
          <ShowTopFoods key={card._id} card={card}></ShowTopFoods>
        ))}
      </div>


    </div>
  );
};

export default TopFoods;