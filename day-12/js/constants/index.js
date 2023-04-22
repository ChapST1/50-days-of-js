export const fragment = document.createDocumentFragment()
export const questionContainer = document.querySelector('.questions-container')
export const data = [
  {
    id: window.crypto.randomUUID(),
    question: "Why shouldn't we trust atoms?",
    replay: 'They make up everything'
  },

  {
    id: window.crypto.randomUUID(),
    question: 'What do you call someone with no body and no nose?',
    replay: 'Nobody knows.'
  },

  {
    id: window.crypto.randomUUID(),
    question: "What's the object-oriented way to become wealthy?",
    replay: 'Inheritance'
  },

  {
    id: window.crypto.randomUUID(),
    question: 'How many tickles does it take to tickle an octopus?',
    replay: 'Ten Tickles!'
  },

  {
    id: window.crypto.randomUUID(),
    question: 'What is: 1 + 1?',
    replay: 'Depends on who are you asking.'
  }

]
