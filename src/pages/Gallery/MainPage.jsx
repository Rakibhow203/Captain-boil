

import { useState } from 'react';
import Gallery from './Gallery';
import AddExperienceModal from './AddExperienceModal';


const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (formData) => {
    // Handle form submission, e.g., send data to server
    console.log(formData);
    closeModal(); // Close modal after submission
  };

  return (
    <div>
      <button onClick={openModal} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Add</button>
      <Gallery></Gallery>

      <AddExperienceModal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleSubmit} >

      </AddExperienceModal>
    </div >
  );
};

export default MainPage;
