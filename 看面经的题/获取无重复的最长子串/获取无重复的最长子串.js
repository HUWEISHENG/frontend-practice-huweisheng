function lengthOfLongestSubstr(s) {
    let res = 0; //用于存放最长子串长度
    let str = "" //用于存放无重复子串
    let length = s.length;
    for (let i = 0; i < length; i++) {
        let index = str.indexOf(s[i]);
        if (index === -1) {
            str = str + s[i];
            res = res < str.length ? str.length : res;
        } //无重复子串
        else {
            str = str.substr(index + 1) + s[i];
            res = res < str.length ? str.length : res;
        } //重复子串
    }
    return res;
}



console.log(lengthOfLongestSubstr("1234321"))