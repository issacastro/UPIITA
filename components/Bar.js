import ReactDOM from "react-dom";
var prhases = [
  "¿Cuál es la diferencia de este gobierno?",
  "Avancemos con el resto de las opciones.",
  "Todo sobre la guerra contra el terrorismo.",
  "Realización de programas de radio y televisión.",
  "Los principales vestigios arqueológicos que se localizan en el estado de Campeche son",
  "Gracias a todos los que nos apoyan asistiendo a los conciertos.",
  "Los aumentos en el costo de la energía afectarán a tu bolsillo.",
  "¿Por qué no se puede realizar el aborto?",
  "Introduzca su nombre de usuario y contraseña, y pulse el botón",
  "Recopilación de firmas en contra de la extrema derecha de Austria.",
  "Ahora di lo que tu quieras (en serio jaja) 🔥"
]
const Bar = (i,message,count) => {
    setTimeout(function () {
      const element = (
        <div>
          <strong>{message}... 🎤 </strong>
          <div className="progress">
            <div
              id="progress"
              className="progress-bar progress-bar-striped bg-success progress-bar-animated "
              role="progressbar"
              aria-valuenow={i * 1.1}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{ width: `${i * 1.1}%` }}
            />
          </div>
        </div>
      );
      ReactDOM.render(element, document.getElementById("progressBar"));
      i++;
      if (i < 100) {
        Bar(i,message,count);
      }
      if (i == 100 ) {
        const element = (
          <div>
            <div className="progress">
              <div
                id="progress"
                className="progress-bar progress-bar-striped bg-success  "
                role="progressbar"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: `${i}%` }}
              />
            </div>
            <div className="alert alert-dismissible alert-success mt-2 text-center">
              <strong> ! Bien sigamos,vuelve a clickear al boton de recording para grabar el segundo audio ! </strong>
              <br/>
              🤠
            </div>
            <div></div>
          </div>
        );
        const  msg =(
          <span ><b><p style={{color:"red"}}>{prhases[count]}</p></b></span>
          
        );
        ReactDOM.render(element, document.getElementById("progressBar"));
        ReactDOM.render(msg, document.getElementById("frase"));
      };
      if(count==11 && i==100){
        const element = (
          <div>
            <div className="progress">
              <div
                id="progress"
                className="progress-bar progress-bar-striped bg-success  "
                role="progressbar"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: `${i}%` }}
              />
            </div>
            <div className="alert alert-dismissible alert-success mt-2 text-center">
              <strong> ! Hemos terminado, ya puedes mandar los auidos ! </strong>
              <br/>
              🤠
            </div>
            <div></div>
          </div>
        );
        const  msg =(
          <span ><b><p style={{color:"red"}}>{prhases[count]}</p></b></span>
          
        );
        ReactDOM.render(element, document.getElementById("progressBar"));
        ReactDOM.render(msg, document.getElementById("frase"));       
      }
    }, 40);
  }
export default Bar;