<!DOCTYPE html>
<html lang="en">
  <head>
    <?php require '../../partials/_head.php' ?>
    <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
   
  </head>

  <body>
    <div class="container-scroller">
      <!-- partial:partials/_navbar.html -->
      <nav class="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
        </div>
      </nav>
      <!-- partial -->
      <div class="container-fluid page-body-wrapper">
        <!-- partial:partials/_sidebar.html -->
       <?php require '../../partials/_navbar.php' ?>
        <!-- partial -->
        <?php require '../partials/categorias/_edit.php' ?>
        <!-- main-panel ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
    <!-- container-scroller -->
    <!-- plugins:js -->
    <script src="http://localhost/Restaurant/admin/assets/vendors/js/vendor.bundle.base.js"></script>
    <script src="http://localhost/Restaurant/admin/assets/vendors/js/vendor.bundle.addons.js"></script>
    <!-- endinject -->
    <!-- Plugin js for this page-->
    <!-- End plugin js for this page-->
    <!-- inject:js -->
    <script src="http://localhost/Restaurant/admin/assets/js/shared/off-canvas.js"></script>
    <script src="http://localhost/Restaurant/admin/assets/js/shared/misc.js"></script>
    <!-- endinject -->
    <!-- Custom js for this page-->
    <script src="http://localhost/Restaurant/admin/assets/js/demo_1/dashboard.js"></script>
    <!-- End custom js for this page-->
    <script src="http://localhost/Restaurant/admin/assets/js/shared/jquery.cookie.js" type="text/javascript"></script>

  </body>
</html>