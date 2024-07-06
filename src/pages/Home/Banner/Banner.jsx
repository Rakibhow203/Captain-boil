import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl">
      <section
        className="relative bg-cover bg-center text-center"
        style={{ backgroundImage: `url('https://i.ibb.co/jwbVd3k/close-up-appetizing-ramadan-meal.jpg')` }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto flex flex-col items-center justify-center pt-[550px] pb-20 px-4 md:px-8 lg:px-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 drop-shadow-xl animate-fade-in-up">
            A FEAST WORTH GIVING!
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-5 max-w-2xl drop-shadow-md animate-fade-in-up delay-200">
            SHARE OUR TREASURES WITH YOUR FRIENDS AND FAMILY FOR EVERY OCCASION!
          </p>
          <p className="text-sm md:text-md lg:text-lg text-white font-semibold mb-8 max-w-xl drop-shadow-md animate-fade-in-up delay-400">
            "The Captain's Boil Gift Cards can be purchased in our stores."
          </p>
          <Link to="/allFoods">
            <button className="bg-gradient-to-r from-green-500 to-orange-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-110 transition duration-300 animate-bounce">
              View All Foods
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Banner;
