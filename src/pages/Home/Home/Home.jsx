import Adds from "../Adds/Adds";

import Banner from "../Banner/Banner";
import Slider from "../Slider/Slider";
import TopFoods from "../TopFoods/TopFoods";

import Gallary from '../Gallary/Gallary';
const Home = () => {
  return (
    <div className="mt-5">

      <div className="">     <Banner></Banner></div>
      {/* <div className="mt-32 mb-32"> <Slider></Slider> </div> */}
      <div className="mt-5"> <Adds></Adds> </div>

      <div> <TopFoods></TopFoods> </div>
      <div> <Gallary></Gallary>  </div>





    </div>
  );
};

export default Home;