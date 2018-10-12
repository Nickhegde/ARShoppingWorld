import React, { Component, Fragment } from 'react';
import 'aframe';
// import 'aframe-particle-system-component';
// import 'aframe-camera-compnent';
// import  'aframe-react-components';
// import  'aframe-animation-component';
// import {Entity, Scene, Marker} from 'aframe-react';
import './ShoppingWorld.css';

class Areality extends Component {
    constructor() {
      super();
      this.state = ({
        // user1: {}
        });
      
    }

    render() {
        return (
         <Fragment>
             <div className="shoppingWorldAr" overflow="hidden">
             {console.log("div")}
                <a-scene embedded arjs='source type:webcam;'>
                {console.log("a-scene")}
                    <a-marker preset='hiro'>
                    {console.log("a-marker")}
                        <a-entity id="arObject">
                             <a-animation id="objAnimation" attribute="rotation" dur="5000" fill="forwards" to="0 360 0"
                              position="0 0 2" repeat="indefinite" begin="rotate" end="endrotate">
                              {console.log("a-animation")}</a-animation> 
                              <a-camera></a-camera>
                      </a-entity>

                    </a-marker>
                    {/* <Entity camera></Entity> */}

                    
                </a-scene>
                {/* <video autoPlay="" muted="" playsInline="" style={{width: '941.333px', height: '706px', position: 'absolute',top: '0px',zIndex: '-2',marginLeft: '-403.667px',marginTop: '0px'}}>
                </video> */}
             <button id="arRotationBtn">2D</button>
             <button id="arSizeIncrement">+</button>
             <button id="arSizeDecrement">-</button>
            </div>
        </Fragment>
        )
    }
    }
     export default Areality;

{/* <Route exact path="/normal_redirect" render={() => {window.location.href="normal_redirect.html"}} /> */}