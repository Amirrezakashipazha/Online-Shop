import style from "./itembasket.module.css";
const ItemBasket = ({ name, img, number=1,price }) => {
  return (
    <div className={style.itembasket}>
      <img src={img} alt="" />
      <h5>{name}</h5>
      <span>number : {number}</span>
      <p>price : ${price}</p>
    </div>
  );
};
export default ItemBasket;
