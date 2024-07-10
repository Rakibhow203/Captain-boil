import { useState } from "react";
import Swal from "sweetalert2";

const AddFoodModal = ({ show, onHide, onAdd }) => {
  const [newItem, setNewItem] = useState({
    name: '',
    image: '',
    category: '',
    price: '',
    origin: '',
    description: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setNewItem(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/addProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      });
      const data = await response.json();
      if (data.insertedId) {
        Swal.fire('Added!', 'Your food has been added.', 'success');
        onAdd({ ...newItem, _id: data.insertedId });
        onHide();
      }
    } catch (error) {
      console.error('Error adding food:', error);
      Swal.fire('Error!', 'There was an error adding your food.', 'error');
    }
  };

  return (
    <div className={`modal ${show ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={onHide}></div>
      <div className="modal-content">
        <div className="box">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="name"
                  value={newItem.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Image URL</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="image"
                  value={newItem.image}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Category</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="category"
                  value={newItem.category}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Price</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  name="price"
                  value={newItem.price}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Origin</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="origin"
                  value={newItem.origin}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <textarea
                  className="textarea"
                  name="description"
                  value={newItem.description}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link" type="submit">Add</button>
              </div>
              <div className="control">
                <button className="button is-light" type="button" onClick={onHide}>Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={onHide}></button>
    </div>
  );
};

export default AddFoodModal;
