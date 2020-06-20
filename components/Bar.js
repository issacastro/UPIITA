import ReactDOM from "react-dom";
const Bar = (i,message) => {
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
        Bar(i,message);
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
            <div className="alert alert-dismissible alert-success mt-2 text-center">
              <strong> ! Bien ! </strong>
              <br></br>
              Grabaste un audio, puedes escucharlo o volverlo a grabar si quieres  🤠
            </div>
          </div>
        );
        ReactDOM.render(element, document.getElementById("progressBar"));
      }
    }, 100);
  }
export default Bar;