let intentos = 3;
const pinCorrecto = 1234 ;


function validarPin(){
    const pinIngresado = document.getElementById("pinInput").value;
    const mensaje = document.getElementById("mensaje");
    
    if(pinIngresado == pinCorrecto){
        mensaje.style.color = "green" ;
        mensaje.textContent = "PIN correcto. Accediendo al menu"
        document.getElementById("login").style.display = "none";
        document.getElementById("menu").style.display = "block";
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


let saldo = 1000;


function consultarSaldo(){
    let resultado = document.getElementById("resultado")
    resultado.textContent = "Tu saldo actual es: $" + saldo ;
}

let monto ;

function retirar(){
   monto = prompt("Ingrese el valor a retirar") ;
   monto = Number(monto);
  let resultado = document.getElementById("resultado")
  if (isNaN(monto) || monto <= 0) {
    resultado.textContent = "Monto no valido";
    return;    
}
   if (monto <= saldo){
     saldo = saldo - monto;
    resultado.textContent= "Saldo despues del retiro $" + saldo;

   } else {
    if(monto > saldo){
    resultado.textContent= "Saldo insuficiente"
    }
    
   }
}

function depositar(){
    montoDepositar = prompt("Ingrese el valor a depositar");
    montoDepositar = Number(montoDepositar);
    let resultado = document.getElementById("resultado");
    if (isNaN(montoDepositar)|| montoDepositar<= 0){
    resultado.textContent = "Monto no valido"
    return;
    } else {
       saldo = saldo + montoDepositar ;
        resultado.textContent = "Saldo actual $" + saldo
    }
}

function salir(){
  document.getElementById("menu").style.display = "none";
  document.getElementById("login").style.display = "block";
  document.getElementById("pinInput").value = "";
  document.getElementById("mensaje").textContent = ""; 
  intentos = 3;
  document.querySelector("button").disabled = false;

}

