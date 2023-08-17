  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index.php" class="brand-link">
      <img src="assets/dist/img/avatar5.png" alt="AdminLTE Logo" class="brand-image img-circle" style="opacity: .8">
      <span class="brand-text font-weight-dark">ADMIN</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item">
            <a href="index.php" class="nav-link">
              <i class="nav-icon fas fa fa-home"></i>
              <!-- <i class="nav-icon fas fa-th"></i> -->
              <p>
                Dashbord
              </p>
            </a>
          </li>
          <li class="nav-item has-treeview menu-close">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-book"></i>
              <p>
                Appointments
                <i class="right fas fa-angle-left"></i>
              </p>

            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pendingtable.php" class="nav-link">
                  <!-- <i class="far fa-circle nav-icon"></i> -->
                  <p>Pending Appointments</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="activetable.php" class="nav-link">
                  <!-- <i class="far fa-circle nav-icon"></i> -->
                  <p>Active Appointments</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="completedtable.php" class="nav-link">
                  <!-- <i class="far fa-circle nav-icon"></i> -->
                  <p>Completed Appointments</p>
                </a>
              </li>

              <li class="nav-item">
                <a href="notice.php" class="nav-link">
                  <!-- <i class="far fa-circle nav-icon"></i> -->
                  <p>Notice</p>
                </a>
              </li>
            </ul>
          </li>

          <li class="nav-item has-treeview menu-close">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-person-biking"></i>
              <p>
                Operators
                <i class="right fas fa-angle-left"></i>
              </p>

            </a>
            <ul class="nav nav-treeview">

              <li class="nav-item">
                <a href="operatortable.php" class="nav-link">
                  <!-- <i class="far fa-circle nav-icon"></i> -->
                  <p> Operators Table</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="Opresign.php" class="nav-link">
                  <!-- <i class="far fa-circle nav-icon"></i> -->
                  <p>Operators Resign</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="map.php" class="nav-link">
                  <!-- <i class="far fa-circle nav-icon"></i> -->
                  <p>Operators Map</p>
                </a>
              </li>

            </ul>
          </li>

          <li class="nav-item">
            <a href="logout.php" class="nav-link">
              <p>
                Logout
              </p>

            </a>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
  <script>
    function onlogout() {
      alert("logining out");
    }
  </script>