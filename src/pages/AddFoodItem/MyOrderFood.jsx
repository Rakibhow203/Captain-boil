import { useEffect, useState } from "react";
import useAuth from "../../Components/Hook/useAuth";
import ViewOrder from "../ViewOrder";


const MyOrderFood = () => {
  const [items, setItems] = useState([]);
  console.log(items);

  const { user } = useAuth();
  useEffect(() => {
    fetch(`https://the-captain-boil-server.vercel.app/myorder/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setItems(data);
      });
  }, [user]);
  return (
    <section className="container px-4 mx-auto pt-12 mb-5 mt-5">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-white ">My Order</h2>

        <span className="px-3 py-1 text-xs text-white font-bold bg-red-500 rounded-full ">
          Order {items.length}
        </span>
      </div>
      {items.map(card => (
        <ViewOrder key={card._id} card={card}></ViewOrder>
      ))}
    </section>
  );
};

export default MyOrderFood;