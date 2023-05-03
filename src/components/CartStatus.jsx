import { AiOutlineShoppingCart } from "react-icons/ai";
import useCart from "./../hooks/useCart";

export default function CartStatus() {
  const {
    cartQuery: { data: products },
  } = useCart();

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
