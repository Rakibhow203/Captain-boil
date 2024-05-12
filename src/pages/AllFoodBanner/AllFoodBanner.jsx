

const AllFoodBanner = () => {
  return (
    <div className="carousel w-full h-[400px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/K0HpBGV/pexels-photo-941861.webp"
          className="w-full rounded-lg"
        />
        <div className="absolute h-full left-0 top-0 flex items-center   pl-12 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="space-y-7">
            <h2 className="text-6xl font-bold text-white animate__animated animate__flipInX">
              The Captain's Boil
            </h2>

            <p className="text-white font-bold text-3xl">Our All Food Corner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllFoodBanner;