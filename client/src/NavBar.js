
import { Link } from "react-router-dom";

function NavBar({ user, handleLogoutClick }) {

  return (
    <nav className="navbar">

      <Link className="link" to="/"> Home </Link>
    
      {user ? (
        <>
          <Link className="link" to="/contactus"> {" "} Contact Us{" "} </Link>
          <Link className="link" to="/" onClick={handleLogoutClick}> Logout </Link>
        </>
      ) : (
        <>
          <Link className="link" to="/signup"> {" "} Signup{" "} </Link>
          <Link className="link" to="/login"> {" "} Login{" "} </Link>
          <Link className="link" to="/contactus">{" "} Contact Us{" "}</Link>
        </>
      )}
    </nav>
  );
}

export default NavBar;
