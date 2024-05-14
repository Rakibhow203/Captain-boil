import { useState } from "react";
import useAuth from "../../Components/Hook/useAuth";


const Purchase = () => {
  const { user } = useAuth(); // Assuming useAuth hook provides user information
  const [quantity, setQuantity] = useState(1);
  const handlePurchase = async () => {
    try {
      const purchaseInfo = {
        foodName: food.name,
        price: food.price,
        quantity,
        buyerName: user.name,
        buyerEmail: user.email,
        buyingDate: Date.now()
      };
      await purchaseFood('http://localhost:5000/api/purchase', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(purchaseInfo),
      }); // Call your API function to store purchase information
      toast.success('Purchase successful!'); // Show success toast
    } catch (error) {
      console.error('Error purchasing food:', error);
      toast.error('Failed to purchase food. Please try again later.'); // Show error toast
    }
  };
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Purchase {food.name}</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Food Name:</label>
        <input type="text" value={food.name} className="bg-gray-100 px-4 py-2 rounded-md w-full" readOnly />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Price:</label>
        <input type="text" value={`$${food.price}`} className="bg-gray-100 px-4 py-2 rounded-md w-full" readOnly />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Quantity:</label>
        <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} className="bg-gray-100 px-4 py-2 rounded-md w-full" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Buyer Name:</label>
        <input type="text" value={user.name} className="bg-gray-100 px-4 py-2 rounded-md w-full" readOnly />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Buyer Email:</label>
        <input type="text" value={user.email} className="bg-gray-100 px-4 py-2 rounded-md w-full" readOnly />
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" onClick={handlePurchase}>Purchase</button>
    </div>
  );
};

export default Purchase;