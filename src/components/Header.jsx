import headerImg from '../assets/Header.jpg'

const Header = () => {
  return (
    <header
      style={{
        backgroundImage: `url(${headerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      className="text-center py-5 text-white"
    >
      <h1>¡Pizzería Mamma Mía!</h1>
      <p>Tenemos las mejores pizzas que podrás encontrar</p>
    </header>
  )
}

export default Header
