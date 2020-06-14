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


// Dark Mode Implemented using DOM Manipulation of css variables

const colorWhite = '#ffffff';
const bgColorDark = '#282c35';
const bgColorLight = '#edecec';
const itColor = '#959595';
const primeColor = '#5a5a5a';
const secondColor = '#7c746c';
const shadowDarkOnLight = '#cccccc';
const shadowLightOnLight = '#fefefe';
const shadowDarkOnDark = '#22252d';
const shadowLightOnDark = '#2e333d';

let root = document.documentElement;

const mode = document.querySelector('.mode');
const darkMode = document.querySelector('#dark-mode');
const lightMode = document.querySelector('#light-mode');

function changeModeToDark () {
  darkMode.classList.add('hide');
  lightMode.classList.remove('hide');

  darkMode.classList.remove('show');
  lightMode.classList.add('show');
  root.style.setProperty('--background-color', bgColorDark);
  root.style.setProperty('--it-color', colorWhite);
  root.style.setProperty('--prime-color', colorWhite);
  root.style.setProperty('--second-color', colorWhite);
  root.style.setProperty('--shadow-dark', shadowDarkOnDark);
  root.style.setProperty('--shadow-light', shadowLightOnDark);

}

function changeModeToLight () {
  lightMode.classList.add('hide');
  darkMode.classList.add('show');

  lightMode.classList.remove('show');
  darkMode.classList.remove('hide');
  root.style.setProperty('--background-color', bgColorLight);
  root.style.setProperty('--it-color', itColor);
  root.style.setProperty('--prime-color', primeColor);
  root.style.setProperty('--second-color', secondColor);
  root.style.setProperty('--shadow-dark', shadowDarkOnLight);
  root.style.setProperty('--shadow-light', shadowLightOnLight);

}

darkMode.addEventListener('click', changeModeToDark);
lightMode.addEventListener('click', changeModeToLight);