

const Photo = ({ card }) => {
  const { image, name, category } = card;

  return (
    <div className="relative group w-full h-52">
      <img
        src={image}
        alt="Sample"
        className="w-full   h-52 rounded-lg object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
        <div><span className="text-white text-xl">{name}</span></div>

      </div>
    </div>
  );
};

export default Photo;
