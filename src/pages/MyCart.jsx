import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../context/AuthContext";
import { getCart } from "../api/firebase";
import CartItem from "./../components/CartItem";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaEquals } from "react-icons/fa";
import PriceCard from "../components/PriceCard";
import Button from "./../components/ui/Button";

//배송비
const SHIPPING = 3000;

export default function MyCart() {
  const { uid } = useAuthContext();
  const { isLoading, data: products } = useQuery(["carts"], () => getCart(uid));

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (prev, current) =>
        prev + parseInt(current.price) * parseInt(current.quantity),
      0
    );

  return (
    <section className="flex flex-col p-8">
      <p className="pb-4 text-xl font-bold text-center border-b border-gray-300">
        내 장바구니
      </p>
      {!hasProducts && (
        <p className="text-2xl font-bold text-center text-brand">
          장바구니에 상품이 없습니다.
        </p>
      )}
      {hasProducts && (
        <>
          <ul className="p-4 px-8 mb-8 border-b border-gary-300">
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} uid={uid} />
              ))}
          </ul>
          <div className="flex items-center justify-between px-2 mb-6 md:px-8 lg:px-16">
            <PriceCard text="상품 총액" price={totalPrice} />
            <BsFillPlusCircleFill className="shrink-0" />
            <PriceCard text="배송액" price={SHIPPING} />
            <FaEquals className="shrink-0" />
            <PriceCard text="총 가격" price={totalPrice + SHIPPING} />
          </div>
          <Button text="주문하기" />
        </>
      )}
    </section>
  );
}
