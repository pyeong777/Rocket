import { getProducts } from "../api/firebase";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";

export default function Products() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products"], () => getProducts(), { statleTime: 1000 * 60 });
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className="grid gap-6 p-6 gird-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}
