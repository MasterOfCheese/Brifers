var currentImage = 0
var totalImages = 3
var imageQueue = []

function updateImageDisplay() {
  var images = document.querySelectorAll('.slide-img')
  images.forEach(img => img.classList.remove('active'))

  var currentImageIndex = currentImage % totalImages
  images[currentImageIndex].classList.add('active')

  images.forEach((img, index) => {
    const translateXValue = (index - currentImageIndex) * 100
    img.style.transform = `translateX(${translateXValue}%)`
  })
}

function nextImage() {
  imageQueue.push(currentImage)

  currentImage = (currentImage + 1) % totalImages
  updateImageDisplay()
}

function previousImage() {
  if (imageQueue.length > 0) {
    currentImage = imageQueue.shift()
  } else {
    currentImage = (currentImage - 1 + totalImages) % totalImages
  }
  updateImageDisplay()
}

document.getElementById('moveOn').addEventListener('click', nextImage)
document.getElementById('moveBack').addEventListener('click', previousImage)

updateImageDisplay()