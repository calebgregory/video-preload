// preload a few bytes of the video file, and if that is successful, create a
// video element with that URL as its src. this results in two fetches of the
// video total
const root = document.getElementById('root')
const message = document.createElement('p')
message.innerHTML = 'prefetching video...'
root.appendChild(message)

function createVideo(parent, src) {
  const video = document.createElement('video')
  video.src = src
  parent.appendChild(video)
}

var xhr = new XMLHttpRequest()
xhr.open("GET", SRC, true)
xhr.responseType = "arraybuffer"
xhr.setRequestHeader('Range', '1-1000')

xhr.onload = function(oEvent) {
  message.innerHTML = 'successfully loaded'
  createVideo(root, SRC)
}

xhr.onerror = function(oEvent) {
  message.innerHTML = 'failed to load'
}

xhr.send()
