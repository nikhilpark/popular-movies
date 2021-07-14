import React,{useEffect} from 'react'
import { bindActionCreators} from "redux"
import { connect } from "react-redux"
import Poster from "./Poster/Poster"
import ReactHLS from "react-hls"
import {requestTopMovies} from "../../actions"
import './Home.scss'

const Home = (props) => {

   

    useEffect(() => {
        props.requestTopMovies();
        console.log(props.data);
    }, [])
 
    return (
        <>
        {props.data.results?
        <>
        <div style={{display:'flex',flexWrap:'wrap',}}>
        {props.data.results.map((el,idx)=>{
                return(
                    <div key={idx} style={{ border:"1px solid black", padding:"1rem",height:'fit-content', margin:"1rem",width:'20vw',}}>
                        <div>
                        <Poster posterPath = {el.poster_path}/>
                        </div>
                        <div>
                        <h1>
                        {el.title}
                        </h1>
                        </div>
                        {/* <div>
                        <ReactHLS autoplay controls url = {'https://content.jwplatform.com/manifests/yp34SRmf.m3u8'}/>
                        </div> */}
                        <div >{el.overview.substring(0,150)} .... <span style={{color:'blue',textDocaration:'underline'}}>Read more</span></div>
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
