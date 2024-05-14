import LogIn from "../../pages/LogIn/LogIn";
import useAuth from "../Hook/useAuth";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (!user) {
    return <LogIn></LogIn>;
  }
  if (loading) return <p>Loading....</p>;
  return <div>{children}</div>;


};

export default PrivateRoute;