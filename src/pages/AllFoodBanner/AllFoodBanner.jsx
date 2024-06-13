const AllFoodBanner = () => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg">
      {/* Background Image */}
      <img
        src="https://i.ibb.co/K0HpBGV/pexels-photo-941861.webp"
        alt="Food Banner"
        className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-60"></div>
      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start pl-12 text-white space-y-5">
        <h2 className="text-6xl font-extrabold animate__animated animate__flipInX animate__delay-1s">
          The Captain's Boil
        </h2>
        <p className="text-3xl font-semibold animate__animated animate__fadeInUp animate__delay-2s">
          Our All Food Corner
        </p>
        <p className="text-lg animate__animated animate__fadeIn animate__delay-3s">
          Explore a variety of exquisite dishes crafted with passion.
        </p>
      </div>
    </div>
  );
};

export default AllFoodBanner;
