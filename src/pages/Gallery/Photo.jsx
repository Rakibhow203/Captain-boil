
const Photo = ({ card }) => {
  const { image } = card
  return (
    <div>
      <div className="mb-4">
        <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
          <img
            src={image}
            className="max-w-xs w-full h-52 rounded-lg"
            alt="Louvre"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-indigo-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default Photo;