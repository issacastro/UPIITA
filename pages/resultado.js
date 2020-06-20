import Container from "../components/container";
import Form from "../components/FormAnalisis";
const Resultado = (props) => {
  return (
    <Container page={props.page}>
      <div className="col-md-6 offset-md-3 text-center">
        <h1>Resultados</h1>
        <p>
          Nacionalidad: <b>Mexicana</b>
        </p>
        <img src="/banderas.png" alt="" className="img-responsive" />
        <h2>Asertividad: 81%</h2>
      </div>
      <div className="row p-3">
        <div className="col-md-4  text-center">
          <h3>Procesamiento</h3>
        </div>
<div className="col-md-4"></div>
        <div className="col-md-4 text-center">
          <h3>Redes Neuronales</h3>
          <div className="text-left"></div>
        </div>
      </div>
    </Container>
  );
};
Analisis.defaultProps = {
  page: "Resultado",
};
export default Resultado;
