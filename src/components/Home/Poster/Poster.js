import React,{useEffect,useState} from 'react'
import './Poster.scss'

const Poster = (props) => {

    const [url,setUrl]  = useState();
    useEffect(()=>{

        const getPoster = async () =>{
            const response = await fetch(`https://image.tmdb.org/t/p/w400/${props.posterPath}`)
     
            setUrl(response.url)
           
        }
      
        getPoster();
    
    },[])
  
    return (
        <img id="posterImg" src={url}/>
    )
}

export default Poster