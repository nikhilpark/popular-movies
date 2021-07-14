import Heart from "react-animated-heart"
import React from 'react'

 const LikeButton = () => {
       const [isclick, setClick] = React.useState(false);
    return (
        <div>
            <Heart isClick={isclick} onClick={()=>{setClick(!isclick)} }/>
        </div>
    )
}

export default LikeButton;
