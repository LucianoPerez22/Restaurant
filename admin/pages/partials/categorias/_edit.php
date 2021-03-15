<div class="main-panel">
          <h3 style="color:green; font-size: 2em;">RestoApp 1.0</h3>
          <div class="content-wrapper">
            <!-- Page Title Header Starts-->
            
            <div class="row page-title-header">
             
              <div class="col-md-12">
                <div class="page-header-toolbar">
                  <div class="btn-group toolbar-item" role="group" aria-label="Basic example">
                  </div>
                  <div class="filter-wrapper">
                    <div class="dropdown toolbar-item">
                      
                      <div class="dropdown-menu" aria-labelledby="dropdownsorting">
                       
                      </div>
                    </div>
                    
                  </div>
                  <div class="sort-wrapper">
                    
                    <div class="dropdown ml-lg-auto ml-3 toolbar-item">
                      
                      <div class="dropdown-menu" aria-labelledby="dropdownexport">
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Page Title Header Ends-->
            <div class="row">
              
            </div>
            <div class="row">
           
              <div>
                  <div class="col-md-12 grid-margin">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="text-primary font-weight-bold">Editar Categoria</h4>
                        </div>
                      <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <form action="../acciones/categorias/edit.php" method="POST">
                                <?php
                                    $id = $_GET['id'];
                                    $conn = mysqli_connect('localhost', 'root','','Restaurant');
                                    $query = mysqli_query($conn, "SELECT * FROM categorias WHERE id=$id");
                                    $fila = mysqli_fetch_assoc($query);
                                ?>
                                <input type="text" name="nombre" value ="<?php echo $fila['nombre'] ?>" placeholder="Nombre Comercio...">
                                <input type="hidden" name="id" value="<?php echo $id  ?>">
                                <button class="btn btn-rounded btn-primary" type="submit">
                                  <i class="mdi mdi-cloud-download"></i>
                                  Modificar</button>
                            </form>
           
                        </div>
                        <p></p>
                        <div class="table-responsive">

                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 grid-margin stretch-card">
                    
                  </div>
                  <div class="col-md-6 grid-margin stretch-card average-price-card">
                    
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="row">
                  
                  <div class="col-md-12 grid-margin">
                    
                  </div>
                  <div class="col-md-12 grid-margin">
                    
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 grid-margin stretch-card">
                
              </div>
              <div class="col-md-4 grid-margin stretch-card">
               
              </div>
              <div class="col-md-4 grid-margin stretch-card">
                
              </div>
            </div>
          </div>
          <!-- content-wrapper ends -->
          <!-- partial:partials/_footer.html -->
         
          <!-- partial -->
        </div>