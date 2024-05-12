import { Link } from "react-router-dom";


const ShowAllFoods = ({ card }) => {
  const {
    category, image, name, price, _id } = card
  console.log(card);
  return (
    <div>


      <div className="card w-96 bg-white shadow-2xl">
        <figure className="px-10 pt-10 h-44 rounded-lg ">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title"> Food Name: {name} </h2>
          <p>Food Category: {category} </p>
          <p>Price: {price} </p>
          <div className="card-actions">
            <Link to={`/singleDetails/${_id}`}><button className="btn btn-primary">Details Button</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowAllFoods;