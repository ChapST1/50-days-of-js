const app = document.getElementById('app')

window.addEventListener('keydown', (event) => {
  showInfo(event)
})

function showInfo (ev) {
  app.innerHTML = `
    <div class="event-container">
      <span class="event__title">event.key</span>
      <div class="event__code">${ev.key}</div>
    </div>

    <div class="event-container">
      <span class="event__title">event.keyCode</span>
      <div class="event__code">${ev.keyCode}</div>
    </div>
    
    <div class="event-container">
      <span class="event__title">event.code</span>
      <div class="event__code">${ev.code}</div>
    </div>
`
}
