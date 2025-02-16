import { NavLink, Link } from "react-router";

function Header(){
    return <div>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/about">About</Link>&nbsp;
        <Link to="/login">Login</Link>
    </div>
}

export default Header;