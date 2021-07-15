import React,{useEffect,useState} from 'react'
import { bindActionCreators} from "redux"
import { connect } from "react-redux"
import Poster from "../Poster/Poster"
import AgeComponent from "./Misc/AgeComponent"
import {Modal,Button} from 'react-bootstrap'
import Rating from "./Misc/Rating"
import Genre from "./Misc/Genre"
import ReactHLS from "react-hls"
import {requestTopMovies} from "../../actions"

import './Movie.scss'

 const Movie = (props) => {

 const [show,setShow] = useState(false);
 const handleClick = () =>{
     setShow(true);
 }
const handleClose = ()=>{
  setShow(false)
}
      useEffect(() => {
        props.requestTopMovies();
    }, [])
    

     const id = { id: props.match.params.movieId };
    return (
        <div>
            {props.data.results?<>
            
            {props.data.results.filter(el=>el.id === parseInt(id.id)).map((el,idx)=>{
                return(
                    <div id="movieCont">
                    <div className="leftFlex">
                    <div className="poster">
                    <Poster posterPath = {el.poster_path}/> 
                    </div>
                    <div className="mTitle">
                    <h1>{el.title}</h1>
                    </div>
                    </div>
                    <div className="rightFlex">
                    <div className="mOverview">
                        <div>Overview:</div>
                        <span>{el.overview}</span>
                    </div>
                    <div className="infoIcons">
                    <div className="info">
                    <AgeComponent adult={el.adult}/>
                    </div>
                    <div className="info">
                    <Rating avgVote={el.vote_average} totalVotes = {el.vote_count}/>
                    </div>
                    <div className="info">
                    <Genre gArray={el.genre_ids}/>
                    </div>
                    <div className="info">
                    <div style={{fontSize:'1.5rem'}}>Released on </div>
                    <div>{el.release_date}</div>
                    </div>
                    </div>
                    <div className="preview">
                    <button onClick={handleClick}>Preview</button>
                          <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>Preview</Modal.Title>
                            </Modal.Header>
                            <Modal.Body> 
                            <ReactHLS autoplay controls url = {'https://content.jwplatform.com/manifests/yp34SRmf.m3u8'}/> 
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            </Modal.Footer>
                        </Modal>
                   {/*  */}
                   </div>
                    </div>
                   
                    </div>
                    
                )
            })}
            
            </>:<>..loading</>}
        </div>
    )
}

const mapStateToProps = state => ({data: state.data});

const  mapDispatchToProps = dispatch =>
    bindActionCreators({requestTopMovies}, dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(Movie);
