var Invoker = (function () {
    "use strict";
    
    this.isEmail = function (str) {
        var pattern = /^[a-zA-z0-9._]+@[a-zA-Z_\-]+\.[a-zA-Z\.]{2,}/;
        return pattern.test(str);
    };
    
    this.removeSpaces = function (string_text) {
        return string_text.replace(/^\s+|\s+$/g, '');
    };

    this.replaceToCode = function (Str) {
        var Str1 = Str.replace(/'/g, "&#39;"); // HTML CODE INSTEAD OF '
        Str1 = Str1.replace(/"/g, "&#34;");
        return Str1;
    };

    this.checkSpecialCharacters = function (string_text) {
        var spCh = ["~", "`", "!", "@", "#", "$", ",", "%", "^", "&", "*", "(", ")", "=", "/", "+", "-", "<", ">", "?", "|", "';"];
        var tmp = false;

        for (var i = 0; i < spCh.length; i++) {
            if (string_text.indexOf(spCh[i]) > -1) {
                tmp = true;
            }
        }
        return tmp;
    };

    this.replaceToSpecialChar = function (str) {
        var str1 = str.replace(/&#39;/, "'");
        str1 = str1.replace(/&#34;/, "\"");
        return str1;
    };

    this.hello = function(){
        return "Hello World";
    };
})();
