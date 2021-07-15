import React from 'react'

const Rating = (props) => {
    return (
        <div  style={{color:'white',}}>
        <div style={{fontSize:'2rem',}}>
        {props.avgVote}/10
        </div>
        <div>
        Total votes - {props.totalVotes}
        </div>
        </div>
    )
}
export default Rating;
