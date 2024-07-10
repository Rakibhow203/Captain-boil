import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';
import useAuth from '../../Components/Hook/useAuth';
import AddFoodItemCover from './AddFoodItemCover';

const AddFoodItem = () => {
  const { user } = useAuth();
  const navigate = useLocation();
  const handleAddUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const food_name = form.food_name.value;
    const category = form.category.value;
    const short_description = form.short_description.value;
    const food_image = form.food_image.value;
    const food_qun = form.food_qun.value;
    const price = form.price.value;

    const email = user.email;
    const addAll = {
      food_name,
      food_qun,
      category,
      price,
      short_description,
      email,
      food_image,
    };
    console.log(addAll);
    fetch('http://localhost:5000/addProduct', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(addAll),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Added Food Successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
          navigate('/');
          form.reset();
        }
      });
  };

  return (

    <>


      <div className='mb-6 mt-6'>

        <AddFoodItemCover></AddFoodItemCover>
      </div>

      <div className="min-h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 flex justify-center items-center p-6 rounded-lg">
        <div className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border-t-4 border-indigo-500">
          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
              <span className="text-indigo-600 mr-3">
                <i className="bx bxs-alarm-add"></i>
              </span>
              Add Food Item
            </h1>
          </div>
          {/* Form */}
          <form onSubmit={handleAddUser}>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="food_name">
                  Food Name
                </label>
                <input
                  className="w-full p-3 border border-indigo-300 rounded-md focus:outline-none focus:border-indigo-500"
                  type="text"
                  placeholder="Enter Food Name"
                  id="food_name"
                  name="food_name"
                  required
                />

                <label className="block mt-4 text-gray-700 dark:text-gray-200 mb-2" htmlFor="category">
                  Food Category
                </label>
                <input
                  className="w-full p-3 border border-indigo-300 rounded-md focus:outline-none focus:border-indigo-500"
                  type="text"
                  placeholder="Category"
                  id="category"
                  name="category"
                  required
                />

                <label className="block mt-4 text-gray-700 dark:text-gray-200 mb-2" htmlFor="short_description">
                  Short Description
                </label>
                <textarea
                  className="w-full p-3 border border-indigo-300 rounded-md focus:outline-none focus:border-indigo-500 resize-none"
                  placeholder="Short Description"
                  id="short_description"
                  name="short_description"
                  rows="4"
                  required
                ></textarea>
              </div>

              <div className="flex-1">
                <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="food_image">
                  Image URL
                </label>
                <input
                  className="w-full p-3 border border-indigo-300 rounded-md focus:outline-none focus:border-indigo-500"
                  type="text"
                  placeholder="Enter Image URL"
                  id="food_image"
                  name="food_image"
                  required
                />

                <label className="block mt-4 text-gray-700 dark:text-gray-200 mb-2" htmlFor="food_qun">
                  Quantity
                </label>
                <input
                  className="w-full p-3 border border-indigo-300 rounded-md focus:outline-none focus:border-indigo-500"
                  type="number"
                  placeholder="Quantity"
                  id="food_qun"
                  name="food_qun"
                  required
                />

                <label className="block mt-4 text-gray-700 dark:text-gray-200 mb-2" htmlFor="price">
                  Price
                </label>
                <input
                  className="w-full p-3 border border-indigo-300 rounded-md focus:outline-none focus:border-indigo-500"
                  type="number"
                  placeholder="Price"
                  id="price"
                  name="price"
                  required
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-3 rounded-md hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add Food Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </>


  );
};

export default AddFoodItem;
