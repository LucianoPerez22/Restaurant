<?php
    $conn = mysqli_connect('localhost','root', '', 'Restaurant');
    
    $nombre = validar($_POST['nombre']);
    $id = intval($_POST['id']);


    mysqli_query($conn, "UPDATE categorias SET nombre='$nombre' WHERE id=$id");
    
    header("Location: ../../../");

    function validar($dato){
        //Elimina espacios en blanco al principio y al final
        $dato=trim($dato);
        //Quita barras invertidas
        $dato=stripcslashes($dato);
        //Elimina caracteres especiales html
        $dato=htmlspecialchars($dato);
        $dato=strtoupper($dato);

        return $dato;
    }
?>