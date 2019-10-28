$(document).ready(function() {
  $('form#grocery').submit(function(event) {

    event.preventDefault();

    var blanks = ['itemOne', 'itemTwo', 'itemThree', 'itemFour', 'itemFive'];


    var groceries = blanks.map(function(blank) {
      return $('input#' + blank).val().toUpperCase();
    });
    $('form').hide();
    groceries.sort();

    blanks.forEach(function(ele, ind) {
      $('.' + ele).text(groceries[ind]);
    });


    $('#output').show();

  });
});
