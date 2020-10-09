import { useState } from "react";
import recordAudio from "./recordAudio";
import fetch from "node-fetch";
import Bar from "./Bar";
import ReactDOM from "react-dom";
import Router from "next/router";
var blob;
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
    form.append("gender", data.gender);
    form.append("country", data.country);
    form.append("old", data.old);
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
          onClick={(e) => grabar()}
        >
          <i className="fa fa-microphone" />
        </button>
        <p>
          Cuando des click en el microfono se grabaran 10 segundos de tu voz,
          por favor ten preparado lo que dirás y procura que no haya ruido{" "}
        </p>
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
export default Form;
