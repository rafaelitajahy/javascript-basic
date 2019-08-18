function exibeAlgo() {
  console.log("Hello World");
}

function exibeAlgoTimeout() {
  console.log("Hello World Timeout");
}

setTimeout(exibeAlgoTimeout, 5000);

setInterval(exibeAlgo, 1000);
