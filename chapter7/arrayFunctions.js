/**
 * Created by Administrator on 15-8-15.
 */
/****** array function******/

/************join,reverse,sort,concat,push,pop,unShit,shit,slice,splice**************/

/*
 *
 * join
 *
 */
var joinArray = [1, 2, 3, 4];
//console.log(joinArray.join("-"))

/*
 *reverse
 */
var reverseArray = [1, 2, 3, 4];
//console.log(reverseArray.reverse());

/*
 *sort
 */
var sortArray = [1, 2, 3, 4];
var sortResultArray = sortArray.sort(function (a, b) {
    return b - a;
});
//console.log(sortResultArray);

/*
 *concat
 */
var concatArray = [1, 2, 3, 4];
var concatResultArray = concatArray.concat([1, 2, [1]]);
//console.log(concatResultArray);

/*
 *slice
 */
var sliceArray = [1, 2, 3, 4];
var b = 1;
b = -1;//当b为负数时，表示从数组右端取元素
var sliceResultArray = sliceArray.slice(0, b);
//console.log(sliceResultArray);

/*
 *splice
 */
var spliceArray = [1,2,3,4];
var spliceResultArray = spliceArray.splice(0,null,1,2,3);
console.log(spliceResultArray)
console.log(spliceArray)