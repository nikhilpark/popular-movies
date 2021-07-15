import React,{useEffect,useState} from 'react'
import { bindActionCreators} from "redux"
import { connect } from "react-redux"
import Poster from "../Poster/Poster"
import LikeButton from "../LikeButton/LikeButton"
import {requestTopMovies} from "../../actions"
import {Link} from 'react-router-dom'
import './Home.scss'

const Home = (props) => {

   
   

    useEffect(() => {
        props.requestTopMovies();
    }, [])
    
 

    return (
        <>
        {props.data.results?
        <>
        <div id="gridContainer">
        {props.data.results.map((el,idx)=>{
                return(
                    <div className="movie" key={idx}>
                        <div>
                      
                            <div className="titleCont">
                            
                                <div className="title" >
                                <Link to={`/movie/${el.id}`}>
                                {el.title.length>25?
                                <>
                                {el.title.substring(0,25)} - 
                                </>:<>
                                {el.title}
                                </>}
                                </Link>
                                </div>
                                <div className="heart">
                                <LikeButton/>
                                </div>
                            </div>
                            <div className="descCont">
                                <div>
                                {el.overview.substring(0,200)} ...
                                 
                                </div>
                            </div>
                      
                        <Poster posterPath = {el.poster_path}/> 
                    </div>
    
                    </div>
                )
            })}
            </div>

        
        </>:<>....loading</>}
            
     </>
    )
}

const mapStateToProps = state => ({data: state.data});

const  mapDispatchToProps = dispatch =>
    bindActionCreators({requestTopMovies}, dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(Home);
