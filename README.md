# video-preload

```
open src/index.html
```

### resources
- https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content
- https://developers.google.com/web/fundamentals/media/fast-playback-with-video-preload

### instructions

#### config

Configuration is in [js/config.js](./src/js/config.js).  There are two
URLs there.  One works, the other fails.  Switch value of `SRC` to
whichever URL you want to work with.

```javascript
const SRC = WORKS
// or
const SRC = FAILS
```

You may also need to change the mimetype.  I know that the video that
`WORKS` is `video/quicktime`.  I don't know the mimetype of the video
that `FAILS`.

#### changing methods of loading video

In [index.html](./src/index.html), change script to that which you wish
to prototype.

For example, change

```html
<html>
  ...
  <body>
    ...
    <!-- Change script src below to javascript you wish to execute -->
    <script src="js/onerror.js"></script>
  </body>
</html>
```

to

```html
<html>
  ...
  <body>
    ...
    <!-- Change script src below to javascript you wish to execute -->
    <script src="js/xhr-preload-partial.js"></script>
  </body>
</html>
```
