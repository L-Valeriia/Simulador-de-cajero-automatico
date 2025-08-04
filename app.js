let intentos = 3;
const pinCorrecto = 1234 ;



function validarPin(){
    const pinIngresado = document.getElementById("pinInput").value ;
    console.log( pinIngresado);
    const mensaje = document.getElementById("mensaje");
    
    if(pinIngresado == pinCorrecto){
        mensaje.style.color = "green" ;
        mensaje.textContent = "PIN correcto. Accediendo al menu"
    } else{
        intentos--;
        if(intentos > 0){
             mensaje.textContent = ` PIN incorrecto. Intentos restantes: ${intentos}`;
    } else {
      mensaje.textContent = " Tarjeta bloqueada. Reinicia la página.";
      document.querySelector("button").disabled = true;
    }
        }

}

