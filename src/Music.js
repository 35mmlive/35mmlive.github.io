import React from 'react';

import './App.css';

function Music() {
  return (
    <div class="wrapper">
  <div className="title-wrapper">
    <h1><span className="bigger">35mm</span> <span className="box-border">Live</span> <span className="line-around">Shot</span> by <span className="big">Ronisha White</span></h1>
  </div>

  <div className="imageContainer">
  <div className="image">
    <img src="images/sr.jpg" height="500px" style={{maxWidth: '100%'}} alt="" />
  </div>
  <div className="image">
    <img src="images/sr69.jpg" height="500px" style={{maxWidth: '100%'}} alt="" />
  </div>
  <div>  <a href><span className="box-border">HOME</span></a></div>
</div>
</div>

  );
  }

export default Music;
