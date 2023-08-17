<?php
session_start();
error_reporting(0);

$user = $_SESSION['email'];

if ($user == null) {
  echo "request forbidden!!!";
} else {


?>

  <div class="loader_bg">
    <div class="loader"></div>
  </div>

  <?php
  include('includes/header.php');
  include('includes/topbar.php');
  include('includes/sidebar.php');
  ?>
  <div class="content-wrapper">
    <div class="container-fluid">
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 class="m-0 text-dark">Active Appointments</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="index.php">Home</a></li>
                <li class="breadcrumb-item active">Active Appointments</li>
              </ol>
            </div><!-- /.col -->
          </div><!-- /.row -->
        </div><!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->

      <div class="card elevation-4">
        <!-- /.card-header -->
        <div class="card-body">
          <table id="datatablesActive" class="table table-bordered table-striped">
            <thead>
              <tr>
                <th>APNT_ID</th>
                <th>USERID</th>
                <th>F_NAME</th>
                <th>L_NAME</th>
                <th>U_PHONE_NO</th>
                <th>U_ADDRESS</th>
                <th>U_CITY</th>
                <th>U_STATE</th>
                <th>U_PINCODE</th>
                <th>U_LATITUDE</th>
                <th>U_LONGITUDE</th>
                <th>APNT_DETAIL</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>APNT_ID</th>
                <th>USERID</th>
                <th>F_NAME</th>
                <th>L_NAME</th>
                <th>U_PHONE_NO</th>
                <th>U_ADDRESS</th>
                <th>U_CITY</th>
                <th>U_STATE</th>
                <th>U_PINCODE</th>
                <th>U_LATITUDE</th>
                <th>U_LONGITUDE</th>
                <th>APNT_DETAIL</th>

              </tr>
            </tfoot>
            <tbody>
              <?php
              $data = file_get_contents('http://172.17.87.229/6senses/admin_get_all_acpt_appt.php');
              $apidata = json_decode($data, true);
              $count = count($apidata);


              ?><?php
              if ($apidata['error'] === true) {
              } else {

                $datas = $apidata['Appointments'];
                $counts = count($datas);
              ?><?php
                $i = 0;
                while ($i < $counts) { ?>
              <tr>
                <td><a href='./appointment_details.php?APNT_ID=<?php echo $datas[$i]['APNT_ID'] ?>'><?php echo $datas[$i]['APNT_ID'] ?></a></td>
                <td><?php echo $datas[$i]['USERID'] ?></td>
                <td><?php echo $datas[$i]['F_NAME'] ?></td>
                <td><?php echo $datas[$i]['L_NAME'] ?></td>
                <td><?php echo $datas[$i]['U_PHONE_NO'] ?></td>
                <td><?php echo $datas[$i]['U_ADDRESS'] ?></td>
                <td><?php echo $datas[$i]['U_CITY'] ?></td>
                <td><?php echo $datas[$i]['U_STATE'] ?></td>
                <td><?php echo $datas[$i]['U_PINCODE'] ?></td>
                <td><?php echo $datas[$i]['U_LATITUDE'] ?></td>
                <td><?php echo $datas[$i]['U_LONGITUDE'] ?></td>
                <td><?php echo $datas[$i]['APNT_DETAIL'] ?></td>
              <?php
                  $i++;
                }
              ?>
              </tr><?php
                  } ?>



            </tbody>
          </table>
        </div>
      </div>

      <section class="content">
        <div class="container-fluid">
          <!-- Small boxes (Stat box) -->
        </div>
      </section>
    </div>
  </div>

<?php
  include 'includes/footer.php';
}
?>