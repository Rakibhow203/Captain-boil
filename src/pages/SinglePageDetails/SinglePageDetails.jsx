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
    <div>
      <h1>this single page details</h1>
    </div>
  );
};

export default SinglePageDetails;