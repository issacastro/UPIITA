import { useState } from "react";
import recordAudio from "./recordAudio";
import fetch from "node-fetch";
import Bar from "./Bar";
import ReactDOM from "react-dom";
import Router from "next/router";
import  { useRef } from 'react'
var blob;
const Form = () => {
  const inputFile = useRef(null);
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
    try {
      var file = blobToFile(blob);
    } catch (error) {
      const element = (
        <div className="alert alert-dismissible alert-danger text-center">
          <strong> ! Olvidaste grabar el audio ! 🥺 </strong>
        </div>
      );
      ReactDOM.render(element, document.getElementById("progressBar"));
      return false;
    }
    var form = new FormData();
    form.append("file", file, `${data.name}.wav`);
    form.append("name", data.name);
    fetch("https://upiita-api.herokuapp.com/upload", {
      mode: "no-cors",
      method: "POST",
      body: form,
    }).then(async () => {
      document.getElementById("formData").reset();
      const element = (
        <div className="p-4">
          <div className="alert alert-dismissible alert-primary text-center">
            <strong>! Gracias por tu audio ! 🤓 </strong>
          </div>
        </div>
      );
      ReactDOM.render(element, document.getElementById("progressBar"));
      await timeout(4000);
      window.scrollTo(0, 0);
      Router.push("/about", undefined, { shallow: true });
    });
  };
  return (
    <form id="formData" className="card-body" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nombre</label>
        <input
          name="name"
          type="text"
          className="form-control"
          placeholder="Nombre de prueba"
          onChange={handleChange}
          required
        />
      </div>
      <input type='file' id='file' ref={inputFile} style={{display: 'none'}}  accept="audio/wav" onInput={(e)=>procesar()}/>
      <div className="row ml-4 mr-4">
        <div className="text-center col-md-6">
          <button
            type="button"
            className="btn btn-outline-danger mb-1"
            style={button_style}
            onClick={(e) => grabar()}
          >
            <i className="fa fa-microphone" />
          </button>
          <div className="p-1">Grabar</div>
        </div>

        <div className="text-center col-md-6">
          <button
            type="button"
            className="btn btn-outline-success mb-1"
            style={button_style}
            onClick={(e) => adjuntar(inputFile)}
          >
            <i className="fa fa-paperclip" />
          </button>
          <div className="p-1">Subir</div>
        </div>
        
      </div>

      <div className="mr-4 ml-4 mt-2">
      <small id="fileHelp" className="form-text text-muted">Puedes grabar un audio de 10 segundos del tema sugerido o subir un archivo wav que solo contenga una señal de voz con una frecuencia de muestreo de al menos 8 KHz.</small>
      </div>
      <div id="progressBar" className="text-center p-2"></div>
      <div id="player" className="text-center "></div>

      <div className="">
        <button
          type="submit" 
          disabled
          className="btn btn-primary btn-lg btn-block mt-4 p-4"
        >
          ¡ Analizar !
        </button>
      </div>
    </form>
  );
};

async function grabar() {
  const element = document.getElementById("player");
  const record = document.getElementById("record");
  try {
    element.removeChild(record);
  } catch (error) {}
  const recorder = await recordAudio();
  recorder.start();
  var i = 0;
  Bar(i,"Grabando");
  await timeout(11000);
  blob = await recorder.stop();
}
function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function blobToFile(theBlob) {
  theBlob.lastModifiedDate = new Date();
  return theBlob;
}
function adjuntar(inputFile) {
inputFile.current.click();
}
function procesar(){
  const element = document.getElementById("player");
  const record = document.getElementById("record");
  try {
    element.removeChild(record);
  } catch (error) {}
  var x = document.createElement("AUDIO");
  x.setAttribute("id", "record");
  x.setAttribute("controls", "controls");
  element.appendChild(x);
  var sound = document.getElementById('record');
  sound.src = URL.createObjectURL(document.getElementById('file').files[0]);
  sound.onend = function(e) {
    URL.revokeObjectURL(this.src);
  }
}
export default Form;
