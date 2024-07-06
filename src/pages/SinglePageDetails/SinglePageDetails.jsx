// import { Link, useLoaderData, useParams } from 'react-router-dom';

// const SinglePageDetails = () => {
//   const cards = useLoaderData();
//   const { id } = useParams();
//   const card = cards.find(card => card._id === id);

//   const { category, image, name, price, description, made_by, origin, _id } = card;

//   return (
//     <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-500 min-h-screen">
//       <div className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Left Column */}
//           <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
//             <img src={image} alt={name} className="w-full" />
//           </div>
//           {/* Right Column */}
//           <div className="flex flex-col justify-center">
//             <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
//               Food Name: <span className="text-yellow-200">{name}</span>
//             </h1>
//             <p className="text-lg text-white font-bold mb-2">
//               Category: <span className="text-yellow-200">{category}</span>
//             </p>
//             <p className="text-lg text-white font-bold mb-2">
//               Food Origin: <span className="text-yellow-200">{origin}</span>
//             </p>
//             <p className="text-lg text-white font-bold mb-2">
//               Made By: <span className="text-yellow-200">{made_by}</span>
//             </p>
//             <p className="text-lg text-white font-bold mb-4">
//               Price: <span className="text-yellow-200">${price}</span>
//             </p>

//             <div className="text-lg text-white font-bold mb-2">
//               Description:
//             </div>
//             <p className="text-lg text-white mb-8">{description}</p>

//             <Link to={`/purchase/${_id}`}>
//               <button className="mt-10 btn btn-outline mr-5 outline-red-600 bg-orange-600 text-xl text-white w-40">
//                 Purchase
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SinglePageDetails;



import { Link, useLoaderData, useParams } from 'react-router-dom';

const SinglePageDetails = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const card = cards.find(card => card._id === id);

  const { category, image, name, price, description, made_by, origin, _id } = card;

  return (
    <div className="bg-gray-100 min-h-screen mt-6 ">
      {/* Banner */}
      <div className="bg-gradient-to-r from-indigo-500 rounded-lg  via-purple-500 to-orange-500 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {name}
          </h1>
          <p className="text-lg text-white font-bold mb-2">
            Category: <span className="text-yellow-200">{category}</span>
          </p>
          <p className="text-lg text-white font-bold mb-2">
            Food Origin: <span className="text-yellow-200">{origin}</span>
          </p>
          <p className="text-lg text-white font-bold mb-4">
            Price: <span className="text-yellow-200">${price}</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 mt-5 ">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-8">
          {/* Left Column */}
          <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
            <img src={image} alt={name} className="w-full rounded-lg" />
          </div>
          {/* Right Column */}
          <div className="flex flex-col justify-center text-gray-800">
            <div className="text-lg font-bold mb-2">
              <span className="text-yellow-500">Made By:</span> {made_by}
            </div>
            <div className="text-lg font-bold">
              <span className="text-yellow-500">Description:</span>
            </div>
            <p className="text-lg mb-8">{description}</p>

            <Link to={`/purchase/${_id}`}>
              <button className="btn btn-primary text-xl w-60">
                Purchase
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePageDetails;
