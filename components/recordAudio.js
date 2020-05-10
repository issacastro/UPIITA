const recordAudio = () => {
  return new Promise((resolve) => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      const audioChunks = [];

      mediaRecorder.addEventListener("dataavailable", (event) => {
        audioChunks.push(event.data);
      });

      const start = () => {
        mediaRecorder.start();
      };

      const stop = () => {
        return new Promise((resolve) => {
          mediaRecorder.addEventListener("stop", () => {
            const element = document.getElementById("player");
            var x = document.createElement("AUDIO");
            const audioUrl = URL.createObjectURL(new Blob(audioChunks));
            x.setAttribute("id", "record");
            x.setAttribute("src", audioUrl);
            x.setAttribute("controls", "controls");
            element.appendChild(x);
          });

          mediaRecorder.stop();
        });
      };

      resolve({ start, stop });
    });
  });
};
export default recordAudio;
