import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = ({ click }) => {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        {/* <h2 onClick={<Link to="/"></Link>}>ShopLine</h2> */}
        <Link to="/" className="logo__name">
          ShopLine
        </Link>
      </div>
      <ul className="navbar_links">
        <li>
          <Link to="/cart">
            <i class="fa-solid fa-cart-shopping"></i>
            Cart
            <span className="navbar_cartVal"> 0</span>
          </Link>
        </li>

        <li>
          <Link to="/">
            <i class="fa-solid fa-house"></i>
            Home
          </Link>
        </li>
      </ul>
      <div className="navbar_menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
