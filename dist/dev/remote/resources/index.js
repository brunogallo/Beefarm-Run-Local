System.register("chunks:///_virtual/en.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "731c0da0kRC0ZhhjZRWn7yO", "en", undefined);

      var win = window;
      var languages = exports('languages', {// Data
      });

      if (!win.languages) {
        win.languages = {};
      }

      win.languages.en = languages;

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/resources", ['./en.ts', './zh.ts'], function () {
  'use strict';

  return {
    setters: [null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/zh.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8958fXWCQFBl5xc1gsdLFF4", "zh", undefined);

      var win = window;
      var languages = exports('languages', {// Data
      });

      if (!win.languages) {
        win.languages = {};
      }

      win.languages.zh = languages;

      cclegacy._RF.pop();
    }
  };
});

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