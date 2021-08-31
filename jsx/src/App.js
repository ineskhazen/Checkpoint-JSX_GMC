import React from "react";
import "./style.css";
import image1 from "./assets/imageInSrc.jpg";

function App() {
  return (
    <div className="App">
    
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="titlered ">Ines elkhazen </h1>
          <br />
          <img src={image1} alt="nature" />
          <br />
          <img src="/assets/imageInPublic.jpg" alt="fille" />
        </div>
        <iframe width={320} height={240} src="https://www.youtube.com/embed/hG7sJqWsCPQ?start=123" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
}

export default App;
