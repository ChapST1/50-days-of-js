const counter = document.getElementById('counter')

let value = Number(counter.textContent.replace('%', ''))

const loadingData = {
  max: 100,
  duration: 20
}

function loading () {
  const startLoading = setInterval(() => {
    counter.textContent = `${value++}%`
    document.body.style.backdropFilter = `blur(${(loadingData.max) - value}px)`

    if (value > 55) {
      counter.style.color = 'transparent'
      counter.style.userSelect = 'none'
    }

    if (value > loadingData.max) {
      clearInterval(startLoading)
    }
  }, loadingData.duration)
}
window.addEventListener('load', loading)
