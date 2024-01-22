import React from 'react'
import imagen from "./images/Perfil.JPG"
function Info() {
  return (
    <div> 
       <img src= {imagen}alt="" /> 
       <h1>David estiven correa areiza </h1>
       <div>
        <button>
            Contactame
        </button>
        <button>
            Ver mi paginas 
        </button>
       </div>
    </div>
  )
}

export default Info
