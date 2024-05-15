import { FaGoogle } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { FaGithub } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Components/Hook/useAuth";
import Swal from 'sweetalert2'

const LogIn = () => {









  const { signIn, signInWithGoogle, githubLogin } = useAuth();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const form = location?.state || '/';
  const onSubmit = data => {
    const { email, password } = data;
    signIn(email, password).then(result => {
      if (result.user) {
        navigate(form);
      }
    });
  };
  const handleGoogleLogin = () => {
    signInWithGoogle().then(result => {
      if (result.user) {
        navigate(form);
        Swal.fire({
          title: 'Success!',
          text: 'User Google login Successfully',
          icon: 'success',
          confirmButtonText: 'Cool',
        });
        form.reset();
      }
    });
  };

  const handleGithubLogin = () => {
    githubLogin().then(result => {
      if (result.user) {
        navigate(form);
        Swal.fire({
          title: 'Success!',
          text: 'User Github login Successfully',
          icon: 'success',
          confirmButtonText: 'Cool',
        });
        form.reset();
      }
    });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="md:max-w-md lg:max-w-7xl lg:w-[900px] w-full bg-white rounded-lg shadow-2xl overflow-hidden">

        <div className='grid lg:grid-cols-2 gap-2 justify-between'>
          <div className="text-center">
            <img className="mx-auto  w-auto lg:max-w-full lg:max-h-full lg:mt-20 " src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" alt="Phone image" />
          </div>

          <div className="p-8">

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input

                  type="email"

                  placeholder="email"


                  className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  {...register('email', { required: true })}

                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}

              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="password"


                  {...register('password', { required: true })}
                  className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-3"

                />
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}

              </div>
              <div className="flex justify-between mx-4 mb-4">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
              <p>
                Don't have an account?
                <NavLink to="/signUp" className="text-blue-600 ml-2">
                  Create an account
                </NavLink>
              </p>

            </form>
            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">OR</p>
            </div>
            <button onClick={handleGoogleLogin} className="mb-4 text-center justify-center w-full bg-[#dd4b39] hover:bg-blue-600 text-white font-bold py- px-4  rounded h-10 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
              <div className="lg:flex items-center text-center gap-3 m-auto lg:ml-12 lg:px-4 ">
                <i>
                  <FaGoogle />
                </i>
                <p> Continue with Google</p>
              </div>
            </button>
            <button onClick={handleGithubLogin} className="mb-4 w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 hover:bg-blue-500 text-white font-bold py- px-4 rounded ">

              <div className="lg:flex items-center text-center gap-3 m-auto lg:ml-12 lg:px-4 p-2">
                <i>
                  <FaGithub />
                </i>
                <p> Continue with Github</p>
              </div>
            </button>


          </div>
        </div>
      </div>
    </div>

  );
};

export default LogIn;