import React from "react";
import './App.css';
import imageInSrc from "./imageInSrc.jpg";
import myVideo from "./maVideo.mp4";
import imageInPublic from "./public/imageInPublic.jpg";
import './style.css';

function App() {
  return (
<>
   <div >

      <h1 className="title red">NEW APP</h1>
      <br/>
      <img src={imageInSrc} alt ='imageSrc' />
      <br/>

      <img src={imageInPublic} alt ='imagePublic' />

  </div>

     <video controls autoPlay muted >
      <commandes vidéo width="320" height="240"/>

        <source src={myVideo} type="video/mp4" />

     </video>

</>
  );
}

export default App;
