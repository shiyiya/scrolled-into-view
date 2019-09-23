import scrolledIntoView from '../src/index'

scrolledIntoView(
  'h1',
  function (el) {
    el.classList.add('in')
    console.log(el.id, 'in')
  },
  function (el) {
    el.classList.remove('in')
    console.log(el.id, 'out')
  }
)
