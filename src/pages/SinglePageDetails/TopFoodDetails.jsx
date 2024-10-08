import { Link, useLoaderData, useParams } from "react-router-dom";
import TopBanner from "../AllFoodBanner/TopBanner";


const TopFoodDetails = () => {
  const cards = useLoaderData()
  const { id } = useParams()
  const card = cards.find(card => card._id === id)
  console.log(card);
  const {
    category, image, name, origin, price, made_by, description, _id } = card
  return (
    <div>
      <div className="mb-5 mt-5">  <TopBanner></TopBanner> </div>
      <div className="hero min-h- bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-500">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="lg:max-w-md md:max-w-sm rounded-lg shadow-2xl lg:h-[500px]" />
          <div className="">
            <h1 className="text-5xl font-bold text-black w-full ">Food Name : <span className="text-white">{name}</span></h1>

            <p className="mt-5 text-black font-bold">Category:  <span className="text-white ">{category}</span></p>
            <p className="mt-2 text-black font-bold">Food Origin:  <span className="text-white ">{origin}</span></p>
            <p className="mt-2 text-black font-bold">Made By:  <span className="text-white ">{made_by}</span></p>
            <p className="mt-2 text-black font-bold">Price:  <span className="text-white ">{price}</span></p>

            <div className="divider divider-secondary text-white text-xl">Description</div>
            <div className="">
              <p className="px-2 text-black font-bold font-serif"> {description}</p>
            </div>

            <div className="text-center">


              <Link to={`/purchase/${_id}`}>
                <button className="mt-10 btn btn-outline mr-5 outline-red-600 bg-orange-600 text-xl text-white w-40">
                  Purchase
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFoodDetails;