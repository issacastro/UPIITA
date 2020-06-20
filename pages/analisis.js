import Container from "../components/container";
import Form from "../components/FormAnalisis"
const Analisis = (props) => {
  return (
    <Container page={props.page}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
          <div className="card-header text-center">
          <h2>Analisis</h2>
          </div>
          <Form/>
          </div>
          </div>
          </div>

    </Container>
  );
};
Analisis.defaultProps = {
  page: "Analisis",
};
export default Analisis;
