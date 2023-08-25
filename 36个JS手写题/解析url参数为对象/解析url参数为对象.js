// function getUrlQuery(url) {
//     let str = url.substr(url.indexOf('?') + 1);
//     let res = new Object();
//     const arr = str.substr(0).split('&');
//     for (let i = 0; i < arr.length; i++) {
//         let item = arr[i].split('=');
//         res[item[0]] = item[1];
//     }
//     return res;
// }



var url = "http://www.baidu.com/we/index.html?id=898602B8261890349226&aaa=123&ccc=456";

console.log(getUrlQuery(url))