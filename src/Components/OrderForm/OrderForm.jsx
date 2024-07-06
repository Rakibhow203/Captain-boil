
// import React from 'react';

// const OrderForm = ({ user, selectedCard, handleOrderSubmit }) => {
//   const { name, price } = selectedCard || {};

//   return (
//     <div className="flex flex-col justify-center">
//       <form onSubmit={handleOrderSubmit} className="flex flex-col gap-4">
//         <input type="hidden" name="name" value={name} />
//         <input type="hidden" name="price" value={price} />
//         <input type="hidden" name="time" value={new Date().toLocaleString()} />

//         <label className="text-lg text-white font-bold mb-2">
//           Quantity:
//           <input
//             type="number"
//             name="quantity"
//             min="1"
//             max={selectedCard?.availableQuantity} // Use selectedCard to get availableQuantity
//             required
//             className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
//           />
//         </label>

//         <button
//           type="submit"
//           className="btn btn-outline mr-5 outline-red-600 bg-orange-600 text-xl text-white w-40"
//           disabled={!selectedCard || selectedCard.availableQuantity === 0 || user.email === selectedCard.email}
//         >
//           Purchase
//         </button>
//       </form>
//     </div>
//   );
// };

// export default OrderForm;


import React from 'react';

const OrderForm = ({ user, selectedCard, handleOrderSubmit }) => {
  const { name, price, availableQuantity, email: sellerEmail } = selectedCard || {};

  const isUserOwner = user.email === sellerEmail;

  return (
    <div className="flex flex-col justify-center">
      <form onSubmit={handleOrderSubmit} className="flex flex-col gap-4">
        <input type="hidden" name="name" value={name} />
        <input type="hidden" name="price" value={price} />
        <input type="hidden" name="time" value={new Date().toLocaleString()} />

        {availableQuantity === 0 ? (
          <p className="text-red-500 text-lg font-bold">This item is not available for purchase.</p>
        ) : (
          <>
            <label className="text-lg text-white font-bold mb-2">
              Quantity:
              <input
                type="number"
                name="quantity"
                min="1"
                max={availableQuantity} // Restrict max quantity to availableQuantity
                required
                className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
              />
            </label>

            <button
              type="submit"
              className="btn btn-outline mr-5 outline-red-600 bg-orange-600 text-xl text-white w-40"
              disabled={availableQuantity === 0 || isUserOwner} // Disable button if quantity is zero or user is the owner
            >
              Purchase
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default OrderForm;
