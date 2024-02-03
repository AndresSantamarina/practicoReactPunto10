import { Button, Form } from "react-bootstrap";
import CardPeliculas from "./CardPeliculas";
import { useEffect, useState } from "react";

const Formulario = () => {
  const [pelicula, setPelicula] = useState({
    nombrePelicula: "",
    descripcion: "",
    genero: "",
  });
  const peliculasLocalStorage =
    JSON.parse(localStorage.getItem("peliculasKey")) || [];
  const [peliculas, setPeliculas] = useState(peliculasLocalStorage);

  useEffect(() => {
    localStorage.setItem("peliculasKey", JSON.stringify(peliculas));
  }, [peliculas]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPelicula({ ...pelicula, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pelicula.genero === "") {
      alert("Por favor, seleccione un género para la película");
      return;
    }
    setPeliculas([...peliculas, pelicula]);
    setPelicula({
      nombrePelicula: "",
      descripcion: "",
      genero: "",
    });
  };

  const borrarPelicula = (nombrePelicula) => {
    const peliculasFiltradas = peliculas.filter(
      (pelicula) => pelicula !== nombrePelicula
    );
    setPeliculas(peliculasFiltradas);
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre de la película</Form.Label>
          <Form.Control
            type="text"
            placeholder="Por ejemplo: One Piece Red"
            required
            minLength={3}
            maxLength={50}
            name="nombrePelicula"
            value={pelicula.nombrePelicula}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripción de la película</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            required
            minLength={3}
            maxLength={50}
            name="descripcion"
            value={pelicula.descripcion}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSelect">
          <Form.Select
            aria-label="Default select example"
            name="genero"
            value={pelicula.genero}
            onChange={handleChange}
          >
            <option>Seleccionar el género de la película</option>
            <option value="Comedia">Comedia</option>
            <option value="Drama">Drama</option>
            <option value="Infantil">Infantil</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit">Agregar</Button>
      </Form>
      <article className="container my-3">
        <div className="d-flex flex-wrap justify-content-center">
          <CardPeliculas
            arrayPeliculas={peliculas}
            borrarPelicula={borrarPelicula}
          />
        </div>
      </article>
    </section>
  );
};

export default Formulario;
