// window.onload = function () {
//     var oUl = document.getElementById("ul1");
//     oUl.onclick = function (ev) {
//         var ev = ev || window.event;
//         var target = ev.target || ev.srcElement;
//         if (target.nodeName.toLowerCase() == 'li') {
//             alert(123);
//             alert(target.innerHTML);
//         }
//     }
// }

window.onload = function () {
    let ul1 = document.getElementById('ul1');
    ul1.onclick = function (ev) {
        ev = ev || window.event;
        target = ev.target || ev.srcElement;
        if (target.nodeName.toLowerCase() == 'li') {
            alert(111)
        }
    }
}