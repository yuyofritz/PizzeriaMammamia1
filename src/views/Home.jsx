import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { pizzas } from "../pizzas";

const Home = () => {
return (
    <>
    <Header />
    <div className="container py-5">
        <div className="row">
        {pizzas.map((pizza) => (
            <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            />
        ))}
        </div>
    </div>
    </>
);
};

export default Home;
