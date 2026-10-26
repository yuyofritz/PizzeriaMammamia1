import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const Navbar = () => {
  const { total } = useCart();
  const { token, logout } = useUser();

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
          <button onClick={logout}>🔒 Logout</button>
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