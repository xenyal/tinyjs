var _$ = (function() {
    var elements = document.querySelectorAll(selector);
    return elements;
})

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = _$;
}
else {
   if (typeof define === 'function' && define.amd) {
      define([], function() {
        return _$;
      });
    }
    else {
      window._$ = _$;
    }
}