/**
 * Created by Administrator on 15-8-15.
 */
/******ECMA5's array function******/

/************遍历，映射，过滤，检测，简化，搜索**************/

/********
 *遍历
 *
 */
var forEachArray = [1, 2, 3, 4, 5];
forEachArray.forEach(function (value, index, data) {
    var tempp = "第" + index + "值为：" + value;
    data[index] = tempp;
});
//console.log(forEachArray);

/**
 *
 * 映射
 *
 */

var mapArray = [1, 2, 3, 4];

var mapArrayResult = mapArray.map(function (value, index, data) {
    return value + 1;
});
//console.log("mapArray:"+mapArray);
//console.log("mapArrayResult:"+mapArrayResult);

/*
 *
 *过滤
 *
 */

var filterArray = [1, 2, 3, 4];
var filterArrayResult = filterArray.filter(function (value, index, data) {
    return value > 2;
})
/*
 console.log("filterArray:" + filterArray);
 console.log("filterArrayResult:" + filterArrayResult);*/

/*
 *
 * 检测---every,some
 *
 */

var inspectArray = [1, 2, 3, 4];
//inspectArray = [];//数组为空时，every返回true,some返回false
var everyResult = inspectArray.every(function (value, index, data) {

    return value >= 1 && index < 4;
})
var someResult = inspectArray.some(function (value, index, data) {
    return value >= 1 && index < 4;
})
/*
 console.log(everyResult);
 console.log(someResult);*/

/*
 *
 * 简化-reduce,reduceRight
 *
 */

var reduceArray = [1, 2, 3, 4];
reduceArray = [];//为空时，如果不传入初始化值，将报错
reduceArray = [1];//当仅有一个元素，并且没有传入初始值，将不调用简化函数
reduceArray = [1];//当仅有一个元素，并且没有传入初始值，将不调用简化函数
var reduceResult = reduceArray.reduce(function (x, y, index, data) {
    //console.log(index);console.log(data);
    return x + y;
}/*,0*/);
var reduceRightResult = reduceArray.reduceRight(function (x, y, index, data) {
    //console.log(x + y);
    return x + y;
}, 0);
//console.log(reduceResult);
//console.log(reduceRightResult);

/*
 *
 * 搜索---indexOf,lastIndexOf
 *
 */

var indexOfArray = [1,2,1];
var indexOfResult = indexOfArray.indexOf(1,5/*不填写默认为0*/);
var lastIndexOfResult = indexOfArray.lastIndexOf(1);
console.log(indexOfResult);
console.log(lastIndexOfResult);