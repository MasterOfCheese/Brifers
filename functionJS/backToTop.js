const mybutton = document.getElementById('myBtn')

window.onscroll = function() {scrollFunction()}

function scrollFunction() {
  if ( document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000 ) {
    mybutton.style.opacity = '1'
    mybutton.style.zIndex = '10'
    mybutton.style.transition = 'all 0.3s ease-in'
  } else {
    mybutton.style.opacity = '0'
  }
}

function topFunction() {
  window.scrollTo({ top: 100, behavior: 'smooth' })
}