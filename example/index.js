import scrolledIntoView from '../src/index'

scrolledIntoView(
  'h1',
  function(el) {
    el.classList.add('in')
  },
  function(el) {
    el.classList.remove('in')
  }
)
