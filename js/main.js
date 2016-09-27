
$(document).ready(function(){
	$("#benviar").click(function(){
		var nombre=$("#name").val();
		var correo=$("#email").val();
		var asunto=$("#comment").val();

		if(nombre==""){
			$("mensaje").fadeIn();
			return false;
		}else{
			$("mensaje").fadeOut();
			if(correo==""||expr.test(correo)){
				$("mensaje2").fadeIn();
				return false;
			}else{
				$("mensaje2").fadeOut();

				if(asunto==""){
					$("mensaje2").fadeIn();
				return false;
				}
			}
		}
	});
});