

// import Swal from "sweetalert2";
// import useAuth from "../../../Components/Hook/useAuth";

// const AddItems = () => {
//   const { user } = useAuth() || {};
//   const handleAddUser = (e) => {


//     e.preventDefault();



//     const form = e.target;
//     const userName = form.userName.value;
//     const image = form.image.value;
//     const description = form.description.value;
//     const email = user.email;
//     const name = user.displayName;

//     const info = { image, name, email, description };
//     console.log(info);

//     fetch('http://localhost:5000/addProduct', {

//       method: "POST", // or 'PUT'
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(info),


//     })
//       .then(res => res.json())
//       .then(data => {
//         console.log(data);
//         if (data?.insertedId) {
//           Swal.fire({
//             title: 'Success!',
//             text: 'User added Successfully',
//             icon: 'success',
//             confirmButtonText: 'Cool',

//           });
//           form.reset();

//         }
//       })
//   }
//   return (
//     <div className="gadgetContainer pt-10 ">
//       <div className="shadow-lg p-5 border rounded-lg bg-[#e0d5dc]">
//         {/* Heading */}

//         {/* form */}
//         <form onSubmit={handleAddUser}>
//           <div className="flex gap-8 ">
//             <div className="flex-1">

//               <label className="block mb-2 dark:text-white" htmlFor="name">
//                 User Name
//               </label>
//               <input
//                 className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
//                 type="text"
//                 placeholder="user Name"
//                 id="name"
//                 name="userName"
//               />



//               <label className="block mb-2 dark:text-white" htmlFor="image">
//                 Image_url
//               </label>
//               <input
//                 className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
//                 type="text"
//                 placeholder="Enter Image URL"
//                 id="image"
//                 name="image"
//               />

//             </div>

//           </div>
//           <label className="block mb-2 dark:text-white" htmlFor="name">
//             Feedback or experience description
//           </label>
//           <input
//             className="w-full h-20 p-2 border rounded-md focus:outline-[#FF497C]"
//             type="text"
//             placeholder="Feedback or experience description."
//             id="name"
//             name="description"
//           />

//           <input
//             className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold"
//             type="submit"
//             value="Add Product"
//           />
//         </form>
//       </div>
//     </div>



//   );
// };



// export default AddItems;

