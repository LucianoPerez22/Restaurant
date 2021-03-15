<?php
  require ($_SERVER['DOCUMENT_ROOT']. '/Restaurant/admin/config_url.php');
?>
 <nav class="sidebar sidebar-offcanvas" id="sidebar">
 <ul class="nav">
   <li class="nav-item nav-category">Menu</li>
   <li class="nav-item">
     <a class="nav-link" href="index.html">
       <i class="menu-icon typcn typcn-document-text"></i>
       <span class="menu-title">Mesas</span>
     </a>
   </li>
   <li class="nav-item">
     <a class="nav-link" href="#">
       <i class="menu-icon typcn typcn-coffee"></i>
       <span class="menu-title">Ventas</span>
     </a>
   </li>

   <li class="nav-item">
     <a class="nav-link" href="#">
       <i class="menu-icon typcn typcn-coffee"></i>
       <span class="menu-title">Pedidos</span>
     </a>
   </li>

   <li class="nav-item">
     <a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
       <i class="menu-icon typcn typcn-coffee"></i>
       <span class="menu-title">Menu</span>
       <i class="menu-arrow"></i>
     </a>
     <div class="collapse" id="ui-basic">
       <ul class="nav flex-column sub-menu">
         <li class="nav-item">
           <a class="nav-link" href="pages/ui-features/buttons.html">Alta</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="pages/ui-features/dropdowns.html">Administrar</a>
         </li>
       </ul>
     </div>
   </li>

   <li class="nav-item">
     <a class="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
       <i class="menu-icon typcn typcn-coffee"></i>
       <span class="menu-title">Categorias</span>
       <i class="menu-arrow"></i>
     </a>
     <div class="collapse" id="auth">
       <ul class="nav flex-column sub-menu">
         <li class="nav-item">
           <a class="nav-link" href="<?php echo ROOT; ?>pages/categorias/alta.php">Alta</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="<?php echo ROOT; ?>pages/categorias/administrar.php">Administrar</a>
         </li>
         
       </ul>
     </div>
   </li>
   <li class="nav-item">
     <a class="nav-link" href="#">
       <i class="menu-icon typcn typcn-coffee"></i>
       <span class="menu-title">Admin Precios</span>
     </a>
   </li>
   <li class="nav-item">
     <a class="nav-link" href="#">
       <i class="menu-icon typcn typcn-coffee"></i>
       <span class="menu-title">Usuarios</span>
     </a>
   </li>
   <li class="nav-item">
     <a class="nav-link" href="#">
       <i class="menu-icon typcn typcn-coffee"></i>
       <span class="menu-title">Comercio</span>
     </a>
   </li>
 </ul>
</nav>
