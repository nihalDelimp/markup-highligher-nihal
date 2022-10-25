var getElementsInArea = (function (docElm) {
    var viewportHeight = docElm.clientHeight;
    return function (element, opts) {
        var found = [], i;
        if (element && element.type == 'resize')
            viewportHeight = docElm.clientHeight;

        for (i = opts.elements.length; i--;) {
            var elm = opts.elements[i],
                pos = elm.getBoundingClientRect(),
                topPerc = pos.top / viewportHeight * 100,
                bottomPerc = pos.bottom / viewportHeight * 100,
                middle = Math.floor(topPerc + bottomPerc) / 2,
                inViewport = Math.floor(middle) >= 45 &&
                    Math.floor(middle) <= 55;
            elm.classList.toggle(opts.markedClass, inViewport);
            if (inViewport)
                console.log(elm)
            found.push(elm);
        }
    };
})(document.documentElement);



window.addEventListener('scroll', colorChange)
window.addEventListener('resize', colorChange)

function colorChange(e) {

    getElementsInArea(e, {
        elements: document.querySelectorAll('div'),
        markedClass: 'highlight--2',
        zone: [40, 40]
    });
}