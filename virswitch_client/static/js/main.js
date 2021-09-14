// $(document).ready(function() {
//     $('.js-example-basic-multiple').select2();
// });

// stop page refresh for vm list view on active modal
$(".modal").on('show.bs.modal', function(){
   window.stop();
});
$(".modal").on('hidden.bs.modal', function(){
    window.location.reload()
});

//triggered when modal is about to be shown
$('#description').on('show.bs.modal', function(e) {

    //get data-id attribute of the clicked element
    let vmName = $(e.relatedTarget).data('vm-name');
    let vmIp = $(e.relatedTarget).data('vm-ip');
    let vmPass = $(e.relatedTarget).data('vm-pass');

    //populate the textbox
    // alert(vmName)
    // alert(vmIp)
    // alert(vmPass)
    $(e.currentTarget).find('input[placeholder="vmName"]').val(vmName);
    $(e.currentTarget).find('input[placeholder="vmIp"]').val(vmIp);
    $(e.currentTarget).find('input[placeholder="vmPass"]').val(vmPass);
});

