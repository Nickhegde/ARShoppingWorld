
var $ = document.getElementById.bind(document),
    private = {
        elements: {
            header: $("heading"),
            images: $("images"),
            tshirt1: $("tshirt1"),
            tshirt2: $("tshirt2"),
            tshirt3: $("tshirt3"),
            tshirt4: $("tshirt4"),
            ar: $("arContainer")
        }
    },
    x = private.elements;
function iframeAr(value){
    x.header.classList.toggle("itemNoDisplay");
    x.ar.style.display = "block";
    x.images.classList.toggle("itemNoDisplay");
    x.ar.setAttribute('src', "ShoppingWorldAr.html?param="+value);
}
x.tshirt1.addEventListener("click", function () {
    iframeAr(1);
});
x.tshirt2.addEventListener("click", function () {
    iframeAr(2);
});
x.tshirt3.addEventListener("click", function () {
    iframeAr(3);
});
x.tshirt4.addEventListener("click", function () {
    iframeAr(4);
});
