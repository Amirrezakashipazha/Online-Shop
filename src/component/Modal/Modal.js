import React from "react";
import ReactDOM from "react-dom";
import Style from "./Modal.module.css";

function ContentModal({
  children,
  classModalFadeOut,
  propsWidth,
  propsHeight,
}) {
  return (
    <div
      className={`${Style.modal} ${Style["animation-fade-in"]} ${
        classModalFadeOut && Style["animation-fade-out"]
      }`}
      style={{ width: propsWidth, height: propsHeight }}
    >
      <div>{children}</div>
    </div>
  );
}
function BgDark({ onClick, classModalFadeOut }) {
  return (
    <div
      className={`${Style["bg-dark"]} ${Style["animation-fade-in"]} ${
        classModalFadeOut && Style["animation-fade-out"]
      }`}
      onClick={onClick}
    ></div>
  );
}

function Modal({
  onClick,
  classModalFadeOut,
  children,
  propsWidth,
  propsHeight,
}) {

  
  return (
    <>
      {ReactDOM.createPortal(
        <BgDark onClick={onClick} classModalFadeOut={classModalFadeOut} />,
        document.getElementById("container-bg-dark")
      )}
      {ReactDOM.createPortal(
        <ContentModal
          propsWidth={propsWidth}
          propsHeight={propsHeight}
          children={children}
          classModalFadeOut={classModalFadeOut}
        />,
        document.getElementById("container-modal")
      )}
    </>
  );
}

export default Modal;
