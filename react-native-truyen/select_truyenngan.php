<?php 

$conn = new PDO('mysql:host=localhost;dbname=truyen;charset=utf8','root','');
$sql ="SELECT * FROM `truyendoc` where theloai=N'Truyện ngắn' and anh like N'http%'";
         $stmt = $conn->prepare($sql);
      $stmt->execute();
    
  echo  json_encode($stmt->fetchAll(),JSON_UNESCAPED_UNICODE);
 ?>