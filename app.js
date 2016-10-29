

// function replace(){
// var x = document.getElementById("word").value;

// for(i = 0; i<x.length; i+=2){
//   x = x.replace(x.charAt(i),"0");
// }

// document.write(x);
// }
// var a = 7 * y; 
// var b = a - 1;
// var c = b * 13;
// var d = (+c) + (+x);
// var e = (+d) + (+3);
// var f = e * 11;
// var g = f - y;
// var h = g - x;
// var i = h / 10;
// var j = (+i) + (+11);
// var k = j / 100;



function find(){
var x = document.getElementById("day").value;
var y = document.getElementById("month").value;
var z = document.getElementById("name").value;



var a = (((((((((((7 * y)- 1)* 13)+ (+x))+(+3))* 11)- y)- x)/ 10)+ (+11))/ 100);

a = a.toString();

    var b = a.slice(0 , 2);
    var c = a.slice(3);

document.write("Name: " + z + "<br>");

document.write("Month of birth: " + b + "<br>");

document.write("Day of Birth: " + c + "<br>");


}
