import { Link } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";

export default function NavBar() {
  return (
    <header className="flex p-4">
      <Link to="/" className="flex justify-center">
        <FiShoppingBag />
        <h1>Shoppy</h1>
      </Link>
      <nav>
        <Link to="/products">
          <p>Products</p>
        </Link>
        <Link to="/carts">
          <p>Carts</p>
        </Link>
        <Link to="/products/new">
          <BsFillPencilFill />
        </Link>
        <button>Login</button>
      </nav>
    </header>
  );
}
