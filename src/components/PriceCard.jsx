export default function PriceCard({ text, price }) {
  const won = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className="p-8 mx-2 text-base text-center bg-gray-50 rounded-2xl md:text-lg">
      <p>{text}</p>
      <p className="text-base font-bold text-brand md:text-lg">{won}원</p>
    </div>
  );
}
