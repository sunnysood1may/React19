import { NavLink, Link } from "react-router";
import "./header.css";

function NavBar() {
  return (
    <div className="header">
      <div>
        <Link className="link" to={"/"}>
          <img width="200" src="https://www.pinpng.com/pngs/m/444-4442053_maersk-group-logo-maersk-line-hd-png-download.png" />
        </Link>
      </div>
      <div>
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/first">
              First
            </Link>
          </li>
          <li>
            <Link className="link" to="/markup">
              Markup
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="link" to="/college">
              College
            </Link>
          </li>
          <li>
            <Link className="link" to="/state">
              State
            </Link>
          </li>
          <li>
            <Link className="link" to="/toggle">
              Toggle
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
export const userKey = "123456";
