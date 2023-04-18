import { Link } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { login, logout, onUserStateChange } from "./../api/firebase";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  const handleLogin = () => {
    login().then((user) => setUser(user));
  };

  const handleLogout = () => {
    logout().then((user) => setUser(user));
  };
  return (
    <header className="flex justify-between py-2 border-b border-gray-300">
      <Link to="/" className="flex items-center ml-4 text-3xl text-brand">
        <FiShoppingBag />
        <h1>Shoppy</h1>
      </Link>
      <nav className="flex items-center gap-4 mr-4 font-semibold">
        <Link to="/products">
          <p>Products</p>
        </Link>
        <Link to="/carts">
          <p>Carts</p>
        </Link>
        <Link to="/products/new">
          <BsFillPencilFill />
        </Link>
        {!user && <button onClick={handleLogin}>Login</button>}
        {user && <button onClick={handleLogout}>Logout</button>}
      </nav>
    </header>
  );
}
