
import { useUser } from "../context/UserContext";

const Profile = () => {
  const { logout } = useUser();

  return (
    <div className="container mt-5 text-center">
      <h2 className="mb-4">Perfil de Usuario</h2>
      <p className="fs-5">
        <strong>Email:</strong> usuario@ejemplo.com
      </p>
<button className="btn btn-danger mt-3" onClick={logout}>
  🔒 Cerrar sesión
</button> 
    </div>
  );
};

export default Profile;
