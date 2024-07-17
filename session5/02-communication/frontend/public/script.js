const msgBackend1 = document.getElementById("messageBackend1");
const msgBackend2 = document.getElementById("messageBackend2");

fetch("/api/config")
  .then((res) => res.json())
  .then((data) =>
    fetch(data.backend1)
      .then((res) => res.json())
      .then((data) => {
        msgBackend1.textContent = data.msgBackend1;
        msgBackend2.textContent = data.msgBackend2;
      })
  );
