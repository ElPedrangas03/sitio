var Button=document.getElementById("Boton");
Button.addEventListener("click", function formula(){
	var A=document.getElementById("Numero1");
	var B=document.getElementById("Numero2");
	var X=parseFloat(A.value);
	var Y=parseFloat(B.value);
	if (X>0 && Y>0)
	{
		div_resultado.innerHTML="Q1";
	}
	else if (X<0 && Y>0)
	{
		div_resultado.innerHTML="Q2";
	}
	else if (X<0 && Y<0)
	{
		div_resultado.innerHTML="Q3";
	}
	else if (X>0 && Y<0)
	{
		div_resultado.innerHTML="Q4";
	}
	else if (X==0 && Y==0)
	{
		div_resultado.innerHTML="Origem";
	}
	else if (X==0 && Y!=0)
	{
		div_resultado.innerHTML="Eixo Y";
	}
	else if (X!=0 && Y==0)
	{
		div_resultado.innerHTML="Eixo X";
	}
});