$(document).ready(function () {
  



    
 


    



    $(window).scroll(function () { 
        if($("html").scrollTop() >= 45){
            $("#navigation .navbar").addClass("scrolled");

                $("#navigation .navbar .navbar-brand img.logo").attr("src","img/home/intro/logo-dark.png")
         

      
        }else{
            $("#navigation .navbar").removeClass("scrolled");
            $("#navigation .navbar .navbar-brand img.logo").attr("src","img/home/intro/logo.png")

        }
    });


   

        $(".popup-basket .basket-close i").click(function(e){


        
        $(".popup-basket").fadeOut();

        $(".popup-basket").css("width", "0%");

})
    $(".bag-icon a i").click(function(e){
        e.preventDefault();
        $(".popup-basket").css("animation", "not  0.3s linear 0s forwards");

        $(".popup-basket").css("width", "30%");

        $(".popup-basket").css("display", "block");


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




    // animation up 

    $('.up').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });

   
    
    
  

});