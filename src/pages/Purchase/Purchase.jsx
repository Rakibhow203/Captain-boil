


// import React, { useEffect, useState } from 'react';
// import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
// import Swal from 'sweetalert2';

// import useAuth from '../../Components/Hook/useAuth';
// import OrderForm from '../../Components/OrderForm/OrderForm';
// import OrderDetails from '../../Components/OrderDetails/OrderDetails';

// const PurchasePage = () => {
//   const cards = useLoaderData();
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const { user } = useAuth();

//   const [selectedCard, setSelectedCard] = useState(null);

//   useEffect(() => {
//     const card = cards.find(card => card._id === id);
//     setSelectedCard(card);
//   }, [cards, id]);

//   const handleOrderSubmit = (e) => {
//     e.preventDefault();

//     const form = e.target;
//     const name = form.name.value;
//     const time = form.time.value;
//     const price = form.price.value;
//     const email = user.email;

//     const orderData = { name, price, time, email };

//     fetch('https://the-captain-boil-server.vercel.app/order', {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json',
//       },
//       body: JSON.stringify(orderData),
//     })
//       .then(res => res.json())
//       .then(data => {
//         if (data?.insertedId) {
//           Swal.fire({
//             title: 'Success!',
//             text: 'Purchase completed successfully.',
//             icon: 'success',
//             confirmButtonText: 'Cool',
//           });
//           form.reset();
//           navigate('/order');
//         }
//       });
//   };

//   return (
//     <div className="mb-5 mt-5 grid lg:grid-cols-2 items-center">
//       {selectedCard && (
//         <>
//           <OrderDetails
//             name={selectedCard.name}
//             description={selectedCard.description}
//             price={selectedCard.price}
//             email={user.email}
//           />
//           <OrderForm
//             user={user}
//             selectedCard={selectedCard} // Pass selectedCard as prop
//             handleOrderSubmit={handleOrderSubmit}
//           />
//         </>
//       )}
//     </div>
//   );
// };

// export default PurchasePage;
import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

import useAuth from '../../Components/Hook/useAuth';
import OrderForm from '../../Components/OrderForm/OrderForm';
import OrderDetails from '../../Components/OrderDetails/OrderDetails';

const PurchasePage = () => {
  const cards = useLoaderData();
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useAuth();

  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const card = cards.find(card => card._id === id);
    setSelectedCard(card);
  }, [cards, id]);

  const handleOrderSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const time = form.time.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const email = user.email;

    const orderData = { name, price, time, quantity, email };

    fetch('https://the-captain-boil-server.vercel.app/order', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })
      .then(res => res.json())
      .then(data => {
        if (data?.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Purchase completed successfully.',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
          form.reset();
          navigate('/order');
        }
      });
  };

  return (
    <div className="mb-5 mt-5 grid lg:grid-cols-2 items-center">
      {selectedCard && (
        <>
          <OrderDetails
            name={selectedCard.name}
            description={selectedCard.description}
            price={selectedCard.price}
            email={user.email}
          />
          <OrderForm
            user={user}
            selectedCard={selectedCard} // Pass selectedCard as prop
            handleOrderSubmit={handleOrderSubmit}
          />
        </>
      )}
    </div>
  );
};

export default PurchasePage;
