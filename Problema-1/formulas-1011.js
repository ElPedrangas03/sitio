var Button1=document.getElementById("Boton");
Button1.addEventListener("click",function formula(){
	var N=document.getElementById("Numero");
	var Nas=parseInt(N.value);

	var Resultado=(4.0/3)*3.14159*(Nas*Nas*Nas);

	div_resultado.innerHTML="VOLUME = "+Resultado.toFixed(3);
});