$(document).ready(function () {
   
    $(window).scroll(function () { 
        if($("html").scrollTop() >= 45){
            $("#navigation .navbar").addClass("scrolled");
        }else{
            $("#navigation .navbar").removeClass("scrolled");
        }
    });


   

    $(".close").click(function (e) { 
      
        $(".popup").css("display","none");
        $(".popup").removeClass("popup-show");
    
    });

    $(".search-icon").click(function (e) { 
        e.preventDefault();
        $(".popup").addClass("popup-show");
        $(".popup").css("display","block");

    });


    

    $(".imgrow").isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows',

      });

      $(".showall ul li a").click(function(e){

       e.preventDefault();

            var selector  = $(this).attr("data-filter");

            $(".imgrow").isotope({

                    filter: selector


            });

            return false;


        
         })
    
    // owl-carousel
    var owlc = $('.owl-carousel');
    owlc.owlCarousel({
        items:6,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true
    });
    $('.play').on('click',function(){
        owlc.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owlc.trigger('stop.owl.autoplay')
    })
});