const Cart = ({ cart, setCart }) => {
const increaseCount = (id) => {
    setCart(
    cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item,
    ),
    );
};

const decreaseCount = (id) => {
    setCart(
    cart
        .map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item,
        )
        .filter((item) => item.count > 0),
    );
};

  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

return (
    <div className="container py-5" style={{ maxWidth: "600px" }}>
    <h2 className="mb-4">Detalles del pedido:</h2>

    {cart.length === 0 ? (
        <p className="text-muted text-center">El carrito está vacío</p>
    ) : (
        cart.map((item) => (
        <div
            key={item.id}
            className="d-flex align-items-center gap-3 mb-3 pb-3 border-bottom"
        >
            <img
            src={item.img}
            alt={item.name}
            style={{
                width: "60px",
                height: "60px",
                objectFit: "cover",
                borderRadius: "6px",
            }}
            />
            <span className="flex-grow-1 fw-medium">{item.name}</span>
            <span className="fw-semibold">
            ${item.price.toLocaleString("es-CL")}
            </span>
            <div className="d-flex align-items-center gap-2">
            <button
                className="btn btn-outline-danger btn-sm"
                style={{ width: "32px" }}
                onClick={() => decreaseCount(item.id)}
            >
                -
            </button>
            <span
                className="fw-bold"
                style={{ minWidth: "20px", textAlign: "center" }}
            >
                {item.count}
            </span>
            <button
                className="btn btn-outline-primary btn-sm"
                style={{ width: "32px" }}
                onClick={() => increaseCount(item.id)}
            >
                +
            </button>
            </div>
        </div>
        ))
    )}

    <h3 className="mt-4">Total: ${total.toLocaleString("es-CL")}</h3>
    <button className="btn btn-dark mt-2">Pagar</button>
    </div>
);
};

export default Cart;
