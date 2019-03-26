$(function()
{
    //네비게이션
    $('nav > ul > li').hover(function(){
        $(this).children('ul,div').stop(true).slideDown();
        $(this).children('a').addClass('nav-active')
        
    },function(){
        $(this).children('ul,div').slideUp();
        $(this).children('a').removeClass('nav-active')
    })
    $('.cate-btn').click(function(){
        $('.cate-menu').toggleClass('show');
        $('.cate-bar span').toggleClass('close')
    })

    // swiper
    var tabsName = ['팬톤 2019 올해의 컬러 한정판 가이드', '팬톤 2019 올해의 컬러', '뉴욕 패션위크 AW2019-2020', '팬톤 코리아 단독 이벤트']
    var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      paginationType: "custom",
      renderBullet: function(index, className){
        if(index === (tabsName.length - 1) ){
                  return '<span class="' + className + '">'
                          + tabsName[index] + '</span>'
                          + '<div class="active-mark"></div>';}
        return '<span class="' + className + '">' + tabsName[index] + '</span>';
        }},
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'}
    });


    //isotope
    var prod=$('.prod-filter').isotope({
        itemSelector:'.item'
    })
    $('.filter-btn').on('click',function(){
        $('.filter-btn').removeClass('on');
        $(this).addClass('on');
        var selector=$(this).attr('data-filter');
        prod.isotope({
            filter:selector
        })
    })

    $('.filter-btn').eq(0).addClass('prod-active')
    $('.filter-btn').click(function(){
        $('.filter-btn').removeClass('prod-active');
        $(this).addClass('prod-active')
    })


    //더보기
    $('.more').on('click',function(e){
        e.preventDefault();
        $('.prod-wrap').toggleClass('show-more');
        $('.more i').toggleClass('fa-angle-down fa-angle-up')

    })

    

    //color of year
    $('.color ul li a').click(function(e){
        e.preventDefault();
        var key=$(this).data('key');
        $('.color-wrap div').each(function(index,box){
            $(box).find('img').attr('src','img/'+key+(index+1)+'.jpg');
            // $(box).find('img').attr('src','img/'+colors[key][index]);
        })
        $('.color ul li').removeClass('active');
        $(this).parent().addClass('active');
    })

    //scroll top
    $('aside a').css('opacity','0');

    $(window).scroll(function()
    {
        if($(document).scrollTop() > 180){
            $('aside a').css('opacity','1');
        }else{
            $('aside a').css('opacity','0');
        }
        $('aside a').click(function(e)
        {
            e.preventDefault();
            $('html').stop().animate({'scrollTop':0},1000);
        })
    })
})
