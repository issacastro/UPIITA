import { useState } from "react";
import recordAudio from "./recordAudio";
import fetch from "node-fetch";
import Bar from "./Bar";
import ReactDOM from "react-dom";
import Router from "next/router";
var blob;
var blobs = [];
var count = 0;
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
  "Recopilación de firmas en contra de la extrema derecha de Austria."
]
const Form = () => {
  const button_style = {
    width: "50px",
    height: "50px",
    padding: "10px 16px",
    fontSize: "18px",
    borderRadius: "25px",
  };
  const [data, setData] = useState({
    name: "",
    gender: "Mujer",
    country: "México",
    old: "",
    wav: [],
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(blobs.length == 0 || blobs.length<10){
      const element = (
        <div className="alert alert-dismissible alert-danger text-center">
          <strong> ! Aun faltan  {10-count} audios ! 🥺 </strong>
        </div>
      );
    ReactDOM.render(element, document.getElementById("progressBar"));  
    return false;
  }
  var form = new FormData();
   var i = 1;
    blobs.forEach(blob => {
      form.append("file", blob, `${data.name+i.toString()}.wav`);
      i+=1;
    });
    form.append("name", data.name);
    form.append("gender", data.gender);
    form.append("country", data.country);
    form.append("old", data.old);
    if(count==10)
    fetch("https://upiita-api.herokuapp.com/upload", {
      mode: "no-cors",
      method: "POST",
      body: form,
    }).then(async () => {
      document.getElementById("formData").reset();
      const element = (
        <div className="p-4">
          <div className="alert alert-dismissible alert-primary text-center">
            <strong>! Gracias por tus audios ! 🤓 </strong>
          </div>
        </div>
      );
      blobs = [];
      count = 0;
      ReactDOM.render(element, document.getElementById("progressBar"));
      await timeout(4000);
      window.scrollTo(0, 0);
      Router.push("/",undefined,{ shallow: true });
    });
  };
  return (
  
    <form id="formData" className="card-body"  onSubmit={handleSubmit}>
      <div className="form-group" >
        <label>Nombre</label>
        <input
          name="name"
          type="text"
          className="form-control"
          placeholder="¿ Como te llamas ?"
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Genero</label>
        <select
          name="gender"
          type="text"
          className="form-control"
          onChange={handleChange}
          required
        >
          <option>Mujer</option>
          <option>Hombre</option>

        </select>
      </div>
      <div className="form-group">
        <label>Pais</label>
        <select
          name="country"
          type="text"
          className="form-control"
          onChange={handleChange}
          required
        >
          <option>México</option>
          <option>Argentina</option>
          <option>Colombia</option>
          <option>Otro</option>
        </select>
      </div>
      <div className="form-group">
        <label>Edad</label>
        <input
          name="old"
          type="number"
          className="form-control"
          placeholder="¿ Cuantos años tienes ?"
          onChange={handleChange}
          required
        />
      </div>
      <div className="text-center">
        <button
          type="button"
          className="btn btn-outline-danger mb-1"
          style={button_style}
          onClick={async (e) => {await grabar(count);count+=1; blobs.push(blobToFile(blob)); }}
        >
          <i className="fa fa-microphone" />
        </button>
        <p>
          Cuando des click en el microfono se empezara a grabar el audio, porfavor di la siguiente frase 
        </p>
      </div>
      <div id="frase" className="text-center">
      <span ><b><p style={{color:"red"}}>{prhases[count]}</p></b></span>
      </div>

      <div id="progressBar" className="text-center p-2"></div>
      <div id="player" className="text-center "></div>

      <div className="">
        <button type="submit" className="btn btn-primary btn-lg btn-block mt-4 p-4">
        ¡ Enviar !
        </button>
      </div>
    </form>
  );
};

async function grabar(count) {
  const element = document.getElementById("player");
  const record = document.getElementById("record");
  try {
    element.removeChild(record);
  } catch (error) {}
  const recorder = await recordAudio();
  recorder.start();
  var i = 0;
  Bar(i,`Grabando audio #${count+1}`,count+1 );
  await timeout(4000);
  blob = await recorder.stop();
}
function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function blobToFile(theBlob) {
  theBlob.lastModifiedDate = new Date();
  return theBlob;
}
export default Form;
