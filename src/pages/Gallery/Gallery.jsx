

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Components/Hook/useAuth';
import Swal from 'sweetalert2';

const Gallery = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newImage, setNewImage] = useState({
    userName: user ? user.displayName : '',
    feedback: '',
    imageUrl: ''
  });

  // Fetch images from backend
  const fetchImages = async () => {
    try {
      const response = await fetch('http://localhost:5000/images');
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleAddClick = () => {
    if (!user) {
      navigate('/login');
    } else {
      setShowModal(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewImage({ ...newImage, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (newImage.feedback && newImage.imageUrl) {
      try {
        const response = await fetch('http://localhost:5000/addProduct', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newImage)
        });

        if (!response.ok) {
          throw new Error('Failed to post new image');
        }

        const responseData = await response.json();

        // Update state with the new image data from the server
        setImages([...images, responseData]);

        // Reset form and close modal
        setShowModal(false);
        setNewImage({
          userName: user ? user.displayName : '',
          feedback: '',
          imageUrl: ''
        });

        // Show success alert
        Swal.fire({
          title: 'Success!',
          text: 'Your image has been added to the gallery.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Page Title with Background */}
      <div className="relative bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-16 text-center text-white mb-5">
        <h1 className="text-5xl font-bold">Our Food Gallery</h1>
      </div>

      {/* Gallery Section */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mb-4 px-4">
        {images.map((image) => (
          <div key={image.id} className="relative group">
            <img
              src={image.imageUrl}
              alt={image.feedback}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-lg">
              <div className="text-white text-center px-4">
                <h3 className="text-xl font-semibold">{image.userName}</h3>
                <p className="mt-2">{image.feedback}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Button */}
      <div className="text-center mb-10">
        <button
          onClick={handleAddClick}
          className="bg-blue-500 text-white p-4 w-2/5 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300 font-bold"
        >
          Add
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-2xl mb-4">Add New Image</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input
                  type="text"
                  name="userName"
                  value={newImage.userName}
                  readOnly
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Feedback</label>
                <textarea
                  name="feedback"
                  value={newImage.feedback}
                  onChange={handleInputChange}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Share your experience"
                  rows="3"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Image URL</label>
                <input
                  type="text"
                  name="imageUrl"
                  value={newImage.imageUrl}
                  onChange={handleInputChange}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="https://example.com/image.jpg"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="mr-4 bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
