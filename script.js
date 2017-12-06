$(document).ready(() => {

  $('.trade').hide();

  $('.trreq').on('click', event => {
     $(event.currentTarget).next().toggle();
    });

  $('.send').on('click', () => {
    $('.trade').hide();
        alert("Your trade request is send!");
  })


});
