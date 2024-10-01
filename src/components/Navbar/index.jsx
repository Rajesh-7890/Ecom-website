import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ cartCount }) => {
  return (
    <div className="navbar-style">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="navbarLogo.png" alt="Logo" className="logo" />
          <h1>ECOM WEBSITE</h1>
        </div>
        <div className="navbar-search">
          <input type="text" placeholder="Search..." className="search-bar" />
        </div>
        <div className="navbar-cart">
          <Link to="/cart">
            <ShoppingCartOutlined className="cart-icon" />
          </Link>
          <span className="cart-count">
            <h2>{cartCount}</h2>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
