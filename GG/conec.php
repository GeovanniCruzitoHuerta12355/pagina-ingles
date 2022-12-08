<?php
$link=mysql_connect("localhost","root","") or die ("<h2> No se encuentra el servidor </h2>");

$db=mysql_select_db("ingles",$link) or die ("<h2> No se encuentra la base de datos </h2>");

$correo=$_POST['correo'];
$contrasena=$_POST['contrasena'];

$req=(strlen($correo)*strlen($contrasena)) or die ("<h2> No se han llenado los datos </h2>");

mysql_query(" INSERT INTO ing VALUES ('$correo','$contrasena')",$link) or die  ("<h2> Error al enviar los datos </h2>");

echo "<h1> Registro Completado </h1> <br/> <h2> Bienvenido a FEDA </h2>";

?>

