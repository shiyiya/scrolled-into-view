# scrolled-into-view

Determining whether the element into the document view.

# use

```javascript
scrolledIntoView(
  'h1',
  function(el) {
    // in
    el.classList.add('in')
  },
  function(el) {
    // out
    el.classList.remove('in')
  }
)
```
