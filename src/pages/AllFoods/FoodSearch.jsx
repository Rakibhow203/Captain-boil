
import { useState } from 'react';

const FoodSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="flex justify-center mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for foods..."
        className="border rounded-l-lg p-2 w-64"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded-r-lg"
      >
        Search
      </button>
    </div>
  );
};

export default FoodSearch;

