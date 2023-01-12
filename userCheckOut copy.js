$(document).ready(function() {
    $('#proceed-button').click(function() {
      var isValid = true;
      $('input').each(function() {
        if ($(this).val() === "") {
          isValid = false;
          return false;
        }
        
      });
      if (isValid === true) {
        $("#orderModal").modal("show");
        
        } else {
           $('.alert-danger').show();
          setTimeout(function(){
            $('.alert-danger').hide();
          }, 3000);
        }
    });
  });
  

//   function modalTrigger(){
//     $("#orderModal").modal("show");
// }

