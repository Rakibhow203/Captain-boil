import video from '../../../assets/The Captain’s Boil.mp4'

const Adds = () => {
  return (
    <div className='rounded-lg'>

      <div className="relative">
        <video className="w-full h-auto rounded-xl">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">

        </div>
      </div>
    </div>
  );
};

export default Adds;
// autoPlay