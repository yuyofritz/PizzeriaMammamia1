import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { pizzaCart } from "./pizzas";
// import Home from "./views/Home";
// import RegisterPage from "./views/RegisterPage";
// import LoginPage from "./views/LoginPage";

const App = () => {
  const [cart, setCart] = useState(pizzaCart);

  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar total={total} />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      <Cart cart={cart} setCart={setCart} />
      <Footer />
    </div>
  );
};

export default App;