// import axios from "axios";
// import Swal from "sweetalert2";
// import { useState } from "react";
// import { FaPenToSquare } from "react-icons/fa6";
// import { MdDeleteSweep } from "react-icons/md";
// import { Link } from "react-router-dom";

// const ViewPur = ({ card }) => {

//   const [orders, setOrders] = useState([card]);

//   const handleDeleteUser = (cardToDelete) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: "You won't be able to revert this!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!'
//     }).then(result => {
//       if (result.isConfirmed) {
//         axios.delete(`https://the-captain-boil-server.vercel.app/myorder/${cardToDelete._id}`)
//           .then(res => {
//             if (res.data.deletedCount) {
//               Swal.fire({
//                 title: 'Deleted!',
//                 text: 'Your user has been deleted.',
//                 icon: 'success'
//               }).then(() => {
//                 // Update UI after successful deletion
//                 const updatedOrders = orders.filter(order => order._id !== cardToDelete._id);
//                 setOrders(updatedOrders);
//               });
//             } else {
//               Swal.fire({
//                 title: 'Error!',
//                 text: 'Failed to delete user.',
//                 icon: 'error'
//               });
//             }
//           })
//           .catch(error => {
//             console.error('Error deleting user:', error);
//             Swal.fire({
//               title: 'Error!',
//               text: 'Failed to delete user. Please try again later.',
//               icon: 'error'
//             });
//           });
//       }
//     });
//   };

//   return (



//     <div className="overflow-x-auto">
//       <table className="table">

//         <thead>
//           <tr>
//             <th>Sl No</th>
//             <th>Name</th>
//             <th>Date & Time</th>
//             <th>Location</th>
//             <th>Profession</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody className='bg-white'>
//           {
//             orders.map((order, index) =>

//               <tr key={order?._id} className="bg-white">
//                 <th>{index + 1}</th>
//                 <td>{order?.name
//                 }</td>
//                 <td>{order?.time}</td>
//                 <td>{order?.price}</td>
//                 <td>
//                   <Link to={`/dashboard/updated/${order?._id}`}>

//                     <button

//                       className='text-2xl text-orange-300'>
//                       <FaPenToSquare />
//                     </button>
//                   </Link>
//                 </td>
//                 <td>
//                   <button
//                     onClick={() => handleDeleteUser(order)}
//                     className='text-2xl text-red-500'>
//                     <MdDeleteSweep />
//                   </button>
//                 </td>
//               </tr>
//             )
//           }
//         </tbody>
//       </table>
//     </div>

//   );
// };

// export default ViewPur;


import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const ViewPur = ({ card }) => {
  const [orders, setOrders] = useState([card]);

  const handleDeleteUser = (cardToDelete) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://the-captain-boil-server.vercel.app/myorder/${cardToDelete._id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your user has been deleted.",
                icon: "success",
              }).then(() => {
                // Update UI after successful deletion
                const updatedOrders = orders.filter(
                  (order) => order._id !== cardToDelete._id
                );
                setOrders(updatedOrders);
              });
            } else {
              Swal.fire({
                title: "Error!",
                text: "Failed to delete user.",
                icon: "error",
              });
            }
          })
          .catch((error) => {
            console.error("Error deleting user:", error);
            Swal.fire({
              title: "Error!",
              text: "Failed to delete user. Please try again later.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <tr>
            <th className="py-3 px-6 text-left">Sl No</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Date & Time</th>
            <th className="py-3 px-6 text-left">Location</th>
            <th className="py-3 px-6 text-left">Profession</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {orders.map((order, index) => (
            <tr key={order._id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">{index + 1}</td>
              <td className="py-3 px-6 text-left">{order.name}</td>
              <td className="py-3 px-6 text-left">{order.time}</td>
              <td className="py-3 px-6 text-left">{order.price}</td>
              <td className="py-3 px-6 text-left">
                <Link to={`/dashboard/updated/${order._id}`}>
                  <button className="text-orange-300 hover:text-orange-500">
                    <FaPen className="text-xl" />
                  </button>
                </Link>
              </td>
              <td className="py-3 px-6 text-center">
                <button
                  onClick={() => handleDeleteUser(order)}
                  className="text-red-500 hover:text-red-700"
                >
                  <MdDelete className="text-xl" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewPur;
