import { useEffect, useState } from "react";
import Modal from "./component/Modal/Modal";
import { useSelector } from "react-redux";
import style from "../src/component/item/item.module.css";

const LimitasionOfLocalStorage = () => {
  const [state, setState] = useState(false);
  const [classModalFadeOut, setstateclassModalFadeOut] = useState(false);
  const Products = useSelector((state) => state.products.ProductsItem);

  useEffect(() => {
    var totalSpace = 5 * 1024 * 1024; // Total capacity of LocalStorage (5MB)
    var usedSpace = 0;
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key);
      usedSpace += key.length + value.length;
    }
    var freeSpace = (totalSpace - usedSpace) / 1048576;
    if (freeSpace < 0.009979019165039) {
      setState(true);
    }
  }, [Products]);

  if (state) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "scroll";
  }

  return (
    <>
      {state && (
        <Modal
          propsHeight={"50%"}
          propsWidth={"50%"}
          onClick={() => {
            setstateclassModalFadeOut(true);
            setState(false);
          }}
          classModalFadeOut={classModalFadeOut}
        >
          <div style={{ textAlign: "center" }}>
            <h3 style={{ width: "100%" }}>
              Your Localstorage is full press ok to clear it
            </h3>
            <button
              onClick={() => {
                setstateclassModalFadeOut(true);
                setState(false);
                localStorage.clear();
              }}
              className={style.btn}
            >
              ok
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};
export default LimitasionOfLocalStorage;
