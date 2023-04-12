export const documentStyles = document.documentElement.style
export const stepsContainer = document.getElementById('steps')
export const buttonPrev = document.getElementById('prev')
export const buttonNext = document.getElementById('next')
export const steps = [1, 2, 3, 4]

// styles
export const enableStyles = {
  isToAddClass: true,
  className: 'disabled',
  isDisable: true,
  cursor: 'not-allowed'
}

export const disableStyles = {
  isToAddClass: false,
  className: 'disabled',
  isDisable: false,
  cursor: 'pointer'
}
