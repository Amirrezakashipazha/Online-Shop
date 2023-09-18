import React, { useEffect, useState } from "react";
import Style from "./header.module.css";
import Basket from "./basket";
import { useSelector } from "react-redux";

const Header = () => {
  const [state, setState] = useState(false);
  const [ClassBasket, setClassBasket] = useState();

  const Products = useSelector((state) => state.products.ProductsItem);
  let TotalNumber = 0;
  for (let i = 0; i < Products.length; i++) {
    TotalNumber += Products[i].number;
  }
  useEffect(() => {
    if (ClassBasket === Style.animation) {
      setClassBasket("");
      setTimeout(() => setClassBasket(Style.animation), 100);
    } else {
      setClassBasket(Style.animation);
    }
    window.onclick = (e) => {
      const basketHeader = document.querySelector("#basket-header");
      try {
        if (
          !e.target.matches("#btn-clode-item-header>img") &&
          !e.target.matches("#btn-clode-item-header") &&
          !e.target.matches(".btn-header") &&
          !basketHeader.contains(e.target)
        ) {
          setState(false);
        }
      } catch (error) {
        // console.log(error);
      }
    };
  }, [Products]);

  return (
    <div className={Style.header}>
      <h1>Logo</h1>
      <div className={Style.container}>
        <button
          className={`${Style.btn} btn-header`}
          onClick={() =>
            setState(() => {
              if (state) {
                setState(false);
              } else {
                setState(true);
              }
            })
          }
        >
          basket
          <span className={ClassBasket}>{TotalNumber}</span>
        </button>
        {state && <Basket />}
      </div>
    </div>
  );
};

export default Header;
