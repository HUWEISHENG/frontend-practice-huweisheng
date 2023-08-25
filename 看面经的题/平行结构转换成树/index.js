    gongsi = () => {
        let oldArr = [
            { id: '1000', pid: null, name: '西安总部' }, // 1级
            { id: '10001', pid: '1000', name: '西安雁塔分部 - 子公司' }, // 2级
            { id: '10002', pid: '1000', name: '西安莲湖分部 - 子公司' }, // 2级
            { id: '100021', pid: '10002', name: '西安莲湖分部 - 西桃园分部 - 子公司' }, // 3级
            { id: '2000', pid: null, name: '北京总部' }, // 1级
            { id: '20001', pid: '2000', name: '北京丰台分部 - 子公司' }, // 2级
            { id: '20002', pid: '2000', name: '北京朝阳分部 - 子公司' }, // 2级
            { id: '200021', pid: '20002', name: '北京朝阳分部 - 广渠路分部 - 子公司' } // 3级
        ]
        let newArr = []
        this.treeS(oldArr,null,newArr)
        console.log(newArr)
    }

    treeS = (oldArr,id,newArr) => {
        oldArr.forEach((i)=>{
            if(i.pid == id) { newArr.push(i)}
        })
        newArr.forEach((item)=> {
            item.children = []
            this.treeS(oldArr,item.id, item.children)
        })
    }

    gongsi()