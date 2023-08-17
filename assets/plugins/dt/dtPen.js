// var xmlhttp = new XMLHttpRequest();
// var url = "http://192.168.1.16/6senses/admin_get_all_pend_appt.php";
// xmlhttp.open("GET", url, true);
// xmlhttp.send();
// xmlhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         var data = JSON.parse(this.responseText);
//         //console.log(data.Appointments)

//         $('#datatablesPen').DataTable({
//             //"ajax": "data/objects.txt",
//             "data": data.Appointments,
//             "columns": [{
//                 "data": "APNT_ID",
//             },
//             {
//                 "data": "USERID"
//             },
//             {
//                 "data": "F_NAME"
//             },
//             {
//                 "data": "L_NAME"
//             },
//             {
//                 "data": "U_PHONE_NO"
//             },
//             {
//                 "data": "U_ADDRESS"
//             },
//             {
//                 "data": "U_CITY"
//             },
//             {
//                 "data": "U_STATE"
//             },
//             {
//                 "data": "U_PINCODE"
//             },
//             {
//                 "data": "U_LATITUDE"
//             },
//             {
//                 "data": "U_LONGITUDE"
//             },
//             {
//                 "data": "APNT_DETAIL"
//             }
//             ],
//             "language": {
//                 "emptyTable": "No data available in table", //
//                 "loadingRecords": "Pleasffe wait .. ", // default Loading...
//             },

//             "scrollY": true,
//             "paging": true,
//             "lengthChange": true,
//             "searching": true,
//             "ordering": true,

//             "select": true,
//             "info": true,
//             "autoWidth": true,
//             "responsive": true,
//             "buttons": ["copy", "csv", "excel", "print", "colvis"]
//         }).buttons().container().appendTo('#datatablesPen_wrapper .col-md-6:eq()');


//     }
// }

$('#datatablesPen').DataTable({

    "paging": true,
    "lengthChange": true,
    "searching": true,
    "ordering": true,

    "select": true,
    "info": true,
    "autoWidth": true,
    "responsive": true,
    "buttons": ["copy", "csv", "excel", "print", "colvis"]
}).buttons().container().appendTo('#datatablesPen_wrapper .col-md-6:eq()');
