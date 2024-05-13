import { Link } from "react-router-dom";


const ViewFood = ({ item, handleDelete }) => {
  const { _id, name, price } = item
  console.log(item);
  return (
    <div>
      <div className="overflow-x-auto mb-4 mt-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>

              <th>Btn</th>
              <th>BTn</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="bg-base-200">
              <td>{name}</td>
              <td>$ {price}</td>

              <th>
                <Link to={`/update/${_id}`}>
                  <button>Update</button>
                </Link>
              </th>
              <th>
                <button onClick={() => handleDelete(_id)}>Delete</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewFood;