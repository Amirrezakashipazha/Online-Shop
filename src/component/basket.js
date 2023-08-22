import { useSelector } from "react-redux";
import style from "./basket.module.css";
import ItemBasket from "./itembasket";

const Basket = () => {
  const Products = useSelector((state) => state.products.ProductsItem);
  const TotalAmount = useSelector((state) => state.products.TotalAmount);

  return (
    <div className={style.basket}>
      <h3>TotalAmount : ${TotalAmount}</h3>
      {Products.map((item) => (
        <ItemBasket
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
