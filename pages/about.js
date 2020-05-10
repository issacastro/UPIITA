import Container from "../components/container";
const About = (props) => {
  return (
    <Container page = {props.page}>
      <h1>About</h1>
    </Container>
  );
};
About.defaultProps = {
    page: "About"  
  }
export default About;
