import { Link } from "react-router-dom";

export function Links(props){
    const {children, url} = props;
    return (
        <>
            <li><Link to={url} >{children}</Link></li>
        </>
    )
}