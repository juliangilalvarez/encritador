

function funcion_encriptar()  {
    let   texto = document.getElementById("texto-ingresado").value;
    
  if (comparatexto(texto)) {
    alert("El texto contiene Mayusculas O Numeros ")
      }

      else{  
         let textoremplazado = texto
         .replace(/e/g,"enter")
         .replace(/i/g,"imes")
         .replace(/a/g,"ai")
         .replace(/o/g,"ober")
         .replace(/u/g,"ufat");
         procesa_texto(textoremplazado);

      }
}

function comparatexto(texto){

return (/[A-Z]/.test(texto) || /\d/.test(texto) ||  /[!@#\$%\^\&*\)\(+=._-]/.test(texto) ) ;

}
function procesa_texto(textoremplazado){

  document.getElementById("prestacion-encritador").style.display = "none";
  document.getElementById("texto-encritado").style.display = "block";
  asignarTextoElemento('.parrafo',`${textoremplazado}`); 

}

function copiar(){

  let textocopiado = document.querySelector('.parrafo').value;

  
  navigator.clipboard.writeText(textocopiado).then(() => {
    alert("El Texto se Copio correctamente");
  }).catch(err => {
    alert("No se copio nada",err);
  });

  }
function funcion_desencriptar(){
      textoinical = document.getElementById("texto-ingresado").value;
    asignarTextoElemento('.parrafo',`${textoinical}`); 

}

function asignarTextoElemento(elemento, texto) {
    let  elementoHTML  = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
 
}
function condionesIniciales() {
    asignarTextoElemento('.titulo','a');

}

condionesIniciales();