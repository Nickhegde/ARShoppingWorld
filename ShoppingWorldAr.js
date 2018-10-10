var $ = document.getElementById.bind(document),
    prv = {
        ele: {
            arObj: $("arObject"),
            arBtn: $("arRotationBtn"),
            arIncr: $("arSizeIncrement"),
            arDecr: $("arSizeDecrement"),
            arAnimation: $("objAnimation"),
        },
        data: [{
                url: "/3dmodels/Tshirt1/BetterTShirt/BetterShirt.obj",
                mtl: "/3dmodels/Tshirt1/BetterTShirt/BetterShirt.mtl"
            },
            {
                url: "/3dmodels/Tshirt2/T-shirt.obj",
                mtl: "/3dmodels/Tshirt2/T-shirt.mtl"
            },
            {
                url: "/3dmodels/Tshirt7/f500-man-tshirt.obj",
                mtl: "/3dmodels/Tshirt7/f500-man-tshirt.mtl"
            },
            {
                url: "/3dmodels/Tshirt8/tshirt-new.obj",
                mtl: "/3dmodels/Tshirt8/tshirt-new.mtl"
            }
        ]
    },
    y = prv.ele,
    z = prv.data,
    flag = 0,
    pos = 0.5;

function getParamValue(paramName) {
    var url = window.location.search.substring(1); //get rid of "?" in querystring
    var qArray = url.split('&'); //get key-value pairs
    for (var i = 0; i < qArray.length; i++) {
        var pArr = qArray[i].split('='); //split key and value
        if (pArr[0] == paramName)
            return pArr[1]; //return value
    }
}
var param = getParamValue('param');
console.log(param);

function setAttributes(key, value) {
    y.arObj.setAttribute(key, value);
}

function removeAttributes(key) {
    y.arObj.removeAttribute(key);
}

function arDisplay(param) {

    setAttributes('obj-model', 'obj: url(' + z[param - 1].url + ');mtl: url(' + z[param - 1].mtl + ')');
}
setAttributes('position', '1 0 0');
setAttributes('rotation', '0 0 0');
setAttributes('scale', ''+pos+','+pos+',' + pos + '');
// setAttributes('scale','0.04,0.04,0.04');
setAttributes('rotation', '0 0 0');
arDisplay(param);
y.arBtn.addEventListener("click", function () {
    y.arBtn.classList.toggle("arRotationBtnactive");
    if (flag == 0) {
        console.log("if flag")
        setAttributes('rotation', '270 0 0');
        setAttributes('position', '0 0 3');
        flag = 1;
        y.arAnimation.emit('endrotate');
    } else {
        console.log("else flag")
        removeAttributes('rotation');
        setAttributes('position', '1 0 0');
        flag = 0;
        y.arAnimation.emit('rotate');
        console.log("done");
    }
})
y.arIncr.addEventListener("click", function () {
    pos += 0.1;
    if (pos >= 1) {
        pos = 0.1;
    }
    console.log(pos);
    console.log('' + pos + ',' + pos + ',' + pos + '');
    setAttributes('scale', '' + pos + ',' + pos + ',' + pos + '');
})
y.arDecr.addEventListener("click", function () {
    pos -= 0.1;
    if (pos <= 0) {
        pos = 1;
    }
    console.log(pos);
    console.log('' + pos + ',' + pos + ',' + pos + '');
    setAttributes('scale', '' + pos + ',' + pos + ',' + pos + '');
})