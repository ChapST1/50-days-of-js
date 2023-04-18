export const SOUNDS_NAME = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
export const SOUNDS_AUDIO = {
  applause: new window.Audio('./sounds/applause.mp3'),
  boo: new window.Audio('./sounds/boo.mp3'),
  gasp: new window.Audio('./sounds/gasp.mp3'),
  tada: new window.Audio('./sounds/tada.mp3'),
  victory: new window.Audio('./sounds/victory.mp3'),
  wrong: new window.Audio('./sounds/wrong.mp3')
}
// Dom Elements
export const app = document.getElementById('app')
export const fragment = document.createDocumentFragment()
