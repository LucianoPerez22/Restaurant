<?php
    $conn = mysqli_connect('localhost','root', '', 'Restaurant');
    
    $id = intval($_GET['id']);

    mysqli_query($conn, "DELETE FROM categorias WHERE id=$id");
    
    header("Location: ../../../");
?>