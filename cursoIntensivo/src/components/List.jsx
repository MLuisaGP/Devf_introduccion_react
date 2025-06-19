import { useState } from "react";

export function List(props) {
    const {datas, onSelected} = props;
    const [index,setIndex] =useState(0);
    const clickHandled = (i,element)=>{
        setIndex(i);
        onSelected?.(element);
    }
    return (
        <ul className="list-group">
            {datas.map((data,i) => {
                return (<li onClick={()=>{clickHandled(i,data)}} key={i} className={`list-group-item ${i===index?'active':''}`} >{data}</li>)
            })}
        </ul>
    )
}