export function Button({onClick,children}){

    const handledClick = ()=>{
        onClick()
    }

    return(
        <button onClick={handledClick}>{children}</button>
    )
}