// Set button to click.
var button = document.getElementById('menu-toggle');
var nav = document.getElementById('nav-box');

// Click the button.
button.onclick = function() {
  // Toggle class "opened". Set also aria-expanded to true or false.
  if (-1 !== button.className.indexOf('opened')) {
    button.className = button.className.replace(' opened', '');
    nav.className += 'hide';
    button.setAttribute('aria-expanded', 'false');
  } else {
    button.className += ' opened';
    nav.className = nav.className.replace('hide', '');
    button.setAttribute('aria-expanded', 'true');
  }
};
