import { useState } from "react";

export function Button(props) {
  const { onClick, classButton, children } = props;
  const [actualClass, setActualClass] = useState(classButton);
  const [disable, setDisable] = useState(false);
  const [btnTxt, setBtnTxt] = useState(children);
  const handleClick = (e) => {
    setActualClass("secondary");
    setDisable(!disable);
    setBtnTxt(disable?"Cargando ...":children);
    if (!disable) {
      onClick?.(e);
    }
  };

  return (
    <>
      <button
        type="button"
        className={`btn btn-${actualClass}`}
        onClick={handleClick}
      >
        {btnTxt}
      </button>
    </>
  );
}
