/**
 * Created by kiannguyen on 9/06/17.
 */
(function(Invoker){
    "use strict";
    var pattern = /\w[a-zA-z0-9._]\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}/;
    var items = ["*", "[", "]", "(", ")", "^", "%", "#", "!", "-", "=", "+", "&", "$", "`", "~", " ", "{", "}", ",", "<", ">", "?", "/", "|"];
    Invoker.isEmail =  function (str) {
        var tmp = true;
        tmp = pattern.test(str);
        for (var i = 0; i < items.length; i++) {
            if (str.indexOf(items[i]) > -1) {
                tmp = false
            }
        }
        var count = (str.match(/@/g) || []).length;
        if (count > 1) {
            tmp = false;
        }
        return tmp;
    };

    Invoker.removeSpaces =  function (string_text) {
        return string_text.replace(/^\s+|\s+$/g, '');
    };

    Invoker.replaceToCode =  function (Str) {
        var Str1 = Str.replace(/'/g, "&#39;"); // HTML CODE INSTEAD OF '
        Str1 = Str1.replace(/"/g, "&#34;");
        return Str1;
    };

    Invoker.checkSpecialCharacters =  function (string_text) {
        var spCh = ["~", "`", "!", "@", "#", "$", ",", "%", "^", "&", "*", "(", ")", "=", "/", "+", "-", "<", ">", "?", "|", "';"];
        var tmp = false;

        for (var i = 0; i < spCh.length; i++) {
            if (string_text.indexOf(spCh[i]) > -1) {
                tmp = true;
            }
        }
        return tmp;
    };

    Invoker.replaceToSpecialChar = function (str) {
        var str1 = str.replace(/&#39;/, "'");
        str1 = str1.replace(/&#34;/, "\"")
        return str1;
    };

    Invoker.hello =  function () {
        return "Hello Wrold";
    };

}(Invoker));

