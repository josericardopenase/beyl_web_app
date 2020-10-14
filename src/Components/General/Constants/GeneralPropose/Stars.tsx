import React from 'react'
import { Row } from 'react-bootstrap';
import { Star } from './ComponentsStars/Star';


interface props{
    number: number
}

export const Stars = ( {number} : props) => {
    return (
        <div className="d-flex">
            {
                [1,2,3,4,5].map((x) => <Star key={x} enable={x > number ? false : true}></Star>)
            }

        </div>
    )
}
