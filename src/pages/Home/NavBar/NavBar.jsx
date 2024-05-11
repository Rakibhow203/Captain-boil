



import { AuthContext } from '../../../providers/AuthProvider';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Swal from 'sweetalert2';


const NavBar = () => {
  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    Swal.fire({
      title: 'Are you sure you want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log me out!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Proceed with logout if confirmed
        logOut();
      }
    });
  };

  return (
    <div className='navbar  shadow-2xl container px-4 mx-auto bg-orange-300 rounded-xl'>
      <div className='flex-1'>
        <Link to='/' className='flex gap-2 items-center'>
          <img className='w-auto h-14 rounded' src="https://i.ibb.co/VwxzdmZ/The-Captain-s-Boil-removebg-preview.png" alt='' />
          <span className='font-bold hover:bg-orange-100 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-30 font-sans text-xl'>The Captain's Boil</span>
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1 font-serif font-semibold'>


          <li>
            {/* Use NavLink for Home with activeClassName */}
            <NavLink exact to='/' activeClassName='active'>Home</NavLink>
          </li>

          <li>
            <NavLink to='/allFoods' activeClassName='active'>All Foods</NavLink>
          </li>
          <li>
            <NavLink to='/Gallery' activeClassName='active'>Gallery</NavLink>
          </li>


          {!user && (
            <li>
              <NavLink to='/login' activeClassName='active'>Login</NavLink>
            </li>
          )}
        </ul>

        {user && (
          <div className='dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div title={user?.displayName} className='w-10 rounded-full'>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-orange-300 rounded-box w-52 text-black font-bold'
            >
              <li>
                <Link to='/myAddFoodItem' className='justify-between'>
                  My added food items
                </Link>
              </li>
              <li>
                <Link to='/addFoodItem'>Add a food item</Link>
              </li>
              <li>
                <Link to='/myOrder'>My ordered food items</Link>
              </li>

              <li className='mt-2'>
                <button
                  onClick={handleLogOut}
                  className='bg-gray-200 block text-center'
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>


  );
};

export default NavBar;