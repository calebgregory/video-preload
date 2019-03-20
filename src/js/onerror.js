const root = document.getElementById('root')

const video = document.createElement('video')
video.src = SRC
video.controls = true
video.addEventListener('error', (err) => {
  console.log('video.onerror', err)
})
video.addEventListener('loadeddata', (evt) => {
  console.log('video.onloadeddata', evt)
})
video.addEventListener('loadedmetadata', (evt) => {
  console.log('video.onloadedmetadata', evt)
})

root.appendChild(video)
