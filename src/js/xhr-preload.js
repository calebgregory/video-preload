// load the video data as a blob using an XHR, then create a video element with
// that blob as its src
const root = document.getElementById('root')

const video = document.createElement('video')

const loader = document.createElement('p')
loader.innerHTML = 'loaded: 0%'
root.appendChild(loader)

var xhr = new XMLHttpRequest()
xhr.open("GET", SRC, true)
xhr.responseType = "arraybuffer"

xhr.onload = function(oEvent) {
  const blob = new Blob([ oEvent.target.response ], { type: MIMETYPE })

  video.src = URL.createObjectURL(blob)

  root.appendChild(video)
}

xhr.onprogress = function(oEvent) {
  if (oEvent.lengthComputable) {
    const percentComplete = oEvent.loaded/oEvent.total
    loader.innerHTML = `loaded: ${Number.parseFloat(percentComplete * 100).toPrecision(3)}%`
  }
}

xhr.send()
