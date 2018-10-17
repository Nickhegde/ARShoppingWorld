import React, { Component, Fragment } from 'react';
import './ShoppingWorld.css';
import shirtObj from './3dmodels/Tshirt1/BetterTShirt/BetterShirt.obj';
import shirtMtl from './3dmodels/Tshirt1/BetterTShirt/BetterShirt.mtl';

class Areality extends Component {
    constructor() {
      super();
      this.flag=0,this.scalex=0.5,this.scaley=0.5,this.scalez=0.5,this.posz=2,
      this.$= document.getElementById.bind(document),
      this.arDecr=this.$("arSizeDecrement"),
      this.state = {}
    } 
            setAttributes=(key,value) => {
                var arObj=this.$("arObject");
                arObj.setAttribute(key,value);
            }
            removeAttributes=(key) => {
                var arObj=this.$("arObject");
                arObj.removeAttribute(key);
            }
        twoDEvent=()=>{
            var arBtn=this.$("arRotationBtn"),
             arAnimation=this.$("objAnimation");
            arBtn.classList.toggle("arRotationBtnactive");
            if (this.flag == 0) {
                console.log("if flag");
                this.setAttributes('rotation', '270 0 0');
                this.setAttributes('position', '0 0 2');
                this.flag = 1;
                arAnimation.emit('endrotate');
            } else {
                 this.removeAttributes('rotation');
                this.setAttributes('position', '0 0 1');
                this.flag = 0;
                arAnimation.emit('rotate');
                console.log("done");
            }
        }
        increase=()=>{
            this.scalex += 0.5;
            this.scaley += 0.5;
            this.scalez+=0.5;
            this.posz+=0.5;

            if (this.scalex >= 5) {
                this.scalex = this.scaley=this.scalez=0.5;
                this.posz=4;
            }
            console.log("scale:");
            console.log('' + this.scalex + ',' + this.scaley + ',' + this.scalez + '');
            // this.setAttributes('scale', '' + this.scalex + ',' + this.scaley + ',' + this.scalez + '');
            this.setAttributes('scale', '2.5 3.5 1');
            this.setAttributes('position', '0 0 12');
            // this.setAttributes('position', '0 0 '+this.posz+'');
            console.log('0 0 '+this.posz+'');
        }
        decrease=()=>{
            this.scalex -= 1;
            this.scaley -= 0.5;
            this.scalez-=0.5;
            this.posz-=0.5;
            if (this.scalex <= 0) {
                this.scalex = this.scaley=this.scalez=0.5;
                this.posz=4;
            }
            console.log('' + this.scalex + ',' + this.scaley + ',' + this.scalez + '');
            this.setAttributes('scale', '' + this.scalex+ ',' + this.scaley + ',' + this.scalez + '');
            this.setAttributes('position', '0 0 '+this.posz+'');
            // this.setAttributes('position', '0 0 2');
        }
    render() {
        console.log(shirtMtl,shirtObj);
        return (
         <Fragment>
             {/* { this.setElements()} */}
             <body className="shoppingWorldAr">
             <div className="shoppingWorldAr">
                <a-scene embedded arjs='source type:webcam;' >
                   <a-assets>
                        <a-asset-item id="tshirt-obj" src={shirtObj}></a-asset-item>
                        <a-asset-item id="tshirt-mtl" src={shirtMtl}></a-asset-item>
                    </a-assets>

                    <a-marker preset='hiro'>
                        <a-entity id="arObject"  position="0 0 1" rotation="0 0 0" scale=" 0.5 0.5 0.5"
                        obj-model="obj:#tshirt-obj; mtl:#tshirt-mtl" >
                             <a-animation id="objAnimation" attribute="rotation" dur="5000" fill="forwards" to="0 360 0"
                              position="1 2 3" repeat="indefinite" begin="rotate" end="endrotate">
                            </a-animation> 
                      </a-entity>
                    </a-marker>
                </a-scene>
             <button className="arButtonScreen" id="arRotationBtn" onClick={this.twoDEvent}>2D</button>
             <button  className="arButtonScreen" id="arSizeIncrement" onClick={this.increase}>+</button>
             <button  className="arButtonScreen" id="arSizeDecrement" onClick={this.decrease} >-</button>
            </div>
            </body>
        </Fragment>
        )
    }
}
     export default Areality;

