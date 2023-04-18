import { Link } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { login, logout, onUserStateChange } from "./../api/firebase";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

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
        {!user && <button onClick={login}>Login</button>}
        {user && <button onClick={logout}>Logout</button>}
      </nav>
    </header>
  );
}
