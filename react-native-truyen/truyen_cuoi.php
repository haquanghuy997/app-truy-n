<?php 
    include('simple_html_dom.php');
    $conn = new PDO('mysql:host=localhost;dbname=truyen;charset=utf8','root','');

   for ($i=1; $i < 20; $i++) { 
     
    $lik = "https://webtruyen.com/truyen-cuoi/".$i;
   
      $html = file_get_html($lik);
      
  foreach($html->find('div.post-thumbnail a') as $element){
    
    $ht = file_get_html($element->href);

     $tieude=$ht->find('a.w3-hover-text-grey',0)->title;
     $anh =  $ht->find('div[id=content] img',0)->src;
     $noidung =$ht->find('div[id=content] p',0);
     $noidung = strip_tags($noidung);
     $tieude = addslashes ($tieude);
      $noidung = addslashes ($noidung);
       date_default_timezone_set('Asia/Ho_Chi_Minh');
        $time = time();
        $t =date ("Y:m:d H:i:s",$time);
        $sql ="INSERT INTO `truyendoc`(`tieude`, `anh`, `noidung`, `thoigian`,`theloai`) VALUES ('$tieude','$anh','$noidung','$t','Truyện cười')";
         $stmt = $conn->prepare($sql);
      $stmt->execute();
      // break;
     
    }  
   } 
//    class truyendoc{
//       var $id;
//       var $tieude;
//       var $noidung;


//       function truyendoc($_id,$_tieude,$_noidung,$_thoigian){
//         $this->id=$id;
//          $this->tieude=$tieude;
//           $this->noidung=$noidung;
        
//       }
//     }
//     while($row=mysql_fetch_array($sql)){
//   array_push($arradmin,new admin(Srow["id"],$row["tieude"],$row["noidung"],));
// }
// echo json_encode($arradmin);   
?>
