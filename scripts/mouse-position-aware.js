$(document).ready(function(){
    $('.circleFillMouse').on('mouseenter', function(event){
        $(this).find('.btn-bg').css({top: event.offsetY, left: event.offsetX})
    })
})