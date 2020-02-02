//Nav Menu Toggle
function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}

$(a[ref*="#"]).on('click') function(e)
{
  e.preventDefault()

  $('html, body').animate(
    {
      scrolTop:$($(this).attr('href')).offset().top,
    }
    5,
    'linear'
  )
}
