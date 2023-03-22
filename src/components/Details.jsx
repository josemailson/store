export function Details(props) {
    return (
      <div className="details">
        {props.images.map((image, key) => {
            return <img src={image} alt="" className="imgCard" key={key}/>;
        })}
        <span>{props.title}</span>
        <span>R$ {(props.price).toFixed(2)}</span>
        <p>{props.description}</p>
      </div>
    );
  }