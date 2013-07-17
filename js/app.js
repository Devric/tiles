var getRand = function (min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


$(function(){ 
    $('#app').masonry({
        itemSelector : '.tile'
        , gutter     : ".grid-sizer"
        , isFitWidth: true
        , isOriginTop : false
    })

});

$(window).load(function(){ 
    $('img').each(function(){
        $(this).attr('src', 'img/' + getRand(1,51))
    })
})
