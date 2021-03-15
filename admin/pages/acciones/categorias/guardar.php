<?php
    $conn = mysqli_connect('localhost','root', '', 'Restaurant');
    
    $nombre = validar($_POST['nombre']);

    mysqli_query($conn, "INSERT INTO categorias VALUES(DEFAULT, '$nombre')");

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