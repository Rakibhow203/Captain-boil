import video from '../../../assets/The Captain’s Boil.mp4'

const Adds = () => {
  return (
    <div className='rounded-lg'>

      <div className="relative">
        <video autoPlay loop className="w-full h-auto rounded-xl">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          {/* <h1 className="text-4xl font-bold">Welcome to our Captai's Boil</h1> */}
          {/* <p className="mt-4 text-lg">Discover amazing content and services</p> */}
          {/* <button className="mt-6 px-6 py-3 bg-white text-blue-500 font-bold rounded-lg shadow-lg hover:bg-blue-200 hover:text-blue-700 transition duration-300">Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default Adds;