
import { useState } from 'react';
import Swal from 'sweetalert2';


const AddFoodItem = () => {
  const [formData, setFormData] = useState({
    foodName: '',
    foodImage: '',
    foodCategory: '',
    quantity: '',
    price: '',
    addBy: {
      name: '', // Add the currently logged-in user's name here
      email: '', // Add the currently logged-in user's email here
    },
    foodOrigin: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming you have an API to add the food item
    fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to add food item');
        }
        return response.json();
      })
      .then((data) => {
        // Show success alert
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Food item added successfully!',
        });
        // Reset form fields
        setFormData({
          foodName: '',
          foodImage: '',
          foodCategory: '',
          quantity: '',
          price: '',
          addBy: {
            name: '', // Reset the name field
            email: '', // Reset the email field
          },
          foodOrigin: '',
          description: '',
        });
      })
      .catch((error) => {
        // Show error alert
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to add food item. Please try again later.',
        });
        console.error('Error adding food item:', error);
      });
  };

  return (
    <div>
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-semibold mb-4">Add a Food Item</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="foodName" className="block text-sm font-medium text-gray-700">
              Food Name
            </label>
            <input
              type="text"
              id="foodName"
              name="foodName"
              value={formData.foodName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="foodImage" className="block text-sm font-medium text-gray-700">
              Food Image URL
            </label>
            <input
              type="text"
              id="foodImage"
              name="foodImage"
              value={formData.foodImage}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="foodCategory" className="block text-sm font-medium text-gray-700">
              Food Category
            </label>
            <input
              type="text"
              id="foodCategory"
              name="foodCategory"
              value={formData.foodCategory}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              required
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
              value={formData.price}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="foodOrigin" className="block text-sm font-medium text-gray-700">
              Food Origin (Country)
            </label>
            <input
              type="text"
              id="foodOrigin"
              name="foodOrigin"
              value={formData.foodOrigin}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium  text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              rows="4"
              required
            ></textarea>
          </div>




          {/* Repeat the above pattern for other form fields */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFoodItem;