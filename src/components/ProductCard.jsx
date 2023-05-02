import { useNavigate } from "react-router-dom";

export default function ProductCard({
  product,
  product: { id, image, title, category, price },
}) {
  const navigate = useNavigate();
  const won = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <li
      onClick={() => {
        navigate(`/products/${id}`, { state: { product } });
      }}
      className="overflow-hidden rounded-lg shadow-md cursor-pointer hover:scale-105"
    >
      <img className="w-full" src={image} alt={title} />
      <div className="flex items-center justify-between px-2 mt-2 text-base">
        <h3 className="truncate">{title}</h3>
        <p>{`${won}원`}</p>
      </div>
      <p className="px-2 mb-2 text-gray-600">{category}</p>
    </li>
  );
}
