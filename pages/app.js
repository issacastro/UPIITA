import Container from "../components/container";
import Form from "../components/forms"
const App = (props) => {
  return (
    <Container page={props.page}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
          <div className="card-header text-center">
          <h2>Audios</h2>
          </div>
          <Form/>
          </div>
          </div>
          </div>

    </Container>
  );
};
App.defaultProps = {
  page: "App",
};
export default App;
