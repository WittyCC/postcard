$(document).ready(function() {
  $('#blanks form').submit(function(event) {
    event.preventDefault();
    var addresseeInput = $("input#addressee").val();

    $('.name').hide();
    $('#postcard').show();
    $('.friend').text(addresseeInput);

  });
});
