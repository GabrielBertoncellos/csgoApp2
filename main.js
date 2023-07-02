const btnLink = document.querySelector('.menu__link')

btnLink.addEventListener('click', function(){

  let menuAtivo = document.querySelector('.menu__lista')
  menuAtivo.classList.toggle('ativo')
 }
)

const modal = document.querySelector('#modal')
const dialog = document.querySelector('dialog')
const btnFecha = document.querySelector('#fechaModal')

modal.onclick = function(){
  dialog.showModal()
}

btnFecha.onclick = function (){
  dialog.close();
}