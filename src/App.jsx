import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Home from "./views/Home";
import RegisterPage from "./views/RegisterPage";
// import LoginPage from "./views/LoginPage";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <RegisterPage />
      {/* <LoginPage /> */}
      <Footer />
    </div>
  );
};

export default App;