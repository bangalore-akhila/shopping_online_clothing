// displays the starts and handles rating logic

// import React from 'react'
import { useState } from 'react'
import './ratings.scss'

const StartRating = ({starsCount = 5}) => {
    const [rating, setRating] = useState(0);

const Star = ({starId, rating, onClick}) => {
    let classname = "blankStar"
    if(rating >= starId) {
        classname= "selectedStar"
    } 
    return (
        <div  onClick={onClick} >
        <svg height="30px" width="30px" version="1.1" id="Capa_1" 
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.867 53.867" fill="#000000">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
                <polygon className={classname} points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 ">
                    </polygon> 
                    </g>
                    </svg>
        </div> 
    )
}

  return (
    <div>
        <h3>Rate Your Product</h3>
    <div className='starContainer'>
        {
            [...Array(starsCount)].map((star,i) => {
                return <div>
                    <Star 
                    key={i}
                    starId={i+1}
                    rating = {rating}
                    onClick={()=>setRating(i+1)}/>
                </div>
            })
        }
        
    </div>
    </div>
  )
}

export default StartRating

