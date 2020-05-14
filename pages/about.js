import Container from "../components/container";
const About = (props) => {
  return (
    <Container page={props.page}>
      <h1>IPN - UPIITA</h1>
      <br />
      <h3>Sistema de identificación de variedad del lenguaje español</h3>
      <br />
      <p>
        En este proyecto se desarrollará un sistema que identifique
        automáticamente la variación del lenguaje español entre los países
        México, Argentina y Colombia a partir de técnicas de procesamiento
        digital de señales para señales de voz, se usarán redes neuronales como
        técnica de clasificación de las características de la señal de voz así
        como la utilización de un conjunto de audios de estos países para
        entrenar al sistema, con el fin de estimar la nacionalidad del hablante.
        Otro propósito del proyecto es conocer si se puede evitar el proceso de
        transcripción de voz a texto analizando las características fonéticas de
        las señales de voz ya que la mayoría de los sistemas de identificación
        del lenguaje trabajan a partir de analizar el texto obtenido de dicha
        señal incluso si se desea conocer el acento o la nacionalidad del
        hablante por medio de audios.
      </p>
      <div className="text-center">
        <img src="/Sistema.png" className="img-fluid" alt="Responsive image"></img>
      </div>
      <br/>
      <p>
        <strong>
          <h5>Palabras clave:</h5> reconocimiento de voz, procesamiento digital
          de señales, redes neuronales, variedad del lenguaje español, perfilado
          de usuario.
        </strong>
      </p>
      <h4>Objetivo general </h4>
      <p>
        Desarrollar un sistema de identificación de variedad del lenguaje
        español hablado en México, Argentina y Colombia mediante el
        procesamiento de voz y redes neuronales para estimar la nacionalidad del
        hablante.
      </p>
      <h5>Objetivos específicos </h5>
      <ul>
        <li>
          Construir la base de conocimiento de audios para los tres países:
          México, Argentina y Colombia
        </li>
        <li>
          Digitalizar y optimizar la señal de voz de entrada mediante técnicas
          de filtrado para poder lograr un mejor resultado en la extracción de
          características de la voz.
        </li>
        <li>
          Diseñar e implementar un sistema para la extracción de características
          de la voz mediante el procesamiento digital de señales para su
          clasificación.
        </li>
        <li>
          Diseñar e implementar un sistema de clasificación por características
          de la señal digital de voz basados en redes neuronales tipo LSTM.
        </li>
        <li>
          Diseñar e implementar un sistema de clasificación por características
          de la señal digital de voz basados en redes neuronales tipo LSTM y
          CNN.
        </li>
        <li>
          Diseñar e implementar un sistema de clasificación por características
          de la señal digital de voz basados en redes neuronales tipo BiLSTM.
        </li>
        <li>
          Diseñar e implementar un sistema de clasificación por características
          de la señal digital de voz basados en redes neuronales tipo BiLSTM y
          CNN.
        </li>
        <li>Evaluar el desempeño de cada configuración de red neuronal.</li>
      </ul>
    </Container>
  );
};
About.defaultProps = {
  page: "About",
};
export default About;
