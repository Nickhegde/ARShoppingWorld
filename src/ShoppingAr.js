import React, { Component, Fragment } from 'react';
import './ShoppingWorld.css';
import shirtObj from '3dmodels/Tshirt1/BetterTShirt/BetterShirt.obj';
import shirtMtl from '3dmodels/Tshirt1/BetterTShirt/BetterShirt.mtl';

class Areality extends Component {
    constructor() {
        super();
        this.flag = 0, this.scalex = 0, this.scaley = 0.5, this.scalez = 0.5, this.posz = -1,
            this.$ = document.getElementById.bind(document),
            this.arDecr = this.$("arSizeDecrement")
    }
    setAttributes = (key, value) => {
        var arObj = this.$("arObject");
        arObj.setAttribute(key, value);
    }
    removeAttributes = (key) => {
        var arObj = this.$("arObject");
        arObj.removeAttribute(key);
    }
    increase = () => {
        this.scalex += 0.5;
        this.scaley += 0.5;
        this.scalez = 1.5;
        this.posz += 2.2;

        if (this.scalex > 4) {
            this.scalex = this.scaley = 0.5;
            this.posz = -1;
        }
        this.setAttributes('scale', '' + this.scalex + ' ' + this.scaley + ' ' + this.scalez + '');
        this.setAttributes('position', '0 0 ' + this.posz + '');
    }
    decrease = () => {
        this.scalex -= 0.5;
        this.scaley -= 0.5;
        this.scalez = 1.5;
        this.posz -= 2.2;
        if (this.scalex <= 0) {
            this.scalex = this.scaley = this.scalez = 0.5;
            this.posz = -1;
        }
        this.setAttributes('scale', '' + this.scalex + ' ' + this.scaley + ' ' + this.scalez + '');
        this.setAttributes('position', '0 0 ' + this.posz + '');
    }

    render() {
        return (
            <Fragment>
                <div className="shoppingWorldAr">
                    <a href="/Men" exact="true">
                        <button className="arButtonScreen" id="arBackBtn" >Back</button>
                    </a>
                    <button className="arButtonScreen" id="arSizeIncrement" onClick={this.increase}>+</button>
                    <button className="arButtonScreen" id="arSizeDecrement" onClick={this.decrease} >-</button>
                    <a-scene embedded arjs='debugUIEnabled: false; sourceType: webcam;'>
                        <a-assets>
                            <a-asset-item id="tshirt-obj" src={shirtObj}></a-asset-item>
                            <a-asset-item id="tshirt-mtl" src={shirtMtl}></a-asset-item>
                        </a-assets>

                        <a-marker preset='hiro'>
                            <a-entity id="arObject" position="0 0 -1" rotation="270 0 0" scale=" 0.01 0.01 0.01"
                                obj-model="obj: #tshirt-obj; mtl: #tshirt-mtl">
                                <a-animation id="objAnimation" attribute="rotation" dur="5000" fill="forwards" to="0 360 0"
                                    position="1 2 3" repeat="indefinite" begin="rotate" end="endrotate">
                                </a-animation>
                            </a-entity>
                        </a-marker>
                    </a-scene>
                </div>
            </Fragment>
        )
    }
}
export default Areality;

