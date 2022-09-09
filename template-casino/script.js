//FILTRADO DE BUSQUEDA
document.addEventListener("keyup", e => {

    

    if (e.target.matches("#buscador")){
 
 
     if (e.key ==="Escape")e.target.value = ""
     
 
     document.querySelectorAll(".articulo").forEach(articulo => {
 
 
         articulo.textContent.toLowerCase().includes(e.target.value.toLowerCase())
         ?articulo.classList.remove("filtro")
         :articulo.classList.add("filtro")
        
     })
    }
 })
 
 //OCULTAR MOSTRAR LISTA BUSCADOR
 
 function muestraLista() {
         document.getElementById("listArticulos").style.display = 'block'
  }
 
  function ocultarLista() {
     document.getElementById("listArticulos").style.display = 'none'
  }
 
 //AVISO COOKIES
 
 const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
 const avisoCookies = document.getElementById('aviso-cookies');
 const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');
 
 if(!localStorage.getItem('cookies-aceptadas')){
     avisoCookies.classList.add('activo');
     fondoAvisoCookies.classList.add('activo');
 }
 
 botonAceptarCookies.addEventListener('click', () => {
     avisoCookies.classList.remove('activo');
     fondoAvisoCookies.classList.remove('activo');
 
     localStorage.setItem('cookies-aceptadas', true);
 })
 
 //MODAL DE REGISTRO
 
 const openEls = document.querySelectorAll("[data-open]");
 const closeEls = document.querySelectorAll("[data-close]");
 const isVisible = "is-visible";
 
 for (const el of openEls) {
   el.addEventListener("click", function() {
     const modalId = this.dataset.open;
     document.getElementById(modalId).classList.add(isVisible);
   });
 }
 
 for (const el of closeEls) {
   el.addEventListener("click", function() {
     this.parentElement.parentElement.parentElement.classList.remove(isVisible);
   });
 }
 
 document.addEventListener("click", e => {
   if (e.target == document.querySelector(".modal.is-visible")) {
     document.querySelector(".modal.is-visible").classList.remove(isVisible);
   }
 });
 
 document.addEventListener("keyup", e => {
   // si presionamos tecla ESC
   if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
     document.querySelector(".modal.is-visible").classList.remove(isVisible);
   }
 });
 
 //VALIDACION FORM LOG IN
 
 
 
 
 
 
 
 
 
 
 
 
  