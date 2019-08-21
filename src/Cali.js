import React from 'react';

import './App.css';

function Cali() {
  return (

<div class="wrapper">
<div className="title-wrapper">
  <h1><span className="bigger">35mm</span> <span className="box-border">Live</span> <span className="line-around">Shot</span> by <span className="big">Ronisha White</span></h1>
</div>

<div className="imageContainer">
<div className="image">
  <img img src='/images/beach.jpg' height="500px" style={{maxWidth: '100%'}} alt="" />
</div>
<div className="image">
  <img src="images/amoeba.jpg" height="500px" style={{maxWidth: '100%'}} alt="" />
</div>
<div className="image">
  <img src="images/diner.jpg" height="500px" style={{maxWidth: '100%'}} alt="" />
</div>    

</div>
</div>
);
}
    
        


export default Cali;
