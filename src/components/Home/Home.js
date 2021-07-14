import React,{useEffect,useState} from 'react'
import { bindActionCreators} from "redux"
import { connect } from "react-redux"
import Poster from "./Poster/Poster"
import ReactHLS from "react-hls"
import LikeButton from "../LikeButton/LikeButton"
import {requestTopMovies} from "../../actions"
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
                                <div className="title">
                                {el.title.length>25?
                                <>
                                {el.title.substring(0,25)} - 
                                </>:<>
                                {el.title}
                                </>}

                                </div>
                                <div className="heart">
                                <LikeButton/>
                                </div>
                            </div>
                            <div className="descCont">
                                <div>
                                {el.overview.substring(0,200)} ... more
                                </div>
                            </div>
                      
                        <Poster  posterPath = {el.poster_path}/>
                    </div>
                        {/*<div>
                        <h1>
                        {el.title}
                        </h1>
                        </div>
                        {/* <div>
                        <ReactHLS autoplay controls url = {'https://content.jwplatform.com/manifests/yp34SRmf.m3u8'}/>
                        </div> 
                        <div >{el.overview.substring(0,150)} .... <span style={{color:'blue',textDocaration:'underline'}}>Read more</span></div>
                        */}
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
