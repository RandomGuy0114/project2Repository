

//   function redirect() {
//     setTimeout(function(){ 
//         window.location.href = "userDashboard.html";
//     }, 3000);
// }

$(document).ready(function() {
  $('#proceed-button').click(function() {
    var isValid = true;
    $('form input').each(function() {
      if ($(this).val() === '') {
        isValid = false;
        return false;
      }
    });
    if (isValid) {
        $('#orderModal').modal('show'); 
      } else {
        $('.alert-danger').show();
        setTimeout(function(){
          $('.alert-danger').hide();
        }, 3000);
      }
  });
});


