function countUp(element, start, end, duration) {
  let startTime = ''

  function animate(currentTime) {
    if (startTime === null) startTime = currentTime
    const progress = currentTime - startTime
    const increment = Math.min(Math.floor(progress / duration * (end - start) + start), end)
    element.textContent = increment
    if (increment < end) {
      requestAnimationFrame(animate)
    }
  }

  requestAnimationFrame(animate)
}

window.addEventListener('load', () => {
  const countElement = document.getElementById('count1')
  const countElement1 = document.getElementById('count01')
  const countElement2 = document.getElementById('count02')
  const countElement3 = document.getElementById('count03')
  const countElement4 = document.getElementById('count04')
  countUp(countElement, 8, 25, 2000)
  countUp(countElement1, 40, 90, 2000)
  countUp(countElement2, 190, 224, 2000)
  countUp(countElement3, 520, 568, 2000)
  countUp(countElement4, 10, 25, 2000)
})