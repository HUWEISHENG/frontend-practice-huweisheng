// // 封装一个get请求的方法
// function getJSON(url) {
//     return new Promise(function (resolve, reject) {
//         var XHR = new XMLHttpRequest();
//         XHR.open('GET', url, true);
//         XHR.send();

//         XHR.onreadystatechange = function () {
//             if (XHR.readyState == 4) {
//                 if (XHR.status == 200) {
//                     try {
//                         var response = JSON.parse(XHR.responseText);
//                         resolve(response);
//                     } catch (e) {
//                         reject(e);
//                     }
//                 } else {
//                     reject(new Error(XHR.statusText));
//                 }
//             }
//         }
//     })
// }


function getUrl(url) {
    return new Promise(function (resolve, reject) {
        let XHR = new XMLHttpRequest();
        XHR.open('GET', url, true)
        XHR.send();
        if (XHR.readyState == 4) {
            if (XHR.status == 200) {
                try {
                    let response = JSON.parse(XHR.responseText)
                    return resolve(response)
                } catch (e) {
                    reject(e)
                }
            } else {
                reject(XHR.statusText)
            }
        }
    })
}
var url = 'https://www.baidu.com/';
var url1 = 'https://www.baidu.com/';

function renderAll() {
    return Promise.all([getJSON(url), getJSON(url1)]);
}

renderAll().then(function (value) {
    // 建议大家在浏览器中看看这里的value值
    console.log(value);
})