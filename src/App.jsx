import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <Container className="text-center mainPage">
        <h1 className="text-center display-6 my-3">Administrar películas</h1>
        <Formulario/>
      </Container>
    </>
  );
}

export default App;
