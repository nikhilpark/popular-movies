import React from 'react'
import adultIcon from './a.png'
import allIcon from './e.png'
const AgeComponent = (props) => {

    return(
    <>

        {
           props.adult?
           <>
      <img style={{width:'80px'}} src={adultIcon}/>
           </>:
           <>
        <img style={{width:'80px'}} src={allIcon}/>

           </>
        }
    </>
    )
}

export default AgeComponent