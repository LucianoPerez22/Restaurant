<?php
    $conn = mysqli_connect('localhost', 'root','', 'Restaurant');

    $query = mysqli_query($conn, "SELECT * FROM CATEGORIAS ORDER BY nombre");

    while($fila = mysqli_fetch_assoc($query)){
        echo "<tr>";
            echo "<td>" . $fila['nombre'] . "</td>";
            echo "<td>" ."<a href='./editar.php?id=" .$fila['id']. "'" .">". '<i class="fas fa-edit"></i>
                            ' . "</a>". " | " ."<a href='../acciones/categorias/delete.php?id=" .$fila['id']. "'" .">". '<i class="fas fa-trash"></i>
                            ' . "</a>". "</td>";
        echo "</tr>";

    } 
?>