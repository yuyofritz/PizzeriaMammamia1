import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { total } = useCart();
  const token = false;

  return (
    <nav>
      <Link to="/">
        <button>🍕 Home</button>
      </Link>

      {token ? (
        <>
          <Link to="/profile">
            <button>🔓 Profile</button>
          </Link>
          <button>🔒 Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">
            <button>🔐 Login</button>
          </Link>
          <Link to="/register">
            <button>🔐 Register</button>
          </Link>
        </>
      )}

      <Link to="/cart">
        <button>🛒 Total: ${total.toLocaleString("es-CL")}</button>
      </Link>
    </nav>
  );
};

export default Navbar;
