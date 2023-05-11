import Navbar from './Navbar';
// ...
import { Link } from 'react-router-dom';
import logo from "../Mahapatra.svg"

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          <img src={logo} alt="" />
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
