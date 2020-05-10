import Container from "../components/container";
import Form from "../components/forms"
const Index = (props) => {
  return (
    <Container page={props.page}>

      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
          <div className="card-header text-center">
          <h1>Record Audio</h1>
          </div>
          <Form/>
          </div>
          </div>
          </div>

    </Container>
  );
};
Index.defaultProps = {
  page: "Index",
};
export default Index;
