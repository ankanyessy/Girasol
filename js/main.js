
$(document).ready(function(){
	$("#benviar").click(function(validar){

});

function validar(){
	var valor=document.getElementById("texto").value;
	
		if(!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ) {
  		return false;
	}
}

