export default function ProductCard({
  product: { id, image, title, category, price },
}) {
  const won = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <li className="overflow-hidden rounded-lg shadow-md cursor-pointer">
      <img className="w-full" src={image} alt={title} />
      <div className="flex items-center justify-between px-2 mt-2 text-base">
        <h3 className="truncate">{title}</h3>
        <p>{`${won}원`}</p>
      </div>
      <p className="px-2 mb-2 text-gray-600">{category}</p>
    </li>
  );
}
