// import { Link } from "react-router-dom";


// const ShowAllFoods = ({ card }) => {
//   const {
//     category, image, name, price, _id, } = card
//   // console.log(card);
//   return (
//     <div>


//       <div className="card w-96  shadow-2xl bg-slate-100">
//         <figure className="px-10 pt-10 h-44 rounded-lg ">

//           <img src={image} alt="Shoes" className="rounded-lg mt-5" />
//         </figure>
//         <div className="card-body items-center text-center shadow-2xl rounded-3xl ">
//           <h2 className="card-title text-black font-sans font-bold"> Food Name: {name} </h2>
//           <p className="text-black font-serif">Food Category: {category} </p>
//           <p className="text-black font-serif">Price: {price} </p>

//           <div className="card-actions">
//             <Link to={`/singleDetails/${_id}`}><button className="btn btn-primary">Details Button</button></Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShowAllFoods;



import { Link } from "react-router-dom";

const ShowAllFoods = ({ card }) => {
  const { category, image, name, price, _id } = card;

  return (
    <div className="w-full  p-4 ">
      <div className="card rounded-lg  shadow-lg bg-white overflow-hidden transform transition duration-500 hover:scale-105 mb-4 mt-4 hover:shadow-lg hover:shadow-yellow-500/50">
        <figure className="h-56 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full transform transition-transform duration-300 hover:scale-105" />
        </figure>
        <div className="p-4">
          <h2 className="text-gray-800 font-bold text-xl mb-2">{name}</h2>
          <p className="text-gray-700 font-semibold mb-2">Category: {category}</p>
          <p className="text-gray-700 font-semibold mb-4">Price: ${price}</p>
          <div className="flex justify-center">
            <Link to={`/singleDetails/${_id}`}>
              <button className="btn btn-primary bg-gradient-to-r from-green-400 to-orange-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowAllFoods;
