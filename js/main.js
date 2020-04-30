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


    $(".showall ul li a").each(function(){


        var appendimages = $(".imgrow .img-holder").attr("branding")

        console.log(appendimages)
        // $(this).click(function(e){

        //     e.preventDefault();
        //     // var cl = $(this).attr("class");

        //     // var images = $(".imgrow .img-holder").hasClass(cl) 
           
           
     
          
        //     // if(appendimages.contains(cl)){
        //     //     console.log("salam")

        //     // }
          
          
      
        //     // if(images == true){
               
             
        //     //     $(".imgrow").html("")
        //     //     $(".imgrow").append()
        //     // }
        
        // })  

    })

    // $(".showall ul li a").each(click(function(e){

    

    //     e.preventDefault();


       



  


    // }))

    // $(".branding").click(function (e) { 
    //     e.preventDefault()
    //     $(".digital-img , .packaging-img").remove()
    // });
    
    // $(".digital").click(function (e) { 
    //     e.preventDefault()
    //     $(".branding-img , .packaging-img").remove()
    // });

    // $(".packaging").click(function (e) { 
    //     e.preventDefault()
    //     $(".branding-img , .digital-img").remove()
    // });
});