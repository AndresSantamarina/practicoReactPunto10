import { Button, Card, CardFooter, ListGroup } from "react-bootstrap";

const CardPeliculas = ({ arrayPeliculas, borrarPelicula }) => {
  return (
    <>
      {arrayPeliculas.map((pelicula, posicionPelicula) => (
        <Card className="m-3 cardPelicula" key={posicionPelicula}>
          <Card.Body>
            <Card.Title>{pelicula.nombrePelicula}</Card.Title>
            <Card.Text>{pelicula.descripcion}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{pelicula.genero}</ListGroup.Item>
          </ListGroup>
          <CardFooter>
            <Button variant="danger" onClick={() => borrarPelicula(pelicula)}>
              Borrar
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default CardPeliculas;
