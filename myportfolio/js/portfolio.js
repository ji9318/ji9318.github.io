$(function()
{
    var windowH=$(window).height();
    //클릭으로 이동
    $('nav a').click(function(e)
    {
        e.preventDefault();
        var no=$('nav a').index(this);
        var nowTop=no*windowH;
        $('html').stop().animate({'scrollTop':nowTop},1000)
    })

    $(window).resize(function(){
        //이벤트 중복 초기화
        $('.nav-button').off('click')
        windowW=$(window).width();
        //모바일 네비
        if(windowW<768){
            $('nav ul').hide();
            $('.nav-button').on('click',function()
            {
                $('nav ul').stop().slideToggle();
            })
        }
        else{
            $('nav ul').show();
        }
    }).resize()
    

    $(window).scroll(function(){
        var scrollTop=$(window).scrollTop();
        //스크롤 위치마다 스타일 적용
        if(scrollTop<100){
            $('nav').removeClass('scroll')
        }else{
            $('nav').addClass('scroll');
        }
        
        if(scrollTop<windowH){
            $('nav li').removeClass('black');
            $('.nav-button').removeClass('black')
        }else{
            $('nav li').addClass('black');
            $('.nav-button').addClass('black')
        }

        //스크롤 스파이
        for(var i=0; i<4; i++)
        {
            if(scrollTop>=i*windowH && scrollTop<(i+1)*windowH){
                $('nav li a').removeClass();
                $('nav li a').eq(i).addClass('active');
            }
        }

    }).scroll();

    $('article').on('mousewheel',function(e, delta)
    {
        if(delta>0){
            if($(this).prev().is('article')){
                var prev=$(this).prev().offset().top;
                $('html').stop().animate({
                    scrollTop:prev
                },1000)
            }
        }else if(delta<0){
            if($(this).next().is('article')){
                var next=$(this).next().offset().top;
                $('html').stop().animate({
                    scrollTop:next
                },1000)
            }
        }
    })

})
