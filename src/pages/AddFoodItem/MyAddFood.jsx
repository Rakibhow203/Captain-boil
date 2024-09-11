
import { useEffect, useState } from "react";
import useAuth from "../../Components/Hook/useAuth";
import Swal from "sweetalert2";
import ViewFood from "./ViewFood";
import UpdateFoodModal from "./UpdateFoodModal";


const MyAddFood = () => {
  const { user } = useAuth();
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://the-captain-boil-server.vercel.app/addProduct/${user.email}`)
        .then(res => res.json())
        .then(data => {
          setItems(data);

        });

    }
  }, [user]);

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://the-captain-boil-server.vercel.app/addProduct/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your Food has been deleted.',
                icon: 'success',
              });
              const remaining = items.filter(item => item._id !== id);
              setItems(remaining);
            }
          });
      }
    });
  };

  const handleEdit = item => {
    setEditItem(item);
    setShowEditModal(true);
  };

  const handleUpdate = updatedItem => {
    const updatedItems = items.map(item =>
      item._id === updatedItem._id ? updatedItem : item
    );
    setItems(updatedItems);
    setShowEditModal(false);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center">My Added Food Items</h2>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >
        {items.map(item => (
          <ViewFood
            key={item._id}
            item={item}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
      <UpdateFoodModal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        item={editItem}
        onUpdate={handleUpdate}
      />
    </div>
  );
};

export default MyAddFood;


// import { useState, useEffect } from 'react';
// import useAuth from '../../Components/Hook/useAuth'; // Custom hook to get user info
// import { Link } from 'react-router-dom';

// const MyAddedFoodItems = () => {
//   const [foodItems, setFoodItems] = useState([]);
//   const { user } = useAuth(); // Get logged-in user information

//   useEffect(() => {
//     fetch(`https://the-captain-boil-server.vercel.app/addproduct/${user.email}`)
//       .then((res) => res.json())
//       .then((data) => setFoodItems(data))
//       .catch((error) => console.error('Error fetching food items:', error));
//   }, [user.email]);

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-3xl font-bold mb-6">My Added Food Items</h2>
//       <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {foodItems.map((item) => (
//           <div key={item._id} className="border p-4 rounded-lg shadow-md">
//             <img src={item.food_image} alt={item.food_name} className="w-full h-40 object-cover rounded-md mb-4" />
//             <h3 className="text-xl font-semibold">{item.food_name}</h3>
//             <p className="text-gray-600">Price: ${item.price}</p>
//             <p className="text-gray-600">Quantity: {item.food_qun}</p>
//             <Link to={`/update-food/${item._id}`}>
//               <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Update</button>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyAddedFoodItems;

