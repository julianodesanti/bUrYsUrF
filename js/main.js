const t = new Date().toLocaleDateString();
const c = new Date().toLocaleTimeString();
document.getElementById("clock").innerHTML = c;
document.getElementById("time").innerHTML = t;