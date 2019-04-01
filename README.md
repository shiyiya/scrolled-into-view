# scrolled-into-view

[Example](https://shiyiya.github.io/scrolled-into-view)  
Determining whether the element into the document view.

# Quick start

Place the following `<script>` near the end of your pages, right before the closing </body> tag, to enable them.

```html
<script src="your-path/scrolledintoview.min.js"></script>
<script>
  var listen = scrolledIntoView(
    'h1', // Element selector
    function(el) {
      // in
      el.classList.add('in')
    },
    function(el) {
      // out
      el.classList.remove('in')
    }
  )
  // remove listen
  listen.destroy()
</script>
```

# API

```javascript
/**
 *
 *
 * @export
 * @param {string} target
 * @param {function} intoCallback
 * @param {function} outCallback
 * @returns {object} new ScrolledIntoViewClass(...)
 */
scrolledIntoView(target, intoCallback, outCallback)

new scrolledIntoViewClass({
  target,
  intoCallback,
  outCallback
})
```
