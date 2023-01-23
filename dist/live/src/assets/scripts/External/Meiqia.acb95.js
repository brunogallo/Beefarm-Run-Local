function Meiqia() {
    //加入美洽模块
    this.MeiqiaGet = function (eid) {
        (function (a, b, c, d, e, j, s) {
            a[d] = a[d] || function () {
                (a[d].a = a[d].a || []).push(arguments)
            };
            j = b.createElement(c),
                s = b.getElementsByTagName(c)[0];
            j.async = true;
            j.charset = 'UTF-8';
            j.src = 'https://static.meiqia.com/widget/loader.js';
            s.parentNode.insertBefore(j, s);
        })(window, document, 'script', '_MEIQIA');
        _MEIQIA('entId', eid);
        // 在这里开启手动模式（必须紧跟美洽的嵌入代码）
        _MEIQIA('manualInit');
        _MEIQIA('withoutBtn');
        _MEIQIA('language', 'en')
    }
    //初始化
    this.MeiqiaInit = function (cb) {
        if (cb)
            _MEIQIA('allSet', cb);
        _MEIQIA('init');
    }
    //美洽打开界面
    this.MeiqiaOpenPanel = function () {
        _MEIQIA('showPanel');
    }
    //美洽用户id(初始化前设置)
    this.MeiqiaSetId = function (id) {
        _MEIQIA('clientId', id);
    }
    //美洽用户信息(初始化前设置)
    this.MeiqiaSetdata = function (data) {
        let haveData = {}
        datas = data.split(">>");
        for (let i = 0; i < datas.length; i++) {
            mapdata = datas[i].split("-");
            haveData[mapdata[0]] = mapdata[1];
        }
        _MEIQIA('metadata', haveData);
    }
    //美洽指定客服(初始化前设置)
    this.MeiqiaSetAssign = function (token, type) {
        //指定客服组
        let data = { groupToken: token }
        //指定客服
        if (type) {
            data = { agentToken: token }
        }
        _MEIQIA('assign', data);
    }

}
