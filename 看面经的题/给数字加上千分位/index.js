// 要做的事

// 123
// 1,234
// 123,456
// 1,234,567
// 12,345,678
// #方法一：倒序遍历
function qianfenwei(num) {
  // 0. 将数字转成字符
  num += '';
  let result = '';
  // 1.倒序遍历
  num = num.split('').reverse();
  num.forEach((v, i) => {
    // 2.遍历时，后遍历的数需放入先遍历的数前面
    result = v + result;
    // 3.每隔3位加一个逗号
    if (i % 3 === 2 && i !== num.length - 1) {
      result = ',' + result;
    }
  });
  console.log(result);
  return result;
}
// #方法二：分开处理
// 将数字分为长度是3倍数的部分和剩余部分 
function qianfenwei2(num) {
   const len = num.length;
   // 获取剩余长度
   const remainderLen = len % 3;
   // 取出剩余字符串
   const result = remainderLen ? [num.substring(0, remainderLen)] : [];
   // 对其余长度是3的倍数的字符做遍历
   for (let i = remainderLen; i < len; i += 3) {
     result.push(num.substring(i, i + 3));
   }
   console.log(result.join(','));
   return result.join(',');
 }
// #方法三：正则表达式
function qianfenwei3(num) {
  // 正则1：
  // const len = num.length;
  // 将字符填充为长度是3倍速的字符，在数字最前面填充0
  // const splitCount = Math.ceil(len / 3);
  // num = num.padStart(splitCount * 3, '0');
  // 每遇到三个数字就多加一个逗号
  // let result = num.replace(/(\d{3})/g,'$1,');
  // 将结果最前面的0及最末尾的逗号都替换为空
  // result = result.replace(/^0/g, '').replace(/,$/,'');

  // 正则2：
  // 替换后面是一个或多个3个数字且不是开头位置的地方为，
  const result = num.replace(/(?<!^)(?=(\d{3})+$)/g, ',');
  console.log(result);
  return result;
}