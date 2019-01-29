$(function(){
    $(window).resize(function(){
      windowW=$(window).width();
      //이벤트 중복 초기화
      $('.menu-wrap > ul > li').off('click mouseenter mouseleave');
      //모바일 네비 메뉴
      if(windowW<768){
          $('.menu-wrap > ul > li').on('click',function(){
              $('.menu-wrap ul ul').slideUp();
              $(this).children('ul').stop().slideToggle();
          })
      }else{ // pc
          //드롭다운 메뉴
          $('.menu-wrap > ul > li').on({
            mouseenter:function(){
              $('.menu-wrap').addClass('hover');
            },
            mouseleave:function(){
              $('.menu-wrap').removeClass('hover');
            }
          });
      }
    }).resize();

    //모바일 네비 열기/닫기
    $('.menu-bar').click(function()
    {
        $('nav').toggleClass('open');
        $(this).find('i').toggleClass('fa-bars fa-times');
        $(this).find('i').toggleClass('white');
        $('.nav-bg').toggle();
    })

    /* swiper */
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

    //main swiper 이미지
    $(window).resize(function(){
        windowW=$(window).width();
        var slideImg=[];
        if(windowW<768){ //모바일
            slideImg=["img/main-m-1.jpg","img/main-m-2.jpg","img/main-m-3.jpg","img/main-m-4.jpg","img/main-m-5.jpg","img/main-m-6.jpg"]
        }else{ //pc
            slideImg=["img/main-p-1.jpg","img/main-p-2.jpg","img/main-p-3.jpg","img/main-p-4.jpg","img/main-p-5.jpg","img/main-p-6.jpg"]
        }
        $('.swiper-slide').each(function(i, el){
            $(this).find('img').attr('src',slideImg[i])
        })
        swiper.update();
    }).resize();

    //스크롤 이벤트
    $('.left img').css('marginTop','300px');
    $('.right p , right a').css('marginTop','300px');
    $('aside a').css('opacity','0');
    $(window).scroll(function()
    {
        var atOffset1=$('.society').offset();
        if($(document).scrollTop() > atOffset1.top - 600){
            for(i=0; i<=2; i++)
            {
                $('.society ul li').eq(i).delay(i*400).animate({'opacity':'1'},600);
            }
        }

        var atOffset2=$('.menu').offset();
        if($(document).scrollTop() > atOffset2.top - 600){
            $('.left img').stop().animate({'marginTop':'0px'},1000);
            $('.right p , right a').stop().delay(500).animate({'marginTop':'0px'},1000);
        }

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

    //로그인 팝업
    $('.login-click').click(function()
    {
        $('.login-bg').fadeIn();
        if(windowW<768){
            $('nav').hide();
        }
    })
    $('.btn-close').click(function()
    {
        $('.login-bg').fadeOut();
        if(windowW<768){
            $('nav').show();
        }
    })

    $('.login-bg button').click(function()
    {
        var id=$('#id').val();
        var password=$('#password').val();

        if(id==''){
            $('.message').text('아이디를 입력하세요');
            $('#id').focus();
        }else if(password==''){
            $('.message').text('비밀번호를 입력하세요');
            $('#password').focus();
        }else{
            $('.login-bg').fadeOut(1000,function()
            {
                $('.login-click a').text('My society');
                if(windowW>767){
                    $('.login-click').click(function()
                {
                    $('.my-society').toggle();
                    $('.login-bg').hide();
                })
                }else{
                    $('nav').show();
                    $('.my-society').show();
                    $('.login-click a').text('My society');
                }
                $('.my-society span').text(id);
            });
        }
    })

})
