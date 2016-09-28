

<?php
	$destino="yancalonzo@gmail.com";
	$nombre=$_POST["nombre"];
	$email=$_POST["email"];
	$mensaje=$_POST["comentario"];
	$contenido="Nombre: ". $nombre . "\nCorreo: " . $correo . "\nMensaje: " . $mensaje;
	mail($destino, "Contacto", $contenido);
	header("Location:gracias.html");

?>