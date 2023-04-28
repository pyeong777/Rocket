export default function ProductCard({
  product: { id, image, title, category, price },
}) {
  const won = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <li>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{`${won}원`}</p>
      </div>
      <p>{category}</p>
    </li>
  );
}
