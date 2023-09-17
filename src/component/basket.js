import { useSelector } from "react-redux";
import style from "./basket.module.css";
import ItemBasket from "./itembasket";

const Basket = () => {
  const Products = JSON.parse(localStorage.getItem("Products"));
  const TotalAmount = useSelector((state) => state.products.TotalAmount);

  return (
    <div className={style.basket} id="basket-header">
      <h3>TotalAmount : ${TotalAmount}</h3>
      {Products.map((item) => (
        <ItemBasket
        id={item.id}
          img={item.img}
          name={item.name}
          key={item.id}
          number={item.number}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default Basket;
