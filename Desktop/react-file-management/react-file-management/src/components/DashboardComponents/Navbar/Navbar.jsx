
import { Link } from "react-router-dom";
import { SignOutUser } from "../../../redux/actionCreators/authActionCreator";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand-lg navbabr-light bg-white shadow-sm p-3">
      <Link className="navbar-brand ms-5 " to="/dashboard">
        Folder Structure Management Application
      </Link>

      <ul className="navbar-nav ms-auto me-5">
        {isAuthenticated ? (
          <>
            <li className="nav-item mx-2">
              <p className="my-0 mt -2 mx-2">
                <span className="text-dark">Welcome, </span>
                <span className="fw-bold">{user.displayname}</span>
              </p>
            </li>
            <li className="nav-item mx-2">
              <Link className=" btn btn-primary " to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <button className=" btn btn-success " onClick={()=> dispatch(SignOutUser())}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item mx-2">
              <Link className=" btn btn-primary btn-sm" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className=" btn btn-success btn-sm" to="/register">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
