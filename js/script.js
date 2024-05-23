function not() {
    document.getElementById('notificacao').innerHTML = `<div id="not" style="position: absolute;color:white; opacity: 100; top: 10%; left: 1%; background-color: red; width: 220px; height: 50px; border-radius: 15px; text-align: center; transition: 0.5s;"><span style="text-align: center; position: relative; top: 8px;">Este site não esta finalizado e pode apresentar defeitos</span></div>`
    setInterval(()=>{document.getElementById('not').style.left = "-100%";document.getElementById('not').style.opacity = '0'},3500)
}





var menuButton = document.getElementById('menuButton')
var clicksMenu = 1
var mobile = document.getElementById('mobile')
function menu(){
    clicks++
    if (clicks == 0) {
        mobile.style.display = 'block'
    }
    if (clicks == 1) {
        mobile.style.display = 'none'
    }
    if (clicks == 2) {
        mobile.style.display = 'block'
        clicks = 0
    }
}

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('mobile');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

var abrir = document.getElementById('abrir')
var fechar = document.getElementById('fechar')
var clicks = 1
function categorias(){
    clicks++
    if (clicks == 0) {
        abrir.style.display = 'none'
        fechar.style.display = 'inline'
    }
    if (clicks == 1) {
        abrir.style.display = 'inline'
        fechar.style.display = 'none'
    }
    if (clicks == 2) {
        abrir.style.display = 'none'
        fechar.style.display = 'inline'
        clicks = 0
    }
}
//sobre


function sobre() {
    function idade(dia, mes, ano) {
        let idadeAno = new Date().getFullYear() - ano;
        var Mes = new Date().getMonth() + 1
        var Dia = new Date().getDate()
        if (mes > Mes  || mes == Mes && dia > Dia) {
            return idadeAno - 1
        }
    
        if (mes == Mes && dia < Dia || mes == Mes && dia == Dia || mes < Mes) {
            return idadeAno
        }
    }
    document.getElementById('idade').innerHTML = idade(30,09,2005)
}










