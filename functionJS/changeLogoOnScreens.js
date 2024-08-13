function updateLogo() {
  const logo = document.getElementById('logo')
  const mediaQuery = window.matchMedia('(min-width: 200px) and (max-width: 1199px)')

  if (mediaQuery.matches) {
      logo.src = 'images/logoSecond.png'
  } else {
      logo.src = 'images/logo.png'
  }
}
updateLogo()

window.addEventListener('resize', updateLogo)