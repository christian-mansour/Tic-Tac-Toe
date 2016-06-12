$(document).ready(function() {

    var player = 1;
    $('.turn').html("Player " + player + "'s" + " turn");

  function playerResult(userValue){

    if($('.one').hasClass(userValue) && $('.two').hasClass(userValue) && $('.three').hasClass(userValue)) {
      return true;
    } else if ($('.four').hasClass(userValue) && $('.five').hasClass(userValue) && $('.six').hasClass(userValue)) {
      return true;
    } else if ($('seven').hasClass(userValue) && $('.eight').hasClass(userValue) && $('.nine').hasClass(userValue)) {
      return true;
    } else if ($('.one').hasClass(userValue) && $('.four').hasClass(userValue) && $('.seven').hasClass(userValue)) {
      return true;
    } else if ($('.two').hasClass(userValue) && $('.five').hasClass(userValue) && $('.eight').hasClass(userValue)) {
      return true;
    } else if ($('three').hasClass(userValue) && $('.six').hasClass(userValue) && $('.nine').hasClass(userValue)) {
      return true;
    } else if ($('.one').hasClass(userValue) && $('.five').hasClass(userValue) && $('.nine').hasClass(userValue)) {
      return true;
    } else if ($('.three').hasClass(userValue) && $('.five').hasClass(userValue) && $('.seven').hasClass(userValue)) {
      return true;
    } else {
      return false;
    }
  }

  $('.cell').on('click', function(event){

      var cellSelected = $(this);

      if(cellSelected.hasClass('fa fa-star') || cellSelected.hasClass('fa fa-paw')){
        alert('Cannot select a space that has already been selected.');
      } else if (player === 1) {
          cellSelected.addClass('fa fa-star');
          if(playerResult('fa fa-star')) {
            $('.playerOneWins').html('Congratulations, ' + 'Player ' + player + '!' + ' You win' + '!');
          } else {
            player = 2;
            $('.turn').html("Player " + player + "'s" + " turn");
          }
        } else {
          cellSelected.addClass('fa fa-paw');
          if(playerResult('fa fa-paw')) {
            $('.playerTwoWins').html('Congratulations, ' + 'Player ' + player + '!' + ' You win' + '!');
          } else {
            player = 1;
            $('.turn').html("Player " + player + "'s" + " turn");
          }
      }
  });

  $('form').click(function(){
    $('.cell').removeClass('fa fa-star');
    $('.cell').removeClass('fa fa-paw');
    $('.playerOneWins').empty();
    $('.playerTwoWins').empty();
  });

});

