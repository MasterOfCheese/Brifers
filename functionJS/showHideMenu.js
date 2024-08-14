const menuButton = document.getElementById('headerMenu')
const menuItem = document.getElementById('menuItem')
const activeHide = document.getElementById('activeHide')
const menuItemClone = document.getElementById('menuItemClone')
const activeHideClone = document.getElementById('activeHideClone')

function toggleMenu() {
  if (menuItem.classList.contains('show')) {
    menuItem.classList.remove('show')
    setTimeout(() => {
      menuItem.style.opacity = '0'
      menuItem.style.right = '-39%'
    })
  } else {
    menuItem.style.opacity = '1'
    menuItem.style.right = '2%'
    setTimeout(() => {
      menuItem.classList.add('show')
    })
  }
}

function toggleMenuClone() {
  if (menuItemClone.classList.contains('show')) {
    menuItemClone.classList.remove('show')
    setTimeout(() => {
      menuItemClone.style.opacity = '0'
      menuItemClone.style.left = '-51%'
    })
  } else {
    menuItemClone.style.opacity = '1'
    menuItemClone.style.left = '0%'
    setTimeout(() => {
      menuItemClone.classList.add('show')
    })
  }
}

menuButton.addEventListener('click', toggleMenu)
menuButton.addEventListener('click', toggleMenuClone)

document.addEventListener('click', (event) => {
  if (!menuItem.contains(event.target) && !menuButton.contains(event.target)) {
    if (menuItem.classList.contains('show')) {
      toggleMenu()
    }
  }
})

document.addEventListener('click', (event) => {
  if (!menuItemClone.contains(event.target) && !menuButton.contains(event.target)) {
    if (menuItemClone.classList.contains('show')) {
      toggleMenuClone()
    }
  }
})

activeHide.addEventListener('click', function() {
  if (menuItem.classList.contains('show')) {
    menuItem.classList.remove('show')
    setTimeout(() => {
      menuItem.style.opacity = '0'
      menuItem.style.right = '-39%'
    })
  }
})

activeHideClone.addEventListener('click', function() {
  if (menuItemClone.classList.contains('show')) {
    menuItemClone.classList.remove('show')
    setTimeout(() => {
      menuItemClone.style.opacity = '0'
      menuItemClone.style.left = '-51%'
    })
  }
})