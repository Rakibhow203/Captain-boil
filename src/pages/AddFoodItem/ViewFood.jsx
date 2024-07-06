// import { Link } from "react-router-dom";


// const ViewFood = ({ item, handleDelete }) => {
//   const { _id, name, price } = item
//   console.log(item);
//   return (
//     <div>
//       <div className="overflow-x-auto mb-4 mt-5">
//         <table className="table">
//           {/* head */}
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Category</th>

//               <th>Btn</th>
//               <th>BTn</th>
//             </tr>
//           </thead>
//           <tbody>

//             <tr className="bg-base-200">
//               <td>{name}</td>
//               <td>$ {price}</td>

//               <th>
//                 <Link to={`/update/${_id}`}>
//                   <button>Update</button>
//                 </Link>
//               </th>
//               <th>
//                 <button onClick={() => handleDelete(_id)}>Delete</button>
//               </th>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ViewFood;


import { Link } from "react-router-dom";

const ViewFood = ({ item, handleDelete }) => {
  const { _id, name, price } = item;

  return (
    <div className="overflow-x-auto mb-4 mt-5 " >
      <table className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg overflow-hidden">
        {/* Table Head */}
        <thead className="bg-gray-50 text-orange-400 font-bold">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Price</th>

            <th className="px-6 py-4 whitespace-nowrap text-right text-xs font-medium uppercase tracking-wider">Action</th>


          </tr>
        </thead>
        {/* Table Body */}
        <tbody className="divide-y divide-gray-200">
          <tr className="bg-white">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${price}</td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <Link to={`/update/${_id}`}>
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Update
                </button>
              </Link>
              <button className="ml-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50" onClick={() => handleDelete(_id)}>
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ViewFood;
