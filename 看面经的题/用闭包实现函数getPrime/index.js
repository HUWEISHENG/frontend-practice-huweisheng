 		//  //判断一个数是不是质数
 		//  const ifz = (num) => {
 		//      for (let i = num; i > 0; i--)
 		//          if (num % i == 0 && num !== i && i !== 1) return false
 		//      return true
 		//  }

 		//  //从2开始（包括2）往上加
 		//  const Prim = () => {
 		//      let i = 2
 		//      const getnum = () => {
 		//          while (!ifz(i)) i++
 		//          return i++;
 		//      }
 		//      return getnum
 		//  }

 		//  var getPrim = Prim()

 		//  getPrim() //2
 		//  getPrim() //3
 		//  getPrim() //5
 		//  getPrim() //7

 		const ifz = function (num) {
 			for (let i = num; i > 0; i--) {
 				if (num % i == 0 && num != i && i != 1) {
 					return false;
 				}
 			}
 			return true;
 		}

 		const Prim = () => {
 			let i = 2;
 			return getnum = () => {
 				while (ifz(i) != true) i++;
 				return i++;
 			}
 		}

 		var getNum = Prim();
 		console.log(getNum());
 		console.log(getNum());
 		console.log(getNum());