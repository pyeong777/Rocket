import { Link } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import User from "./User";
import Button from "./ui/Button";
import { useAuthContext } from "../context/AuthContext";

export default function NavBar() {
  const { user, login, logout } = useAuthContext();

  return (
    <header className="flex justify-between w-full py-2 border-b border-gray-300">
      <Link to="/" className="flex items-center ml-4 text-3xl text-brand">
        <FiShoppingBag />
        <h1>Shoppy</h1>
      </Link>
      <nav className="flex items-center gap-4 mr-4 font-semibold ">
        <Link to="/products">
          <p>Products</p>
        </Link>
        {user && (
          <Link to="/carts">
            <p>Carts</p>
          </Link>
        )}

        {user && user.isAdmin && (
          <Link to="/products/new">
            <BsFillPencilFill />
          </Link>
        )}

        {user && <User user={user} />}
        {!user && <Button text={"Login"} onClick={login} />}
        {user && <Button text={"Logout"} onClick={logout} />}
      </nav>
    </header>
  );
}
