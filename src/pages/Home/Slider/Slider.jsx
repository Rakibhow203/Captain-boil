

const Slider = () => {
  return (
    <>
      <div className="text-black text-center font-extrabold text-2xl mb-2 rounded-2xl">Our new Foods</div>
      <div className="relative w-full flex gap-4 py-6 overflow-x-auto">
        <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://i.ibb.co/0hVYHFv/pexels-horizon-content-2100060-3763847.jpg" alt="Image 1" />
        <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://i.ibb.co/k8qkDnk/pexels-farhad-8697539.jpg" alt="Image 2" />
        <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://i.ibb.co/LCsss6q/pexels-rachel-claire-6752178.jpg" alt="Image 3" />
        <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://i.ibb.co/PQbWmhN/pexels-geepro-20036094.jpg" alt="Image 4" />
        <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://i.ibb.co/tKtw9SC/pexels-924587518-20051293.jpg" alt="Image 5" />
      </div>
    </>
  );
};

export default Slider;