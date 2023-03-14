const cb = () => console.log("Exec...");
setInterval(cb, 2500);

setInterval(function () {
  console.log("Exec 3...");
}, 5000);
