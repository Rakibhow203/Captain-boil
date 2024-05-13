import { useLoaderData, useParams } from "react-router-dom";


const SinglePageDetails = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  // console.log(cards);
  const card = cards.find(card => card._id === id)
  // console.log(card);
  const {
    category, image, name, price, description, made_by, origin } = card
  return (
    <div className="hero min-h-screen bg-white shadow-2xl mt-5">
      <div className="hero-content flex-col lg:flex-row">
        <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default SinglePageDetails;