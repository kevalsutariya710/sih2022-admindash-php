
$('#datatablesIndex').DataTable({

    "paging": true,
    "lengthChange": true,
    "searching": true,
    "ordering": true,

    "select": true,
    "info": true,
    "autoWidth": true,
    "responsive": true,
    "buttons": ["copy", "csv", "excel", "print", "colvis"]
}).buttons().container().appendTo('#datatablesIndex_wrapper .col-md-6:eq()');
