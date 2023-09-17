import { useDispatch } from "react-redux";
import style from "./itembasket.module.css";
import { DeleteItem } from "../store";
const ItemBasket = ({ name, img, number = 1, price ,id}) => {
  const Dispatch = useDispatch();
  return (
    <div className={style.itembasket}>
      <button
        onClick={() =>
          Dispatch(
            DeleteItem({
              ValueProduct: {
                id:id,
                name: name,
                img: img,
                number: number,
                price: price,
              },
            })
          )
        }
        className={style.close}
        id="btn-clode-item-header"
      >
        <img src="./img/close.svg" alt="close"/>
      </button>

      <img src={img} alt="" />
      <h5>{name}</h5>
      <span>number : {number}</span>
      <p>price : ${price}</p>
    </div>
  );
};
export default ItemBasket;
