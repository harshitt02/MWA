function mouseCoordinates(event) {
  const x = event.clientX;
  const y = event.clientY;
  const cords = document.getElementById("cords");
  cords.innerHTML = "X: " + x + "," + "Y:" + y;
}
