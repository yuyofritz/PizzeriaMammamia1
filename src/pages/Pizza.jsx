import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!res.ok) throw new Error("Pizza no encontrada");
        const data = await res.json();
        setPizza(data);
      } catch (error) {
        console.error(error);
        setPizza(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-5">Cargando pizza...</p>;
  }

  if (!pizza) {
    return <p className="text-center mt-5">Pizza no encontrada</p>;
  }

  const handleAdd = () => {
    addToCart({
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
      img: pizza.img,
    });
  };

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
                <strong>
                  Precio: ${pizza.price.toLocaleString("es-CL")}
                </strong>
              </p>
              <button className="btn btn-dark" onClick={handleAdd}>
                Añadir al carrito 🛒
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;