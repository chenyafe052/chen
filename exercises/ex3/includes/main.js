window.onload = function () {
    var cubes;
    var square;
    var i;

    for (i=0; i<4; ++i) {
        addCubes();
    }

    document.getElementById("plus").onclick=function() {
        addCubes();
    }

    function addCubes() {
        cubes=document.createElement("div");
        square=document.getElementById("cubes");
        square.appendChild(cubes);
        
        cubes.style.height= "250px";
        cubes.style.width= "250px";
        cubes.style.backgroundColor= "#000000";
        cubes.style.cssFloat= "left";
        cubes.style.opacity= Math.random(); 
             
    } 
}
