import { useState } from "react";

export function List(props) {
  const [index, setIndex] = useState("");
  const { datas, onSelect } = props;
  const handleClick = (indice, elemento) => {
    setIndex(indice);
    onSelect?.(elemento); //Si existe la funcion se ejecuta si no no
  };
  return (
    <>
      <ul className="list-group">
        {datas.map((elemento,indice) => (
          <li
            onClick={() => handleClick(indice,elemento)}
            key={indice}
            className={"list-group-item "+(index===indice?'active':'')}>
            {elemento}
          </li>
        ))}
      </ul>
    </>
  );
}
