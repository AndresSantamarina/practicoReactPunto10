import { Card, ListGroup } from "react-bootstrap";

const CardPeliculas = () => {
    return (
        <Card className="m-3 cardPelicula">
        <Card.Body>
          <Card.Title>Título de la película</Card.Title>
          <Card.Text>
            Descripción de la película Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo neque dolorum unde dolore harum odit earum voluptatum aliquid magnam nihil quisquam, expedita similique, laudantium molestias reprehenderit blanditiis ipsum rerum modi.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Categoría de la película</ListGroup.Item>
        </ListGroup>
      </Card>
    );
};

export default CardPeliculas;