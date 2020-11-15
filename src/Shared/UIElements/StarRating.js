import React, { useState } from 'react'

import { FaStar } from 'react-icons/fa';


import * as classes from "./StarRating.module.css";

const StarRating = () => {

    const [starRating, setStarRating] = useState(0);
    const [hover, setHover] = useState(null);
    return (
        <div>
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;

                return (
                    <label key={index*2}>
                    <input className={classes.inputStarRating} type="radio" name="starRating" value={ratingValue} onClick={() => setStarRating(ratingValue)} />
                    <FaStar onMouseEnter={ () => {setHover(ratingValue)}} onMouseLeave={ () =>{setHover(null)}} color={ratingValue <= (hover || starRating) ? "#ffc107" : "#e4e5e9"} className={classes.star} />
                    </label>
                )
            })}
        </div>
    )
}

export default StarRating
