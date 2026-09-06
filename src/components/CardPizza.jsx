const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt={name} />

        <div className="card-body text-center">
          <h3 className="card-title">{name}</h3>

          <p>🍕 {ingredients.join(", ")}</p>

          <h4>${price.toLocaleString("es-CL")}</h4>

          <div className="d-flex justify-content-center gap-2">
            <button className="btn btn-outline-dark">
              Ver más 👀
            </button>

            <button className="btn btn-dark">
              Añadir 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;