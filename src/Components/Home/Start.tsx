import React from 'react'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'

type Rating = {
    vote_average: number,
}

function Start({ vote_average }: Rating) {
    return (
        <>
            <span>{vote_average >= 1 ? <FaStar /> : vote_average >= 0.5 ? <FaStarHalfAlt /> : <FaRegStar />}</span>
            <span>{vote_average >= 2 ? <FaStar /> : vote_average >= 1.5 ? <FaStarHalfAlt /> : <FaRegStar />}</span>
            <span>{vote_average >= 3 ? <FaStar /> : vote_average >= 2.5 ? <FaStarHalfAlt /> : <FaRegStar />}</span>
            <span>{vote_average >= 4 ? <FaStar /> : vote_average >= 3.5 ? <FaStarHalfAlt /> : <FaRegStar />}</span>
            <span>{vote_average >= 5 ? <FaStar /> : vote_average >= 4.5 ? <FaStarHalfAlt /> : <FaRegStar />}</span>
        </>
    )
}

export default Start
