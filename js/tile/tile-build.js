// @include src/util.js

window.TILE = (function TILE() { 

    var TILE, i, API,

    var TILE = function(){};

    var API = {
        // @include src/tile-slider.js
        // @include src/tile-builder.js
        // @include src/tile-widgets.js
    }

    // extending api
    for (; i<API.length; i++) {
        TILE[API] = API[i]
    }

    return new TILE

})()
