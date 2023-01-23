System.register("chunks:///_virtual/en.ts",["cc"],(function(e){"use strict";var n;return{setters:[function(e){n=e.cclegacy}],execute:function(){n._RF.push({},"731c0da0kRC0ZhhjZRWn7yO","en",void 0);var a=window,s=e("languages",{});a.languages||(a.languages={}),a.languages.en=s,n._RF.pop()}}}));

System.register("chunks:///_virtual/resources",["./en.ts","./zh.ts"],(function(){"use strict";return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/zh.ts",["cc"],(function(e){"use strict";var s;return{setters:[function(e){s=e.cclegacy}],execute:function(){s._RF.push({},"8958fXWCQFBl5xc1gsdLFF4","zh",void 0);var n=window,t=e("languages",{});n.languages||(n.languages={}),n.languages.zh=t,s._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/resources', 'chunks:///_virtual/resources'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});