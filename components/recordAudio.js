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
            const audioBlob = new Blob(audioChunks, {
              type: 'audio/wav; codecs=0',
            });
            const audioUrl = URL.createObjectURL(audioBlob);
            x.setAttribute("id", "record");
            x.setAttribute("src", audioUrl);
            x.setAttribute("controls", "controls");
            element.appendChild(x);
            resolve(audioBlob);

          });

          mediaRecorder.stop();
          stream
            .getTracks() // get all tracks from the MediaStream
            .forEach((track) => track.stop()); // stop each of them
        });
      };

      resolve({ start, stop });
    });
  });
};
export default recordAudio;
