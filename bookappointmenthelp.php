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
    include('includes/sid.php');
    ?>
    <div class="content-wrapper">
        <center>
            <div class="content-header">

                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class=" text-dark">Helpline Book Appointment</h1>
                        </div>
                    </div><!-- /.row -->
                </div><!-- /.container-fluid -->

            </div>
        </center>

        <section class="content">
            <div class="row">
                <!-- left column -->
                <div class="col-md-6 ">
                    <!-- general form elements -->
                    <div class="card card-gray">
                        <div class="card-header">
                            <h3 class="card-title">Book Appointment</h3>
                        </div>
                        <!-- /.card-header -->
                        <!-- form start -->
                        <form role="form">
                            <div class=" card-body ">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">First Name</label>
                                    <input type="text" name="fn" class="form-control" id="First Name" placeholder="First Name">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Last Name</label>
                                    <input type="text" class="form-control" id="Last Name" placeholder="Last Name">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Phone No</label>
                                    <input type="number" class="form-control" id="Phone" placeholder="Phone No">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Address</label>
                                    <input type="textarea" class="form-control" id="Adress" placeholder="Address">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">City</label>
                                    <input type="textarea" class="form-control" id="city" placeholder="city">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">State</label>
                                    <input type="textarea" class="form-control" id="state" placeholder="state">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Pincode</label>
                                    <input type="number" class="form-control" id="Pincode" placeholder="Pincode">
                                </div>
                                <div class="custom-control custom-radio">
                                    <input class="custom-control-input" type="radio" id="customRadio1" name="customRadio" value="op">
                                    <label for="customRadio1" class="custom-control-label">Fresh Aadhaar</label>
                                </div>
                                <div class="custom-control custom-radio">
                                    <input class="custom-control-input" type="radio" id="customRadio2" name="customRadio" value="opp" checked>
                                    <label for="customRadio2" class="custom-control-label">Update Aadhaar</label>
                                </div>
                                <br>
                                <!-- <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                    <label class="form-check-label" for="exampleCheck1">All the Details are correct</label>
                                </div> -->
                            </div>
                            <!-- /.card-body -->
                            <center>
                                <div class="card-footer">
                                    <button type="submit" class="btn btn-primary" onclick="onkick();onalert();">Submit</button>
                                </div>
                            </center>
                            <script>
                                function onkick() {
                                    var fn = document.getElementById("First Name").value;
                                    var ln = document.getElementById("Last Name").value;
                                    var ph = document.getElementById("Phone").value;
                                    var ad = document.getElementById("Adress").value;
                                    var citys = document.getElementById("city").value;
                                    var states = document.getElementById("state").value;
                                    var pn = document.getElementById("Pincode").value;
                                    var op = document.querySelector('input[name="customRadio"]:checked').value;

                                    var details = {
                                        F_NAME: fn,
                                        L_NAME: ln,
                                        U_PHONE_NO: ph,
                                        U_ADDRESS: ad,
                                        U_CITY: citys,
                                        U_STATE: states,
                                        U_PINCODE: pn,
                                        APNT_DETAIL: op
                                    };

                                    var formBody = [];
                                    for (var property in details) {
                                        var encodedKey = encodeURIComponent(property);
                                        var encodedValue = encodeURIComponent(details[property]);
                                        formBody.push(encodedKey + "=" + encodedValue);
                                    }
                                    formBody = formBody.join("&");

                                    fetch('http://172.17.87.229/6senses/book_appt_by_helpline.php', {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                                        },
                                        body: formBody
                                    })
                                }

                                function onalert() {
                                    answer = window.confirm("Are you Sure?");
                                    if (answer) {

                                    } else {
                                        event.preventDefault()
                                    }
                                }
                            </script>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    </div>

<?php
    include('includes/footer.php');
}
?>