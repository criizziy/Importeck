$(function() {
    $('.hardware').click(function(){
        $('#overlay').fadeIn('fast',function(){
            $('#box').animate({'top':'160px'},500);
        });
    });


    $('#boxclose').click(function(){
        $('#box').animate({'top':'-565px'},500,function(){
            $('#overlay').fadeOut('fast');
        });
    });


      $('.software').click(function(){
        $('#overlay').fadeIn('fast',function(){
            $('#box2').animate({'top':'160px'},500);
        });
    });

     $('#boxclose2').click(function(){
        $('#box2').animate({'top':'-565px'},500,function(){
            $('#overlay').fadeOut('fast');
        });
    });


      $('.diagnostico').click(function(){
        $('#overlay').fadeIn('fast',function(){
            $('#box3').animate({'top':'160px'},500);
        });
    });

     $('#boxclose3').click(function(){
        $('#box3').animate({'top':'-565px'},500,function(){
            $('#overlay').fadeOut('fast');
        });
    });

});