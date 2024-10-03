import React from 'react'
import './Video.css'

const Video = () => {
  return (
    <div>
      <div className="video-container">
      <h2 className="titulo-tetrico">Attack</h2>
      <video width="600" controls>
        <source src="/src/Componentes/Video_1/Attack.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
    </div>
    </div>
  )
}

export default Video
