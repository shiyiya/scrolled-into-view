class scrolledIntoViewClass {
  constructor(options) {
    const defaultOption = {
      target: '.into-view',
      intoCallback: null,
      outCallback: null
    }

    for (let k in defaultOption) {
      if (defaultOption.hasOwnProperty(k) && !options.hasOwnProperty(k)) {
        options[k] = defaultOption[k]
      }
    }

    this.options = options
    this.targets = document.querySelectorAll(options.target)

    this.init()
  }

  init() {
    this.into = new Array(this.targets.length).fill(false)
    if (!window.IntersectionObserver) {
      document.addEventListener('scroll', () => {
        this.observerTarget()
      })
      return
    }
    let observerConfig = {
      root: null,
      rootMargin: '0px',
      threshold: [0, 1]
    }
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio) {
          // in
          //this.observer.unobserve(entry.target)
          const target = entry.target
          this.exparget(target, 1)
        } else {
          //this.observer.unobserve(entry.target)
          this.exparget(entry.target, 0)
        }
      })
    }, observerConfig)

    this.targets.forEach(target => {
      this.observer.observe(target)
    })
  }

  observerTarget() {
    const windowinnerHeight = window.innerHeight

    this.targets.forEach((target, k) => {
      const { top, bottom } = target.getBoundingClientRect()

      //into view
      if (!this.into[k] && top < windowinnerHeight && top > 0) {
        this.into[k] = true
        this.exparget(target, 1)
      }

      //out view
      if (
        this.into[k] &&
        ((top > windowinnerHeight && bottom > windowinnerHeight) ||
          (top < 0 && bottom < 0))
      ) {
        this.into[k] = false
        this.exparget(target, 0)
      }
    })
  }

  exparget(target, key) {
    const callback = [this.options.outCallback, this.options.intoCallback]

    callback[key] && callback[key](target)
  }

  destroy() {
    this.observer.disconnect()
  }
}

export default function scrolledIntoView(target, intoCallback, outCallback) {
  return new scrolledIntoViewClass({
    target,
    intoCallback,
    outCallback
  })
}
