import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Card";
import Link from "./Link";
import "./index.css"

function ncard(val){
  return(
    <Card 
      key = {val.id}
      imgsrc={val.imgsrc}
      link= {val.link}
      name={val.name}
      title={val.title}
    
    />
  )
}


ReactDOM.render(
  <>
  <h1>Top 5 Netflix series</h1>
  {Link.map(ncard)}    
  </>,
  document.getElementById('root')
);



