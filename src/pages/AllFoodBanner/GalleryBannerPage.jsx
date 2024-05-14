

const GalleryBannerPage = () => {
  return (
    <div>
      <div className="carousel w-full h-[400px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/8PH1JBN/seafood-1494193-1280.jpg"
            className="w-full rounded-xl mt-10"
          />
          <div className="absolute h-full left-0 top-0 flex items-center   pl-12 bg-gradient-to-r from-[#000000] to-[rgba(21, 21, 21, 0)]">
            <div className="space-y-7">
              <h2 className="text-6xl font-bold text-white animate__animated animate__flipInX">
                The Captain's Boil
              </h2>

              <p className="text-white font-bold text-3xl">Our All Food Corner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryBannerPage;