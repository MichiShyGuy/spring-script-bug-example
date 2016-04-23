/**
 * Created by michi on 20.04.16.
 */

(function() {
    "use strict";

    function hashCode(input) {
        var hash = 0, i, chr, len;
        if (input.length === 0) return hash;
        for (i = 0, len = input.length; i < len; i++) {
            chr = input.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    };

    var JavaDotRenderer = function () {
        this.cache = {};
        this.doT = doT;
    }, _globals;

    _globals = (function () {
        return this || (0, eval)("this");
    }());

    JavaDotRenderer.prototype = {
        compile: function (template) {
            var hash = hashCode(template);
            if (!this.cache[hash]) {
                this.cache[hash] = doT.compile(template);
            }
            return this.cache[hash];
        },
        render: function (template, model) {
            return this.compile(template)(model);
        }
    };
    if (typeof module !== "undefined" && module.exports) {
        module.exports = new JavaDotRenderer();
    } else if (typeof define === "function" && define.amd) {
        define(function () {
            return new JavaDotRenderer();
        });
    } else {
        _globals.JavaDotRenderer = new JavaDotRenderer();
    }
}());