import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <div>
      <section className="relative min-h-[800px] bg-cover bg-center items-center text-center" style={{ backgroundImage: `url('https://i.ibb.co/h819rwD/maxresdefault-1.jpg')` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container pt-[550px]  mx-auto flex flex-col items-center pr-4 justify-center relative">
          <h1 className="text-4xl font-bold text-white mb-4">A FEAST WORTH GIVING!</h1>
          <p className="text-lg text-center text-white mb-8">SHARE OUR TREASURES WITH YEE FRIENDS AND FAMILY FOR EVERY OCCASION!</p>
          <p className="text-sm text-center text-white"> "The Captain's Boil Gift Cards can be purchased in our stores." </p>
          <Link to="/all-foods">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
              View All Foods
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Banner;