import { useLocation } from "react-router-dom";
import { useState } from "react";
import Button from "../components/ui/Button";
import { addOrUpdateToCart } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export default function ProductDetail() {
  const { uid } = useAuthContext();
  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();

  const [selected, setSelected] = useState(options && options[0]);

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  //장바구니에 추가
  const handleClick = (e) => {
    const product = { id, image, title, price, option: selected, quantity: 1 };
    addOrUpdateToCart(uid, product);
  };

  const won = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <>
      <section className="flex flex-col justify-center p-4 md:flex-row ">
        <img
          className="w-auto max-w-full max-h-full px-4"
          src={image}
          alt={title}
        />
        <div className="flex flex-col px-4 basis-5/12">
          <p className="mt-4 text-gray-500 md:mt-0">{category}</p>
          <h2 className="pb-2 text-xl font-bold">{title}</h2>
          <p className="pb-2 border-b border-gray-300">{won}원</p>
          <p className="pt-2">{description}</p>
          <div className="flex items-center">
            <label className="font-bold text-brand" htmlFor="select">
              사이즈:
            </label>
            <select
              className="flex-1 p-2 m-4 border-2 outline-none border-brand"
              id="select"
              onChange={handleSelect}
              value={selected}
            >
              {options &&
                options.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
            </select>
          </div>
          <Button text="장바구니에 추가" onClick={handleClick} />
        </div>
      </section>
    </>
  );
}
