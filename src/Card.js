import React from "react";

function Card(props){
    return(
        <>
        <div className='cards'>
          <div className='card'>
            <img src={props.imgsrc} alt='mypic' className='card-img'/>
            <div className='card-info'>
              <span className='card-category' >{props.title}</span>
              <h3 className='card-title'>{props.name}</h3>
              <a href={props.link} target='-blank'>
                <button className="btn btn-success">Watch Now</button>
                
              </a>
            </div>
          </div>
        </div>
          
    
      </> 
    )
  }
export default Card;