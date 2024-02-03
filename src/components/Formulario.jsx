import { Form } from "react-bootstrap";
import CardPeliculas from "./CardPeliculas";

const Formulario = () => {
  return (
    <section>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre de la película</Form.Label>
          <Form.Control type="text" placeholder="Por ejemplo: One Piece Red" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripción de la película</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSelect">
          <Form.Select aria-label="Default select example">
            <option>Seleccionar el género de la película</option>
            <option value="1">Comedia</option>
            <option value="2">Drama</option>
            <option value="3">Infantil</option>
          </Form.Select>
        </Form.Group>
      </Form>
      <article className="container my-3">
        <div className="d-flex flex-wrap justify-content-center">
          <CardPeliculas />
          <CardPeliculas />
          <CardPeliculas />
          <CardPeliculas />
        </div>
      </article>
    </section>
  );
};

export default Formulario;
