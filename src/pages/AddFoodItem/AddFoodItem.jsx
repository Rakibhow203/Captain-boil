import Swal from "sweetalert2";
import useAuth from "../../Components/Hook/useAuth";


const AddFoodItem = () => {
  const { user } = useAuth();
  const userName = user ? user.name : "";
  const handleAddUser = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const description = form.description.value;
    const image = form.image.value;
    const price = form.price.value;
    const origin = form.origin.value;
    const email = user.email;
    const addAll = {
      name,
      image,
      category,
      price,
      origin,
      description,
      email,
      addedBy: userName
    };
    console.log(addAll);
    fetch('https://the-captain-boil-server.vercel.app/tops', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(addAll),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data?.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: '  Added  Food Successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
          form.reset();
        }
      });
  };
  return (
    <div>
      <div className="gadgetContainer pt-10 ">
        <div className="shadow-lg p-5 border rounded-lg bg-[#e0d5dcb0]">
          {/* Heading */}
          <div className="mt-5 mb-8">
            <p className="text-center text-3xl font-semibold">
              <span className="mr-3 text-[#496affce]">
                <i className="bx bxs-alarm-add"></i>
              </span>
              <span className="dark:text-white flex justify-center gap-2">
                Add Food Item
              </span>
            </p>
          </div>
          {/* form */}
          <form onSubmit={handleAddUser}>
            <div className="flex gap-8 ">
              <div className="flex-1">
                <label className="block mb-2 dark:text-white" htmlFor="image">
                  Food Name
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#5b49ffb8]"
                  type="text"
                  placeholder="Enter Food Name"
                  id="name"
                  name="name"
                />

                <label
                  className="block mt-4 mb-2 dark:text-white"
                  htmlFor="price"
                >
                  Food Category
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#494fffbd]"
                  type="text"
                  placeholder="Category"
                  id="Price"
                  name="category"
                />

                <label
                  className="block mt-4 mb-2 dark:text-white"
                  htmlFor="price"
                >
                  Short Description
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#5549ffc3]"
                  type="text"
                  placeholder="Description"
                  id="Price"
                  name="description"
                />
              </div>

              {/* Right side */}
              <div className="flex-1">
                <label className="block mb-2 dark:text-white" htmlFor="image">
                  Image_url
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#5b49ffb8]"
                  type="text"
                  placeholder="Enter Image URL"
                  id="image"
                  name="image"
                />

                <label className="block mb-2 dark:text-white" htmlFor="Origin">
                  Origin
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#5b49ffb8]"
                  type="text"
                  placeholder="origin"
                  id="origin"
                  name="origin"
                />
                <label
                  className="block mt-4 mb-2 dark:text-white"
                  htmlFor="brand"
                >
                  Price
                </label>
                <input
                  name="price"
                  id="brand"
                  className="w-full p-2 border rounded-md focus:outline-[#5849ffb8]"
                  type="text"
                  placeholder="Price"
                ></input>
              </div>
            </div>

            <input
              className="px-4 w-full py-2 mt-4 rounded hover:bg-[#6a49ffca]  bg-[#49dbff9f] duration-200 text-white cursor-pointer font-semibold"
              type="submit"
              value="Add Food Item"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFoodItem;
