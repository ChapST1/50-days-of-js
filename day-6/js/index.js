const allItems = document.querySelectorAll('.item')

allItems.forEach((item) => {
  observerFn(item)
})

function observerFn (element) {
  const options = {
    rootMargin: '0px 0px 0px 0px'
  }
  const observer = new IntersectionObserver((entries) => { // eslint-disable-line
    entries.forEach(entri => {
      const currentElement = entri.target
      currentElement.classList.toggle('item__show', entri.isIntersecting)
    })
  }, options)

  observer.observe(element)
}
