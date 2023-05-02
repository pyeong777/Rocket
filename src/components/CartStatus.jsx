import { AiOutlineShoppingCart } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../context/AuthContext";
import { getCart } from "../api/firebase";

export default function CartStatus() {
  const { uid } = useAuthContext();
  const { data: products } = useQuery(["carts"], () => getCart(uid));

  return (
    <div className="relative">
      <AiOutlineShoppingCart className="text-xl" />
      {products && (
        <p className="absolute w-4 h-4 text-xs font-bold text-center text-white rounded-full bg-brand -top-2 -right-2">
          {products.length}
        </p>
      )}
    </div>
  );
}
