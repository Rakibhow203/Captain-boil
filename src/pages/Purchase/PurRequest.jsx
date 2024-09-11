import { useEffect, useState } from 'react';


import useAuth from '../../Components/Hook/useAuth';
import ViewPur from './ViewPur';

const PurRequest = () => {
  const [items, setItems] = useState([]);
  console.log(items);

  const { user } = useAuth();
  useEffect(() => {
    fetch(`https://the-captain-boil-server.vercel.app/order/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setItems(data);
      });
  }, [user]);
  return (
    <div>
      <section className="container px-4 mx-auto pt-12 mt-5 mb-5">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-orange-400 ">
            Purchase Requests
          </h2>

          <span className="px-3 py-1 text-xs text-red-500 font-bold  bg-blue-100 rounded-full ">
            {items.length} Requests
          </span>
        </div>

        {items.map(card => (
          <ViewPur key={card._id} card={card}></ViewPur>
        ))}
      </section>
    </div>
  );
};

export default PurRequest;
