import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <div className="rounded-xl">
      <section className="relative bg-cover bg-center items-center text-center rounded-2xl" style={{ backgroundImage: `url('https://i.ibb.co/cLVs7qr/pexels-lucasandrade-12477952.jpg')` }}>
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="container pt-[550px]  mx-auto flex flex-col items-center pr-4 justify-center relative">
          <h1 className="text-4xl font-bold text-white mb-4">A FEAST WORTH GIVING!</h1>
          <p className="text-lg text-center text-white mb-8">SHARE OUR TREASURES WITH YEE FRIENDS AND FAMILY FOR EVERY OCCASION!</p>
          <p className="text-sm text-center text-white"> "The Captain's Boil Gift Cards can be purchased in our stores." </p>
          <Link to="/allFoods">
            <button className="bg-blue-500 hover:bg-blue-600 text-white mb-10 font-bold py-2 px-4 rounded-lg transition duration-300">
              View All Foods
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Banner;