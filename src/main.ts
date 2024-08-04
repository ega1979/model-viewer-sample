import '@google/model-viewer'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Model Viewer Sample</h1>
    <model-viewer
      src="/voxel_knight.glb"
      alt="A 3D model of a voxel knight"
      auto-rotate
      camera-controls
      autoplay
    ></model-viewer>
  </div>
`