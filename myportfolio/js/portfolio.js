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
        }else{
            $('nav li').addClass('black');
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

    //easy pie chart
    $('.chart').eq(0).easyPieChart({
        barColor:'#89f7fe',
        size:120,
        scaleColor:false,
        lineWidth:5,
    });
    $('.chart').eq(1).easyPieChart({
        barColor:'#80e2fe',
        size:120,
        scaleColor:false,
        lineWidth:5,
    });
    $('.chart').eq(2).easyPieChart({
        barColor:'#7bd0fe',
        size:120,
        scaleColor:false,
        lineWidth:5,
    });
    $('.chart').eq(3).easyPieChart({
        barColor:'#6fbaff',
        size:120,
        scaleColor:false,
        lineWidth:5,
    });
    $('.chart').eq(4).easyPieChart({
        barColor:'#66a6ff',
        size:120,
        scaleColor:false,
        lineWidth:5,
    });
    if(scrollTop==windowH){
        $('.chart').data('easyPieChart').update();
    }
})
