export function Card(props) {
  const { children } = props;
  return (
    <>
      <div className="card" style={{ "width": "18rem" }}>
        {children}
      </div>
    </>
  );
}

export function CardBody(props) {
  const {title, body} = props;
  return (
    <>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
      </div>
    </>
  );
}
