import { Fragment } from "react/jsx-runtime";

function Card() {
  return (
    <div className="card"
      style={{
        width: '400px',
        margin: '20px'
      }}
    >
      <div className="card-body" style={{backgroundColor: 'aquamarine'}}>
        < CardBody/>
      </div>
    </div>
  );

}

function CardBody() {
  // tambien podemos usar <></> en ves de <Fragment></Fragment> asi no importamos
  // import { Fragment } from "react/jsx-runtime";
  return (
    <Fragment>
      <h5 className="card-title" style={{color: 'red'}}>Titulo de la targeta</h5>

      <p className="card-text">
        Some quick example text to build on the card title and make
        up the bulk of the card's content.
      </p>

      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </Fragment>
  )
}

export default Card;
