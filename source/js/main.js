(function($) {
    $(document).ready(function (){
        var $win = $(window);
        var $button = $('.menu-btn');
        var $nav = $('.main-navigation');

        $button.on('click', function (e){
            e.preventDefault();
            $nav.slideToggle();
        });
        
        // menu fix
        //
        $win.resize(function(){
            var w = $(window).width();  
            if(w > 980 && $nav.is(':hidden')) {  
                $nav.removeAttr('style'); 
            }  
        });
        
    
    
        // fix height of slider on resize
        var $sliderHeight = $('.slider');
        function checksize(){
            var $slHeight = $('.slider li img').height();
            $sliderHeight.height($slHeight);
        }
        $win.on('resize', checksize);
        $win.trigger('resize');
        
        
        //slider
        function rotateImage(){
           var $curPhoto = $('.slider li.current');
           var $nextPhoto = $curPhoto.next();
           if($nextPhoto.length === 0){
               $nextPhoto = $('.slider li:first');
           }
           $curPhoto.removeClass("current").addClass("previous");   
           $nextPhoto.addClass("current");

           $nextPhoto.css({opacity:0}).addClass("current").animate({opacity:1}, 2000, function (){
               $curPhoto.removeClass("previous");
           });
       }
        $(function (){
           setInterval(rotateImage, 5000); 
        });
        
    });
})( jQuery );