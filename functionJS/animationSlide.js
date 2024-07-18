function resetElements() {
  const elements = [
    document.getElementById('quote'),
    document.getElementById('heading'),
    document.getElementById('describe'),
    document.querySelector('.slide-title__btn-btn1'),
    document.querySelector('.slide-title__btn-btn2'),
    document.getElementById('moveBack'),
    document.getElementById('moveOn')
  ]

  elements.forEach((element) => {
    element.style.opacity = '0'
    element.style.transform = 'translateY(20px)'
  })
}


function animateElements() {
  const elements = [
    document.getElementById('quote'),
    document.getElementById('heading'),
    document.getElementById('describe')
  ]

  elements.forEach((element, index) => {
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)'
    }, index * 600)
  })


  const button1 = document.querySelector('.slide-title__btn-btn1')
  const button2 = document.querySelector('.slide-title__btn-btn2')

  setTimeout(() => {
    button1.style.opacity = '1'
    button1.style.transform = 'translateY(0)'
    button2.style.opacity = '1'
    button2.style.transform = 'translateY(0)'
  }, 1200)


  const moveBack = document.getElementById('moveBack')
  const moveOn = document.getElementById('moveOn')

  setTimeout(() => {
    moveBack.style.opacity = '1'
    moveBack.style.transform = 'translateX(0)'
    moveOn.style.opacity = '1'
    moveOn.style.transform = 'translateX(0)'
  }, 1600)
}

function onPageLoading() {
  animateElements()
}


document.addEventListener("DOMContentLoaded", function() {
  onPageLoading()
  
  document.getElementById('moveBack').addEventListener('click', function() {
    resetElements()
    setTimeout(animateElements, 1900)
  })

  document.getElementById('moveOn').addEventListener('click', function() {
    resetElements()
    setTimeout(animateElements, 1900 )
  })
})