import React from 'react'
import GenreList from './genreList'
 const Genre = (props) => {

let genreList = []
const genres = props.gArray.map((el=>{
    let arr = GenreList.genres.filter(g=>g.id === el)
    genreList.push(arr)
}))

console.log(genreList)
    

 
    return (
        <>
        <div style={{color:'white',fontSize:'1.5rem'}} >Genres </div>
       <div style={{display:'grid',gridTemplateColumns:'1fr 1fr'}}>
        {genreList.map((el,idx)=>{
            return(
                
                <div style={{color:'white'}}>
                {el[0].name}, 
                </div>
            )
        })}
        
       </div>
        </>
    )
}

export default Genre;