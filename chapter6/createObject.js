/**
 * Created by Administrator on 2015/8/11.
 */
console.log("---直接量========")
var f ={
    "1":"12"
}
console.log(f["1"]);
console.log("---new========")
var f1 = new Object();
f1["1"]="12";

console.log(f["1"]);

console.log("---inherit========")
function inherit(o){
    if(Object.create){
        console.log("使用了Object.create")
        return Object.create(o);
    }
    function f(){

    }
    f.prototype = o;
    return new f();
}

var f2 = inherit(Object.prototype);
