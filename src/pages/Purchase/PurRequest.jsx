import { useEffect, useState } from 'react';


import useAuth from '../../Components/Hook/useAuth';
import ViewPur from './ViewPur';
// import ViewOrder from '../ViewOrder/ViewOrder';
const PurRequest = () => {
  const [items, setItems] = useState([]);
  console.log(items);

  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/myorder/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setItems(data);
      });
  }, [user]);
  return (
    <div>
      <section className="container px-4 mx-auto pt-12 mt-5 mb-5">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800 ">
            Purchase Requests
          </h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
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
