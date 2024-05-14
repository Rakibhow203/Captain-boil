import { useState } from "react";
import useAuth from "../../Components/Hook/useAuth";
import { Modal } from "@mui/material";


const AddExperienceModal = ({ isOpen, onClose, onSubmit }) => {
  const { user } = useAuth(); // Assuming user object contains user details including name

  const [feedback, setFeedback] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call onSubmit callback with form data
    onSubmit({ user: user.fullName, feedback, imageUrl });
    // Clear form fields
    setFeedback('');
    setImageUrl('');
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Add Experience Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Add Experience</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">User's Name</label>
          <input type="text" value={user.fullName} readOnly className="w-full px-4 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Feedback or Experience Description</label>
          <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} className="w-full px-4 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Image URL</label>
          <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="w-full px-4 py-2 border rounded" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </Modal>
  );
};

export default AddExperienceModal;