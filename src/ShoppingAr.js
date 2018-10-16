import React, { Component, Fragment } from 'react';
import './ShoppingWorld.css';
import shirtObj from './3dmodels/Tshirt1/BetterTShirt/BetterShirt.obj';
import shirtMtl from 'https://bitbucket.org/Nikhilhegde619/arshoppingworld/src/master/3dmodels/Tshirt1/BetterTShirt/BetterShirt.mtl';
var ObjMtlLoader = require("obj-mtl-loader");
var objMtlLoader = new ObjMtlLoader();
objMtlLoader.load("./3dmodels/Tshirt1/BetterTShirt/BetterShirt.obj", "./3dmodels/Tshirt1/BetterTShirt/BetterShirt.mtl", function(err, result) {
  if(err){
    /*Handle error here*/
    console.log("helloerror");
  }
  var vertices = result.vertices;
  var faces = result.faces;
  var normals = result.normals;
  var textureCoords = result.textureCoords;
  var facesMaterialsIndex = result.facesMaterialsIndex;
  var materials = result.materials;
  console.log(vertices);
console.log(faces);
console.log("hello");
});


class Areality extends Component {
    constructor() {
      super();
      this.state = ({
        // user1: {}
        });
    }
    render() {
        console.log(shirtMtl,shirtObj);
        // const urlmtl = "url("+shirtMtl+")";
        // const urlobj = "url("+shirtObj+")";

        // const model = `obj:${urlobj}; mtl:${urlmtl}`;
        // console.log(model);
        return (
         <Fragment>
             <body className="shoppingWorldAr">
             <div className="shoppingWorldAr">
                <a-scene embedded arjs='source type:webcam;' >
                   <a-assets>
                        <a-asset-item id="tshirt-obj" src={shirtObj}>
                        <a-asset-item id="tshirt-mtl" src={shirtMtl}></a-asset-item>
                    </a-assets>

                    <a-marker preset='hiro'>
                        <a-entity id="arObject"
                        obj-model="obj:#tshirt-obj; mtl:#tshirt-mtl">
                             <a-animation id="objAnimation" attribute="rotation" dur="5000" fill="forwards" to="0 360 0"
                              position="1 0 0" repeat="indefinite" begin="rotate" end="endrotate">
                            </a-animation> 
                      </a-entity>
                    </a-marker>
                </a-scene>
             <button id="arRotationBtn">2D</button>
             <button id="arSizeIncrement">+</button>
             <button id="arSizeDecrement">-</button>
            </div>
            </body>
        </Fragment>
        )
    }
    }
     export default Areality;

