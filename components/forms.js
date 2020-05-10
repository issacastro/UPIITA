import { useState } from "react";
import ReactDOM from "react-dom";
import recordAudio from "./recordAudio";
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
    country: "México",
    old: "",
    progress: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="card-body" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input
          name="name"
          type="text"
          className="form-control"
          placeholder="Enter a name"
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Country</label>
        <select
          name="country"
          type="text"
          className="form-control"
          placeholder="Enter a country"
          onChange={handleChange}
          required
        >
          <option>México</option>
          <option>Argentina</option>
          <option>Colombia</option>
        </select>
      </div>
      <div className="form-group">
        <label>Years old</label>
        <input
          name="old"
          type="text"
          className="form-control"
          placeholder="Enter years old"
          onChange={handleChange}
          required
        />
      </div>
      <div className="text-center">
        <button
          type="button"
          className="btn btn-outline-danger"
          style={button_style}
          onClick={(e) => grabar()}
        >
          <i className="fa fa-microphone" />
        </button>
      </div>

      <div id="progressBar" className="text-center p-2"></div>
      <div id="player" className="text-center "></div>

      <div className=" p-4">
        <button type="submit" className="btn btn-primary btn-lg btn-block">
          Send
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
  progress(i);
  setTimeout(async () => {
    await recorder.stop();
  }, 11000);
}

function progress(i) {
  setTimeout(function () {
    const element = (
      <div>
        <strong>Recording...</strong>
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
      progress(i);
    }
    if (i == 100) {
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
          <div
            iv
            className="alert alert-dismissible alert-success mt-2 text-center"
          >
            <strong>Well done!</strong> You successfully recorded a audio
          </div>
        </div>
      );
      ReactDOM.render(element, document.getElementById("progressBar"));
    }
  }, 100);
}
export default Form;
