<?php
session_start();
error_reporting(0);

$user = $_SESSION['email'];

if ($user == null) {
    echo "request forbidden!!!";
} else {


?>

    <?php
    include('includes/header.php');
    include('includes/topbar.php');
    include('includes/sidebar.php');
    ?>
    <div class="content-wrapper">
        <div class="container-fluid">
            <section class="content-header">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Appointment Details</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="index.php">Home</a></li>
                            <li class="breadcrumb-item active">Appointment Details</li>
                        </ol>
                    </div>
                </div>

                <?php
                $datafromApi =  htmlspecialchars($_GET["APNT_ID"]);

                $opData = file_get_contents('http://172.17.87.229/6senses/admin_get_appt_details.php?APPT_ID=' . $datafromApi);
                $opDataResult = json_decode($opData, true);

                if ($opDataResult['error'] === true) {
                ?> <center>
                        <div class="error-page">
                            <h2 class="headline text-warning"> 404</h2>

                            <div class="error-content">
                                <h3><i class="fas fa-exclamation-triangle text-warning"></i> Oops! Page not found.</h3>

                                <p>
                                    We could not find the page you were looking for.
                                    Meanwhile, you may <a href="index.php">return to dashboard</a> or try using the search form.
                                </p>
                                <form class="search-form">
                            </div>
                            <!-- /.input-group -->
                            </form>
                        </div>
                    </center>
                <?php
                } else {
                ?>

                    <br>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6">

                                <div class="card  elevation-3">
                                    <!-- <div class="card-header bg-gray">
                                <h3 class="card-title">About Appointment</h3>
                            </div> -->


                                    <div class="card-body">
                                        <strong><i class="fas  mr-1"></i>APPT_ID : </strong><?php echo $opDataResult['Appointments'][0]['APNT_ID'] ?>
                                        <hr>

                                        <strong><i class="fas  mr-1"></i>APNT_DETAIL :</strong> <?php echo $opDataResult['Appointments'][0]['APNT_DETAIL'] ?>
                                        <hr>

                                        <strong><i class="fas  mr-1"></i>OP_ID :</strong> <?php echo $opDataResult['Appointments'][0]['OP_ID'] ?>
                                        <hr>

                                        <strong><i class="fas  mr-1"></i>OP_F_NAME : </strong><?php echo $opDataResult['Appointments'][0]['OP_F_NAME'] ?>
                                        <hr>

                                        <strong><i class="fas  mr-1"></i> OP_L_NAME: </strong><?php echo $opDataResult['Appointments'][0]['OP_L_NAME'] ?>
                                        <hr>
                                        <strong><i class="fas  mr-1"></i>OP_PHONE_NO : </strong><?php echo $opDataResult['Appointments'][0]['OP_PHONE_NO'] ?>
                                        <hr>

                                        <strong><i class="fas  mr-1"></i>APNT_STATUS :</strong> <?php echo $opDataResult['Appointments'][0]['APNT_STATUS'] ?>

                                    </div>

                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="card card elevation-3">
                                    <!-- <div class="card-header bg-gray">
                                <h3 class="card-title">About Appointment</h3>
                            </div> -->


                                    <div class="card-body">

                                        <strong><i class="far  mr-1"></i>U_ID : </strong><?php echo $opDataResult['Appointments'][0]['USERID'] ?>

                                        <hr>

                                        <strong><i class="fas  mr-1"></i>U_F_NAME : </strong><?php echo $opDataResult['Appointments'][0]['F_NAME'] ?>
                                        <hr>

                                        <strong><i class="fas  mr-1"></i>U_L_NAME : </strong><?php echo $opDataResult['Appointments'][0]['L_NAME'] ?>
                                        <hr>
                                        <strong><i class="fas  mr-1"></i>U_PHONE_NO : </strong><?php echo $opDataResult['Appointments'][0]['U_PHONE_NO'] ?>
                                        <hr>
                                        <strong><i class="fas  mr-1"></i>U_ADDRESS : </strong><?php echo $opDataResult['Appointments'][0]['U_ADDRESS'] ?>
                                        <hr>
                                        <strong><i class="fas  mr-1"></i>U_CITY : </strong><?php echo $opDataResult['Appointments'][0]['U_CITY'] ?>
                                        <hr>
                                        <strong><i class="fas  mr-1"></i>U_STATE : </strong><?php echo $opDataResult['Appointments'][0]['U_STATE'] ?>
                                        <hr>
                                        <strong><i class="fas  mr-1"></i>U_PINCODE : </strong><?php echo $opDataResult['Appointments'][0]['U_PINCODE'] ?>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
            <!-- <div class="card  elevation-3">

            <div id="map"></div>

            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAwoYRkSGxYH9XRYFQ7ynp37hKrJLbq1-c&callback=initMap" defer></script>
        </div> -->
        </div>
    </div>
<?php } ?>
</div>
</div>
</div>
<?php
    include('includes/footer.php');
}
?>