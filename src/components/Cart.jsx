import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const Cart = () => {
  const { cart, increaseCount, decreaseCount, total } = useCart();
  const { token } = useUser();

  return (
    <div className="container py-5" style={{ maxWidth: "600px" }}>
      {/* ... lista del carrito ... */}

      <h3 className="mt-4">Total: ${total.toLocaleString("es-CL")}</h3>
      <button className="btn btn-dark mt-2" disabled={!token}>
        Pagar
      </button>
    </div>
  );
};

export default Cart;