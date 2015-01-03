(function() {
    'use strict';

    window.addEventListener('load', function(e) {
        var svgs = document.querySelectorAll('svg[data-src]');
        for(var i = 0; i < svgs.length; i++) {
            var svg = svgs[i];
            // Firefox doesn't support dataset for svg elements
            var src = svg.getAttribute('data-src');
            ajax(src, createCallback(svg));
        }
    });

    function createCallback(svg) {
        return function(text) {
            loadSvg(svg, text);
        }
    }

    function loadSvg(element, src) {
        var container = document.createElement('span');
        var idAttr = element.getAttribute('id');
        var classAttr = element.getAttribute('class');

        container.innerHTML = src;
        var svgElement = container.firstChild;
        while(svgElement.nodeName != 'svg') {
            svgElement = svgElement.nextSibling;
        }

        if(idAttr) svgElement.setAttribute('id', idAttr);
        if(classAttr) svgElement.setAttribute('class', classAttr);
        element.parentNode.insertBefore(svgElement, element);
        element.parentNode.removeChild(element);
    }

    function ajax(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 && xhr.status == 200) callback(xhr.responseText);
        };
        xhr.open('GET', url, true);
        xhr.send();
    }
})();