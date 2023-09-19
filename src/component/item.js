import { useDispatch, useSelector } from "react-redux";
import style from "./item.module.css";
import { AddItem, RemoveItem } from "../store";

const Item = ({
  price_item,
  descraption_item,
  img_item,
  name_item,
  id_item,
  number_item,
  style_item,
  class_item,
  numberOfProduct_item,
}) => {

  const Dispatch = useDispatch();
  
  return (
    <div className={`${style.item} ${class_item}`}>
      <img className={style.widthimg} src={img_item} alt="img-item" />
      <h4>{name_item}</h4>
      <h5>{numberOfProduct_item}</h5>
      <p>{descraption_item}</p>
      <div style={style_item}>
        <button
          className={style.btn}
          onClick={() =>
            Dispatch(
              AddItem({
                ValueProduct: {
                  id: id_item,
                  name: name_item,
                  img: img_item,
                  description: descraption_item,
                  number: number_item,
                  price: price_item,
                },
              })
            )
          }
        >
          +
        </button>
  
        <span>${price_item}</span>
        <button
          className={style.btn}
          onClick={() =>
            Dispatch(
              RemoveItem({
                ValueProduct: {
                  id: id_item,
                  name: name_item,
                  img: img_item,
                  description: descraption_item,
                  number: number_item,
                  price: price_item,
                },
              })
            )
          }
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Item;
