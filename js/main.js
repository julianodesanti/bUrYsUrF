function dimensaoTela(){
    var heightTela = window.innerHeight;
    var widthTela = window.innerWidth;

    document.getElementById('pag_processos').style.minHeight = heightTela+'px';
}
const t = new Date().toLocaleDateString();
const c = new Date().toLocaleTimeString();
document.getElementById("clock").innerHTML = c;
document.getElementById("time").innerHTML = t;