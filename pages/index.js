import Container from "../components/container";
const Index = (props) => {
  return (
    <Container page={props.page}>
      <h1>IPN - UPIITA</h1>
      <br />
      <h3>Sistema de identificación de variedad del lenguaje español</h3>
      <br />
      <p>
      En este proyecto se desarrollará un sistema que identifique automáticamente la variación fonética del
      lenguaje español, permitiendo deducir la nacionalidad de hablantes pertenecientes a México,
      Argentina y Colombia utilizando técnicas de procesamiento digital de señales, y redes neuronales
      como técnica de clasificación de las características de voz. Se usará un corpus construido con archivos
      de audio de países para entrenar al sistema.
      La técnica mayormente utilizada para identificar a un autor analiza directamente de un texto cómo se
      expresa dicho autor , esto implica que en algunas ocasiones se tenga que realizar una transcripción
      audio a texto. Lo que se busca en este proyecto es que mediante las características fonéticas de las
      señales de voz se logre esta identificación.
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
Index.defaultProps = {
  page: "Index",
};
export default Index;
