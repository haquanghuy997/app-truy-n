<?php 

$conn = new PDO('mysql:host=localhost;dbname=truyen;charset=utf8','root','');
$id=$_GET['id'];
$sql ="SELECT * FROM `truyendoc` where id=$id";
         $stmt = $conn->prepare($sql);
      $stmt->execute();
    
  echo  json_encode($stmt->fetch(),JSON_UNESCAPED_UNICODE);
 ?>