import { useState } from "react";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();


    if (!email.trim() || !password.trim()) {
        alert("Todos los campos son obligatorios");
        return;
    }

    if (password.length < 6) {
        alert("El password debe tener al menos 6 caracteres");
        return;
    }

    alert("Authentication successful!");
    };

    return (
    <div className="container mt-5">
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <div className="mb-3">
            <label className="form-label">Email</label>
            <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>

        <div className="mb-3">
            <label className="form-label">Password</label>
            <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>

        <button type="submit" className="btn btn-primary">
            Login
        </button>
        </form>
    </div>
    );
};

export default LoginPage;
