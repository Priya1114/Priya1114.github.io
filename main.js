$(document).ready(function() {

// jQuery for list Section
// handles the hide and show of list options
  $('#expTab').addClass('list-card-active');

  $('#education').hide();
  $('#skills').hide();
  $('#interests').hide();


  $('#expTab').click(function() {

    $('#expTab').addClass('list-card-active');
    $('#eduTab').removeClass('list-card-active');
    $('#skillsTab').removeClass('list-card-active');
    $('#intTab').removeClass('list-card-active');

    $('#experience').show();
    $('#education').hide();
    $('#skills').hide();
    $('#interests').hide();
  });

  $('#eduTab').click(function() {

    $('#eduTab').addClass('list-card-active');
    $('#expTab').removeClass('list-card-active');
    $('#skillsTab').removeClass('list-card-active');
    $('#intTab').removeClass('list-card-active');

    $('#education').show();
    $('#experience').hide();
    $('#skills').hide();
    $('#interests').hide();
  });

  $('#skillsTab').click(function() {

    $('#skillsTab').addClass('list-card-active');
    $('#eduTab').removeClass('list-card-active');
    $('#expTab').removeClass('list-card-active');
    $('#intTab').removeClass('list-card-active');

    $('#skills').show();
    $('#education').hide();
    $('#experience').hide();
    $('#interests').hide();
  });

  $('#intTab').click(function() {

    $('#intTab').addClass('list-card-active');
    $('#eduTab').removeClass('list-card-active');
    $('#expTab').removeClass('list-card-active');
    $('#skillsTab').removeClass('list-card-active');

    $('#interests').show();
    $('#education').hide();
    $('#experience').hide();
    $('#skills').hide();
  });

});
