/*
 * @Descripttion: 
 * @version: 
 * @Author: jiaolina
 * @Date: 2022-03-29 10:42:54
 * @LastEditors: jiaolina
 * @LastEditTime: 2022-03-29 11:22:01
 */

/**
 * 当对象 key-value 不确定的时候，把必选的 key 赋值给变量，用一个变量收敛其他可选的 key 数据。
 * 【注意】rest 属性必须始终出现在对象的末尾，否则将抛出错误。
 */
function resetAttribute() {
  const name = { name: "reset", count: 10, a: '12' };
  let { a, ...reset } = name;
  console.log(a, reset);//12 {name: "reset", count: 10}
}

/**
 * Object.entries()
 * 返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历属性的键值对数组。
 * Object.fromEntries()与其相对，将一个键值对数组变为一个对象
 */
 function entriesObject(){
  const obj = {
    name: "jimmy",
    age: 18,
    height: 188,
  };
  console.log(Object.entries(obj)); // [ [ 'name', 'jimmy' ], [ 'age', 18 ], [ 'height', 188 ] ]
  console.log(Object.entries([1, 2, 3])); // [ [ '0', 1 ], [ '1', 2 ], [ '2', 3 ] ]
 }

export default {
  resetAttribute,entriesObject
}