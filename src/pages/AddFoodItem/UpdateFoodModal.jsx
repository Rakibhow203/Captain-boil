// import { useEffect, useState } from "react";

// const UpdateFoodModal = ({ show, onHide, item, onUpdate }) => {
//   const [updatedItem, setUpdatedItem] = useState({ ...item });

//   useEffect(() => {
//     setUpdatedItem({ ...item });
//   }, [item]);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setUpdatedItem(prevItem => ({ ...prevItem, [name]: value }));
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`http://localhost:5000/foods/${item._id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updatedItem),
//       });
//       const data = await response.json();
//       if (data.modifiedCount > 0) {
//         onUpdate(updatedItem);
//         onHide();
//       }
//     } catch (error) {
//       console.error('Error updating food:', error);
//     }
//   };

//   if (!show) return null;

//   return (
//     <div className="fixed inset-0 z-50 overflow-auto bg-smoke-900 flex">
//       <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
//         <span className="absolute top-0 right-0 p-4">
//           <button onClick={onHide}>Close</button>
//         </span>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="name">Food Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={updatedItem.name}
//               onChange={handleChange}
//               className="w-full p-2 border rounded-md"
//             />
//           </div>
//           <div>
//             <label htmlFor="price">Price</label>
//             <input
//               type="text"
//               id="price"
//               name="price"
//               value={updatedItem.price}
//               onChange={handleChange}
//               className="w-full p-2 border rounded-md"
//             />
//           </div>
//           <div>
//             <label htmlFor="category">Category</label>
//             <input
//               type="text"
//               id="category"
//               name="category"
//               value={updatedItem.category}
//               onChange={handleChange}
//               className="w-full p-2 border rounded-md"
//             />
//           </div>
//           <div>
//             <label htmlFor="description">Description</label>
//             <input
//               type="text"
//               id="description"
//               name="description"
//               value={updatedItem.description}
//               onChange={handleChange}
//               className="w-full p-2 border rounded-md"
//             />
//           </div>
//           <div>
//             <label htmlFor="image">Image URL</label>
//             <input
//               type="text"
//               id="image"
//               name="image"
//               value={updatedItem.image}
//               onChange={handleChange}
//               className="w-full p-2 border rounded-md"
//             />
//           </div>
//           <div>
//             <label htmlFor="origin">Origin</label>
//             <input
//               type="text"
//               id="origin"
//               name="origin"
//               value={updatedItem.origin}
//               onChange={handleChange}
//               className="w-full p-2 border rounded-md"
//             />
//           </div>
//           <button
//             type="submit"
//             className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
//           >
//             Update Food Item
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UpdateFoodModal;

import { useEffect, useState } from "react";

const UpdateFoodModal = ({ show, onHide, item, onUpdate }) => {
  const [updatedItem, setUpdatedItem] = useState({ ...item });

  useEffect(() => {
    setUpdatedItem({ ...item });
  }, [item]);

  const handleChange = e => {
    const { name, value } = e.target;
    setUpdatedItem(prevItem => ({ ...prevItem, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/foods/${item._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedItem),
      });
      const data = await response.json();
      if (data.modifiedCount > 0) {
        onUpdate(updatedItem);
        onHide();
      }
    } catch (error) {
      console.error('Error updating food:', error);
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
      <div className="relative bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          onClick={onHide}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <h2 className="text-2xl font-semibold text-center mb-4">Update Food Item</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Food Name
            </label>
            <input
              type="text"
              id="name"
              name="food_name"
              value={updatedItem.food_name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={updatedItem.price}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={updatedItem.category}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={updatedItem.description}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={updatedItem.image}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="origin" className="block text-sm font-medium text-gray-700">
              Origin
            </label>
            <input
              type="text"
              id="origin"
              name="origin"
              value={updatedItem.origin}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Update Food Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateFoodModal;
