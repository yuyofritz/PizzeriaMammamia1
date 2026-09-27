const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt={name} />

        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <hr />
          <p className="text-muted mb-1">Ingredientes:</p>
          <ul className="list-unstyled">
            {ingredients.map((ingredient, index) => (
              <li key={index}>🍕 {ingredient}</li>
            ))}
          </ul>
          <hr />
          <h4>${price.toLocaleString("es-CL")}</h4>

          <div className="d-flex justify-content-center gap-2">
            <button className="btn btn-outline-dark">Ver más 👀</button>
            <button className="btn btn-dark">Añadir 🛒</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;