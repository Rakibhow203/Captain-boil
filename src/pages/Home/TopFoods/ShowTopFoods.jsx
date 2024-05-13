import { Link } from "react-router-dom";


const ShowTopFoods = ({ card }) => {
  const {
    category, image, name, price, _id } = card
  return (
    <div>
      <div>
        <div className="card w-96 bg-white shadow-2xl  mb-2 mt-2">
          <figure className="px-10 pt-10 h-44 ">
            <img src={image} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>

            <div className="flex gap-10">
              <div className="card-actions">
                <Link to={`/Top/${_id}`}><button className="btn btn-primary">Get Details</button></Link>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowTopFoods;