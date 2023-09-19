import { useDispatch, useSelector } from "react-redux";
import style from "./basket.module.css";
import ItemBasket from "./itembasket";
import { ClearBasket, InBasketAddItem, InBasketRemoveItem } from "../store";
const Basket = () => {
  const Products = useSelector((state) => state.products.ProductsItem);
  const TotalAmount = useSelector((state) => state.products.TotalAmount);
  const Dispatch = useDispatch();
  return (
    <div className={style.basket} id="basket-header">
      <div className={style["header-basket"] }>
        <h3>TotalAmount : ${TotalAmount}</h3>
        <button onClick={() => Dispatch(ClearBasket())}>clear basket</button>
      </div>
      {Products.map((item) => (
        <ItemBasket
          id={item.id}
          img={item.img}
          name={item.name}
          key={item.id}
          number={item.number}
          price={item.price}
          onAdd={() =>
            Dispatch(
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
            Dispatch(
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
