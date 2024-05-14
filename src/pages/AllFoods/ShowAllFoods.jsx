import { Link } from "react-router-dom";


const ShowAllFoods = ({ card }) => {
  const {
    category, image, name, price, _id, } = card
  console.log(card);
  return (
    <div>


      <div className="card w-96  shadow-2xl bg-slate-100">
        <figure className="px-10 pt-10 h-44 rounded-lg ">

          <img src={image} alt="Shoes" className="rounded-lg mt-5" />
        </figure>
        <div className="card-body items-center text-center shadow-2xl rounded-3xl ">
          <h2 className="card-title text-black font-sans font-bold"> Food Name: {name} </h2>
          <p className="text-black font-serif">Food Category: {category} </p>
          <p className="text-black font-serif">Price: {price} </p>

          <div className="card-actions">
            <Link to={`/singleDetails/${_id}`}><button className="btn btn-primary">Details Button</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowAllFoods;