(function() {    
    if ('querySelector' in document && 'addEventListener' in window) {
        var _$ = (function() {
            var _$ = function() {
                var elems = document.querySelectorAll(selector);
                return elems;
            }

            _$.prototype.hasClass = function (elem, className) {
                return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
            };

            _$.prototype.addClass = function (elem, className) {
                if (!hasClass(elem, className)) {
                    elem.className += ' ' + className;
                }
            };

            _$.prototype.removeClass = function (elem, className) {
                var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
                if (hasClass(elem, className)) {
                    while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
                        newClass = newClass.replace(' ' + className + ' ', ' ');
                    }
                    elem.className = newClass.replace(/^\s+|\s+$/g, '');
                }
            };
        })();
    }

    if (typeof _$ !== 'undefined' && typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
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
})();