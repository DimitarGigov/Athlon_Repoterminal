// import $ from 'jquery'; Before using jQuery, install it with `yarn add jquery`
import './more-javascript/more.js';
import './style/style.scss';
import './style/vendor/style.css';

const saySomething = (something) => {
  console.log(something); // eslint-disable-line no-console
};

saySomething('Something! (index.js)');
		
function submitUserForm() {
  var response = grecaptcha.getResponse();
  if (response.length == 0) {
    document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red;">This field is required.</span>';
    return false;
  }
  return true;
}

function verifyCaptcha() {
  document.getElementById('g-recaptcha-error').innerHTML = '';
}

var bunnyVideo = document.getElementById('bVideo');
function playPause() {
  var el = document.getElementById('playButton');
  if (bunnyVideo.paused) {
    bunnyVideo.play();
    el.className = '';
  } else {

    bunnyVideo.pause();
    el.className = 'playButton';
  }
}
bunnyVideo.addEventListener('click', playPause, false);
/*
To use jQuery, first install it as a dependency: `yarn add jquery`.
Then include `import $ from 'jquery';` at the top every JavaScript file that uses jQuery.
$('h1').mouseover(() => {
  alert('h1 hovered!');
});
*/
