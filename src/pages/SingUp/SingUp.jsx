

import { useState } from 'react';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import useAuth from '../../Components/Hook/useAuth';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const SingUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const form = location?.state || '/';

  const onSubmit = async data => {
    const { email, password } = data;

    // Password validation
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    if (
      !uppercaseRegex.test(password) ||
      !lowercaseRegex.test(password) ||
      password.length < 6
    ) {
      // Show sweet alert for password requirements not met
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long',
      });
      return;
    }

    try {
      // Call your createUser function
      const result = await createUser(email, password);

      if (result.user) {
        // Show success sweet alert or redirect
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Registration successful!',
        }).then(() => {
          navigate(form);
        });
      }
    } catch (error) {
      // Handle registration error
      console.error('Registration error:', error);
      // Show error sweet alert
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Registration failed. Please try again.',
      });
    }
  };
  return (
    <div>


      <div className="min-h-screen flex items-center   justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:max-w-3xl sm:max-w-xl  w-full space-y-8 shadow-2xl bg-orange-100 rounded-lg lg:max-w-full lg:max-h-full">
          <div className="flex justify-center">
            <img src="https://i.ibb.co/mGNfJF3/1642851517-Login-removebg-preview.png" alt="" className="lg:max-h-full md:max-h-96  " />
          </div>
          <div className="flex flex-col space-y-6   p-10">
            <h2 className="text-center   text-4xl font-extrabold text-yellow-600 ">Register now!!</h2>
            <form className=" " onSubmit={handleSubmit(onSubmit)}>
              {/* Your form inputs */}
              <div className="form-control space-y-2  text-center ">
                {/* Your input fields */}

                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="input input-bordered input-style hover:text-orange-400 rounded w-3/4 items-center p-2"
                  {...register('fullName', { required: true })}
                />
                {errors.fullName && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered rounded  w-3/4 hover:text-orange-400 p-2 items-center"
                  {...register('email', { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Image URL"
                  className="input input-bordered p-2 input-style w-3/4 hover:text-orange-400 rounded items-center"
                  {...register('image')}
                />
              </div>
              <div className="form-control">
                <div className="relative ">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="password"
                    className="input input-bordered input-style w-3/4  p-2  hover:text-orange-400 rounded items-center"
                    {...register('password', { required: true })}
                  />{' '}
                  {errors.email && (
                    <span className="text-red-500">This field is required</span>
                  )}
                  <span
                    className="absolute mt-4 -ml-5 "
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <p className="font-bold">
                  Have an Account?
                  <NavLink to="/login" className="text-blue-600 ml-3">
                    Login
                  </NavLink>
                </p>
              </div>

              <div className="button-center text-center text-black ">
                <button className="btn btn-outline btn-warning  font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Registration</button>
              </div>
            </form>
            <div className="text-center  p-2">
              <p className='text-black font-serif'>Already have an account? <a href="/login" className="text-yellow-400 hover:text-orange-500 font-bold font-serif ">Login</a></p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default SingUp;