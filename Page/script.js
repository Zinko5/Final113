console.log("hola")
function fibo() {
	var n=document.ejer1.cantidad.value;
	var a=-1;
	var b=1;
	var c=0;
	cad="";
	for (var i = 0 ; i < n-1; i++) {
		cad=cad+c+", ";
		document.ejer1.solucion.value=cad;
		a=b;
		b=c;
		c=a+b;
	}
	cad=cad+c;
	document.ejer1.solucion.value=cad;
}