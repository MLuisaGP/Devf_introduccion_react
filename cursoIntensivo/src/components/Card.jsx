// interface Props{
//     body:String,
//     text?:String,//opcional

// }
// function Card(props:Props) { //esto es cuando tenemos tsx
function Card(props) {
    const {children}=props;
    return (
        <div className="card" style={{ 'width': "350px" }}>
            <div className="card-body">
                {/* <CardBody /> */}
                {children}
            </div>
        </div>
    )
}

export function CardBody(props) {
    const {title, body}=props;
    return (
        <>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{body}</p>
        </>
    );
}
export default Card;