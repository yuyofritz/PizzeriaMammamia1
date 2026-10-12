import { pizzas } from "../pizzas";

const Pizza = () => {
const pizza = pizzas.find((p) => p.id === "P001");

if (!pizza) {
    return <p className="text-center mt-5">Pizza no encontrada</p>;
}

return (
    <div className="container mt-4">
    <div
        className="card mb-3"
        style={{ maxWidth: "800px", margin: "0 auto" }}
>
        <div className="row g-0">
        <div className="col-md-5">
            <img
            src={pizza.img}
            className="img-fluid rounded-start h-100"
            alt={pizza.name}
            style={{ objectFit: "cover" }}
            />
        </div>
        <div className="col-md-7">
            <div className="card-body">
            <h3 className="card-title text-capitalize">{pizza.name}</h3>
            <hr />
            <p className="card-text">
                <strong>Ingredientes:</strong>
            </p>
            <ul>
                {pizza.ingredients.map((ingredient, index) => (
                <li key={index}>🍕 {ingredient}</li>
                ))}
            </ul>
            <p className="card-text fs-4">
                <strong>Precio: ${pizza.price.toLocaleString("es-CL")}</strong>
            </p>
            <button className="btn btn-dark">Añadir al carrito 🛒</button>
            </div>
        </div>
        </div>
    </div>
    </div>
);
};

export default Pizza;
