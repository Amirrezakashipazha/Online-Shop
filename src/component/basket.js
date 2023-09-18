import { useDispatch, useSelector } from "react-redux";
import style from "./basket.module.css";
import ItemBasket from "./itembasket";
import { InBasketAddItem, InBasketRemoveItem } from "../store";

const Basket = () => {
  const Products = useSelector((state) => state.products.ProductsItem);
  console.log(Products);
  const TotalAmount = useSelector((state) => state.products.TotalAmount);
  const Dispath = useDispatch();
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
          onAdd={() =>
            Dispath(
              InBasketAddItem({
                ValueProduct: {
                  id: item.id,
                  name: item.name,
                  img: item.img,
                  description: item.description,
                  number: item.number,
                  price: item.price,
                },
              })
            )
          }
          onRemove={() =>
            Dispath(
              InBasketRemoveItem({
                ValueProduct: {
                  id: item.id,
                  name: item.name,
                  img: item.img,
                  description: item.description,
                  number: item.number,
                  price: item.price,
                },
              })
            )
          }
        />
      ))}
    </div>
  );
};

export default Basket;
