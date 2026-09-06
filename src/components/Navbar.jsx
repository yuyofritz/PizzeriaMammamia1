const Navbar = () => {
const total = 25000; 
const token = false;

return (
    <nav>
        <button>🍕 Home</button>

    {token ? (
        <>
        <button>🔓 Profile</button>
        <button>🔒 Logout</button>
        </>
) : (
        <>
        <button>🔐 Login</button>
        <button>🔐 Register</button>
        </> 
    )}

    <button>🛒 Total: ${total.toLocaleString("es-CL")}</button>
    </nav> 
    );
};

export default Navbar;
