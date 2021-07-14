import React,{useEffect,useState} from 'react'


const Poster = (props) => {

    const [url,setUrl]  = useState();
    useEffect(()=>{

        const getPoster = async () =>{
            const response = await fetch(`https://image.tmdb.org/t/p/w400/${props.posterPath}`)
     
            setUrl(response.url)
           
        }
      
        getPoster();
    
    },[])
    console.log(props)
    return (
        <img style={{width:"16vw",padding:'1rem'}} src={url}/>
    )
}

export default Poster