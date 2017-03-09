var numstars = 3;

$(document).ready(function(){
    $(window).resize( function(){
        var headerHeight = $("#header").height();
        var containerHeight = $("#header > .container-fluid").height();
        var containerPosition = (headerHeight - containerHeight)/2;
        console.log(headerHeight);
        console.log(containerPosition);
        $("#header > .container-fluid").css("top", containerPosition );
        var headerHeight = $("#header").height();
        var containerHeight = $("#header > .container-fluid").height();
        var containerPosition = (headerHeight - containerHeight)/2;
        console.log(headerHeight);
        console.log(containerPosition);
        $("#header > .container-fluid").css("top", containerPosition );
        $("#header h1").css("font-size", containerHeight/3);
    });
    
    
    
    $("div[data-album]").each(function(){
        var name = $(this).data("album");
        $(".dropdown.discography > .dropdown-menu").append('<li><a href=#>'+name+'</a></li>');
        $(".dropdown.discography > .dropdown-menu").children().last().click(function(){
            console.log(name);
           $('html, body').animate({
              scrollTop: $("div[data-album='"+name+"']").offset().top
           },1000); 
        });
    });

    
    $(".rating").each(function(){
        for (var i=0; i < numstars; i++) {
            $(this).append('<span class="glyphicon glyphicon-star"></span>');
        }
        $(this).children().hover(function(){
            $(this).nextAll().removeClass("glyphicon-star").addClass("glyphicon-star-empty");
            $(this).prevAll().removeClass("glyphicon-star-empty").addClass("glyphicon-star");
            $(this).removeClass("glyphicon-star-empty").addClass("glyphicon-star");
        })
    });
    
    $("#scroll-down").click(function(){
        $('html, body').animate({
            scrollTop: $("#discography").offset().top
        }, 1000);
    });
    
    $(".hover-box").hover(
        function(){
            var width = $(this).children("img").width();
            var fontsize = width/(numstars)*2/3;
            var position = (width-fontsize)/2;
            $(this).children(".rating").css("font-size", 0);
            $(this).children(".rating").css({"top":position, "display":"block"});
            $(this).children(".rating").animate({"font-size": fontsize},500,"swing",function(){});
            $(this).children("img").css("opacity","0.25");
        },
        function(){
            $(this).children(".rating").css("display","none");
            $(this).children("img").css("opacity","1");
        });
    console.log("loaded!");
})