(function($) {
    'use strict';

    /*
     *
     *   MENU SCRIPT
     *
     * */
    function menuItem(e) {
        var lastId,
            topMenu = $(e),
            topMenuHeight = topMenu.outerHeight() + 15,
            menuItems = topMenu.find("li a"),
            scrollItems = menuItems.map(function () {
                var item = $($(this).attr("href"));
                if (item.length) {
                    return item;
                }
            });

        // Bind click handler to menu items
        $(e).find('a').on("click", function (e) {
            var href = $(this).attr("href"),
                offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
            $('html, body').stop().animate({
                scrollTop: offsetTop
            }, 300);
            e.preventDefault();
        });
        // Bind click handler to menu items
        menuItems.on("click", function (e) {
            var href = $(this).attr("href"),
                offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
            $('html, body').stop().animate({
                scrollTop: offsetTop
            }, 300);
            e.preventDefault();
        });

        // Bind to scroll
        $(window).scroll(function () {
            var fromTop = $(this).scrollTop() + topMenuHeight;
            var cur = scrollItems.map(function () {
                if ($(this).offset().top < fromTop)
                    return this;
            });
            cur = cur[cur.length - 1];
            var id = cur && cur.length ? cur[0].id : "";
            if (lastId !== id) {
                lastId = id;
                menuItems
                    .parent().removeClass("active")
                    .end().filter("[href='#" + id + "']").parent().addClass("active");
            }
        });
    }
    menuItem('#top-menu');
    menuItem('.top-menu');
    menuItem('.scrolControl');


    /*
     *
     *   HOME 5 SLIDER
     *
     * */
    function homeslider() {
        var homeCaro = $('.home-carousel');
        var owl = $(homeCaro);
        owl.owlCarousel({
            loop: true,
            center: true,
            margin: 30,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayHoverPause: true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                960:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });
        owl.on('mousewheel', '.owl-stage', function (e) {
            if (e.deltaY>0) {
                owl.trigger('next.owl');
            } else {
                owl.trigger('prev.owl');
            }
            e.preventDefault();
        });
        var owl = $(homeCaro);
        owl.owlCarousel();
        $('.home-next').on('click',function () {
            owl.trigger('next.owl.carousel');
        });
        $('.home-prev').on('click',function () {
            owl.trigger('prev.owl.carousel', [300]);
        });

        $(window).on('load resize', function () {
            var wHeight = $(window).height();
            $('.homeItem').css('height', wHeight - 164);
            $('.contentArea ').css('height', wHeight);
            $('.footerSection ').css('position', 'fixed');
        })

    }
    homeslider();
    var wHeight = $(window).height();
    $('.homeItem').css('height', wHeight - 164);
    /*
     *
     *   SCROLL CONTROLL
     *
     * */
    $(window).on('scroll load', function () {
        pagescroll();
    });
    function pagescroll() {
        var mItems = $('.scrolControl').find('li.active');
        var mnext = mItems.next();
        var mprev = mItems.prev();
        $(".prevBTN").attr("href", $(mprev).find('a').attr('href'));
        $(".nextBTN").attr("href", $(mnext).find('a').attr('href'));
    }
    $('.scrolControl > a').on('click', function () {
        pagescroll();
    });

    $('.prevBTN, .nextBTN').on('click', function (e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top + 1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);
        e.preventDefault();
    });

    /* ANCHOR CLICK ANIMATION */
    $('#topbtn').on("click", function (e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top + 1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);
        e.preventDefault();
    });


    /*
     *
     *   SHARE BUTTON
     *
     * */
    var tA = new TimelineMax({paused: true});
    tA
        .staggerFrom(
            '.footer-media ul li a', 1, {
                rotation: 360,
                x: -100,
                opacity: 0,
                ease: Power4.easeOut
            }, .2
        );
    $('.sharebtn').on("click", function () {
        var footerMedia = $('.footer-media');
        $(footerMedia).toggleClass('active');

        if($(footerMedia).hasClass('active')){
            tA.restart();
        }else{

        }
    });


    /*
     *
     *   FEEDBACK SECTION
     *
     * */
    function feedbackfunc() {
        var feedCaro = $('.feedback-carousel');
        $(feedCaro).owlCarousel({
            loop: true,
            center: true,
            margin: 30,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1000: {
                    items: 3
                }
            }
        });
        var owl = $(feedCaro);
        owl.owlCarousel();
        $('.owl-next').on('click',function () {
            owl.trigger('next.owl.carousel');
        });
        $('.owl-prev').on('click',function () {
            owl.trigger('prev.owl.carousel', [300]);
        });
    }
    feedbackfunc();

    /*
    *
    *   BLOG SLIDER
    *
    * */
    function blogSlider() {
        var blogCaro = $('.blog-carousel');
        $(blogCaro).owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
        var owl = $(blogCaro);
        owl.owlCarousel();
        $('.owl-next').on('click',function () {
            owl.trigger('next.owl.carousel');
        });
        $('.owl-prev').on('click',function () {
            owl.trigger('prev.owl.carousel', [300]);
        });
    }
    blogSlider();





    /*
     *
     *   BURGGER MENU BUTTON ANIMATION
     *
     * */
    $('#fullMenuBtn').on('click', function () {
        $('.mobileMenu').slideToggle();
        $(this).toggleClass('close');
    })
    ;$('.mobileNav').find('a').on('click', function (e) {
        $('.mobileMenu').slideUp();
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top + 1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);
        e.preventDefault();
    });




    /*
     *
     *   SIDEBAR STICKY
     *
     * */

    if ($('.home5').length > 0) {
        var header = $(".aboutBrif");
    }else{
        var header = $(".contentArea");
    }

    var sticky = header.offset().top;
    $(window).on('scroll', function () {
        if (window.pageYOffset >= sticky) {
            $(header).addClass("sticky");
            $('.headMenu, .sidePanel').addClass("sticky");
            $('#topbtn').attr('href', '#top').addClass('upbtn').find('span').html('UP')
        } else {
            header.removeClass("sticky");
            $('.headMenu, .sidePanel').removeClass("sticky");
            $('#topbtn').attr('href', '#top-menu').removeClass('upbtn').find('span').html('Down')
        }

    });


    /*
     *
     *   SIDEBAR BACKGROUND
     *
     * */
    var getElementsInArea = (function (docElm) {
        var viewportHeight = docElm.clientHeight;
        return function (e, opts) {
            var found = [], i;
            if (e && e.type == 'resize')
                viewportHeight = docElm.clientHeight;

            for (i = opts.elements.length; i--;) {
                var elm = opts.elements[i],
                    pos = elm.getBoundingClientRect(),
                    topPerc = pos.top / viewportHeight * 100,
                    bottomPerc = pos.bottom / viewportHeight * 100,
                    middle = (topPerc + bottomPerc) / 2,
                    inViewport = middle > opts.zone[1] && middle < (100 - opts.zone[1]);

                elm.classList.toggle(opts.markedClass, inViewport);

                if (inViewport)
                    found.push(elm);

            }
            var activeID = $(found).attr('id');

            var txt = $(found).find('.titleArea h2').text();
            var TitileItem = txt;
            var slideImg = $(".sideImage");
            if (activeID === 'ab1' || undefined) {
                $(slideImg).css({ '-webkit-filter': 'blur(15px)','opacity': '0' });
                $(slideImg).eq(1).css({  "opacity": "1", "-webkit-filter":"blur(2px)" } );
                $('#dHeading').html(TitileItem)
            } else if (activeID === 'ab2' || undefined) {
                 $(slideImg).css({ '-webkit-filter': 'blur(15px)','opacity': '0' });
                $(slideImg).eq(2).css({ "opacity": "1", "-webkit-filter":"blur(2px)" } );
                $('#dHeading').html(TitileItem)
            }
            else if (activeID === 'ab3' || undefined) {
                 $(slideImg).css({ '-webkit-filter': 'blur(15px)','opacity': '0' });
                $(slideImg).eq(3).css({ "opacity": "1", "-webkit-filter":"blur(2px)" } );
                $('#dHeading').html(TitileItem)
            }
            else if (activeID === 'ab4' || undefined) {
                 $(slideImg).css({ '-webkit-filter': 'blur(15px)','opacity': '0' });
                $(slideImg).eq(4).css({ "opacity": "1", "-webkit-filter":"blur(2px)" } );
                $('#dHeading').html(TitileItem)
            }
            else if (activeID === 'ab5' || undefined) {
                 $(slideImg).css({ '-webkit-filter': 'blur(15px)','opacity': '0' });
                $(slideImg).eq(5).css({ "opacity": "1", "-webkit-filter":"blur(2px)" } );
                $('#dHeading').html(TitileItem)
            } else if (undefined) {
                 $(slideImg).css({ '-webkit-filter': 'blur(15px)','opacity': '0' });
                $(slideImg).eq(6).css({ "opacity": "1", "-webkit-filter":"blur(2px)" } );
                $('#dHeading').html(TitileItem)
            }

        };
    })(document.documentElement);

    ////////////////////////////////////
    // How to use:

    window.addEventListener('scroll', f);
    window.addEventListener('resize', f);
    window.addEventListener('load', f);

    function f(e) {
        getElementsInArea(e, {
            elements: document.querySelectorAll('.absection'),
            markedClass: 'highlight--1',
            zone: [20, 20] // percentage distance from top & bottom
        });


        getElementsInArea(e, {
            elements: document.querySelectorAll('.absection'),
            markedClass: 'highlight--2',
            zone: [40, 40] // percentage distance from top & bottom
        });

        var contactSection = '.footerSection';
        // var contactHeight = $(contactSection).height();
        var contentWidth = $('.abContainerArea').width();
        var resumHeader = $('.resum-header').width();
        $('.headMenu').css('width', (contentWidth - 50));
        $('.sparateLine').css('left', (resumHeader + 96));
        $(contactSection).css('width', (contentWidth - 105));
        // $('#ab6').css('margin-bottom', contactHeight);
    }



    /*
     *
     * STICKY BLOCK
     *
     * */
    function stickyBlock() {
        var blockParentWidth = $('.serviceListArea').width();
        var targetSelector = $('.sl-tabs');
        var blockParentHeight = $(targetSelector).height();
        $(targetSelector).css('width', blockParentWidth + 30);
        var stopperBlock = $('.aboutSkillSection');
        var targetOffset = $(targetSelector).offset();
        var stopperBlockoffset = $(stopperBlock).offset();
        var windowTop = $(window).scrollTop();


        if (windowTop < onloadTargetOffset.top) {
            $(targetSelector).css({'position': 'absolute', 'top': '0'});
        }
        if (windowTop > (targetOffset.top + 55) && windowTop < (stopperBlockoffset.top - blockParentHeight)) {
            $(targetSelector).css({'position': 'fixed', 'top': '55px'});
        } else if ((stopperBlockoffset.top - blockParentHeight) < windowTop) {
            $(targetSelector).css({'position': 'absolute', 'top': '0'});
        }
    }
    var onloadTargetOffset;
    if (document.querySelector('.sl-tabs')) {
        onloadTargetOffset = $('.sl-tabs').offset();
        $(window).on('scroll', function () {
            stickyBlock();
        });
    }

    /*
     *
     * PORTFOLIO FUNCTION
     *
     * */
    function portFolioFun() {
        var protfolioItem = $('.pItem');
        var portNumber = protfolioItem.length;
        var portAreaW = $('.portfolio_area').width();
        var perItemWidth = portAreaW / portNumber;
        $(protfolioItem).css('width', Math.floor(perItemWidth));
        var pAreaWH = $('.portfolio_area').width() - 300;
        var perItemWidthHover = pAreaWH / (portNumber - 1);
        $(protfolioItem).on('load click mouseenter', function () {
            $(protfolioItem).css('width', Math.floor(perItemWidthHover));
            $(this).css('width', '300px');
            var imgs = $(this).find('img').attr('src');
            var Phead = $(this).find('h3').text();
            // $(".contentArea").css("background-image", "url(" + imgs + ")");
            var pHeadArry = Phead.split("");
            var current = 0;

            $("#dHeading").html('');
            setInterval(function () {

                if (current <= pHeadArry.length) {
                    var tt = [];
                    // var ttt = [];
                    var txt = pHeadArry[current];
                    tt.push(txt);
                    $("#dHeading").text(tt);
                    setTimeout(function () {
                        $("#dHeading").text(Phead)
                    }, 500)
                    // console.log(tt)
                } else {
                }
                current++;

            }, 0)


        });

        $(protfolioItem).on('mouseout', function () {
            $('.pItem').removeClass('active');
            $("#dHeading").html('')
        })
    }

    $(window).on('resize load', function () {
        portFolioFun();
    });


    /*
     *
     * CUSTOM PROGRESS
     *
     * */
    function progbar(Selector, bar) {
        var documentHeight = $(document).height();
        var windowHeight = $(window).height();
        var distanceToTop = $(window).scrollTop();

        var calHeight = (documentHeight - 2000)

        var percentScrolled = distanceToTop / (documentHeight - windowHeight) * 100;
        $(bar).css({'height': percentScrolled + '%'});
        if(distanceToTop > calHeight){
            $('#map').css('opacity', '1')
        }else{
            $('#map').css('opacity', '0')
        }
    }
    $(window).scroll(function () {
        progbar('document', '.mainprog')
    });


    /*
     *
     * lC LIGHTBOX FUNCTION
     *
     * */
    function lcLightBox() {
        lc_lightbox('.elem', {
            wrap_class: 'portfolioITems',
            gallery: true,
            thumb_attr: 'data-lcl-thumb',
            skin: 'dark',
            fullscreen: true,
            radius: 0,
            padding: 0,
            border_w: 0
        });
    }
    lcLightBox();


    /*
     *
     * CONTACT FORM
     *
     * */
        $('#contact-form').on("submit", function () {
            var action = $(this).attr('action');
            $("#message").slideUp(750, function () {
                $('#message').hide();
                $('#submit')
                    .after('<img src="images/ajax-loader.gif" class="loader" />')
                    .attr('disabled', 'disabled');
                $.post(action, {
                        name: $('#name').val(),
                        email: $('#email').val(),
                        website: $('#website').val(),
                        subject: $('#subject').val(),
                        comments: $('#comments').val()
                    },
                    function (data) {
                        document.getElementById('message').innerHTML = data;
                        $('#message').slideDown('slow');
                        setTimeout(function () {
                            $('#message').slideUp('slow');
                            console.log('SetTime');
                        }, 2000);

                        $('#contact-form img.loader').fadeOut('slow', function () {
                            $(this).remove();
                        });
                        $('#submit').removeAttr('disabled');
                        if (data.match('success') != null)
                            $('#contact-form').show('slow');
                    }
                );

            });
            return false;
        });



    /*
     *
     * CURSOR ANIMATION
     *
     * */
    var cCursor = $('.circle-cursor'); // CIRCLE CURSOR SELECTOR
    var mouseAnimation;
    var menuItems = $('h1, h2, a');
    $(menuItems).on('mouseenter', function () {
        $(cCursor).removeClass('cursorActive')
        var menuTxt = $(this).text().charAt(0);
        $(cCursor).text(menuTxt);
        $(cCursor).css({'width': '40px', 'height': '40px'});
        var strr = $(this).text();
        var str = strr.replace(/\s/g, '');
        var current = 0;

        mouseAnimation = setInterval(function () {
            if (current <= str.length) {
                var txt = str.charAt(current);
                $(cCursor).html(txt);
            } else {
                $(cCursor).html(str.charAt(0));
            }
            current++;
        }, 100)
    });
    $(menuItems).on('mouseout', function () {
        clearInterval(mouseAnimation);
        $(cCursor).addClass('cursorActive');
        $(cCursor).html('');
    });

    function CursorFunction(e) {
        var x = e.clientX;
        var y = e.clientY;
        var newposX = x - -10;
        var newposY = y - 0;
        $(cCursor).css({ "top": + newposY+"px", "left": + newposX+"px", "opacity": "1"});
    }

    $(document).on("mousemove scroll", "body", function (e) {
           CursorFunction(e);
    });


    /*
     *
     * CIRCLE BAR ANIMATION
     *
     * */
    function progressPie(sec) {
        var $ppc = $(sec),
            percent = parseInt($ppc.data('percent')),
            deg = 360*percent/100;
        if (percent > 50) {
            $ppc.addClass('gt-50');
        }
        $(sec).find('.ppc-progress-fill').css('transform','rotate('+ deg +'deg)');
        $(sec).find('.ppc-percents span').html(percent+'%');
    }


    /*
     *
     * SCROLL ANIMATION ANIMATION
     *
     * */
    $('.ppc-progress-fill, .skillWrapper').onScreen({
        container: window,
        direction: 'vertical',
        doIn: function() {
            $('.skillWrapper').addClass('barActive')
            progressPie('.pie1')
            progressPie('.pie2')

        },
        doOut: function() {
            $('.skillWrapper').removeClass('barActive')
        },
    });


    /*
     *
     * COUNTER ANIMATION
     *
     * */

        $(window).on('scroll', function () {
            var countStat = $('.stat-count');
            if($(countStat).hasClass('ad')){
                $(countStat).each(function () {
                    $(this).prop('Counter',0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
            }
        });

    $('.stat-count').onScreen({
        container: window,
        direction: 'vertical',
        doIn: function() {
            $('.stat-count').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({ countNum: $this.text()}).animate({
                        countNum: countTo
                    },{
                        duration: 1000,
                        easing:'linear',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                            //alert('finished');
                        }
                    });
            });

        },
        doOut: function() {
            // console.log('Out')
            // Do something to the matched elements as they get off scren
        }
    });

    //SLIDER PARALLAX
    function parallaxIt(e, target, movement) {
        var $this = $(".homeItem");
        var relX = e.pageX - $this.offset().left;
        var relY = e.pageY - $this.offset().top;

        TweenMax.to(target, 1, {
            x: (relX - $this.width() / 2) / $this.width() * movement,
            y: (relY - $this.height() / 2) / $this.height() * movement
        });
    }
    if ($('.homeItem').length > 0) {
        $(".homeItem").mousemove(function(e) {
            parallaxIt(e, ".over1", -30);
            parallaxIt(e, ".over2", 20);
        });
        // $(".absection").mousemove(function(e) {
        //     parallaxIt(e, ".position", 10);
        // });
    }





    /*
     *
     * ISOTOPE IN Portfolio
     *
     * */
    $(window).on('load',function(){
        //CHECK THE GRID
        if ($('.portGrid').length > 0) {
            var $container = $('.portGrid');
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });

            $('.filters button').on('click',function(){
                $('.filters .is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');

                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });
        }

    });
    if (jQuery('#particles-js').length > 0) {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 700
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 9,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 20,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }
    if ($('#bgvid').length > 0) {
        (function($){
            /*  VIDEO PLAY BUTTON */
            $('#video-btn').on('click',function(){
                $(this).toggleClass('video-play-btn');
            });
            /* video */
            var vid = document.getElementById("bgvid");
            var pauseButton = document.querySelector("#polina button");
            vid.addEventListener('ended', function()
            {
                // only functional if "loop" is removed
                vid.pause();
                // to capture IE10
                vidFade();
            });
            pauseButton.addEventListener("click", function() {
                if (vid.paused) {
                    vid.play();
                    pauseButton.innerHTML = "&nbsp;";
                } else {
                    vid.pause();
                    pauseButton.innerHTML = "&nbsp;";
                }
            });
        })(jQuery);
    }



    /*
     *
     * HOME 6 BACKGROUND ANIMATION
     *
     * */
    if ($('.home6').length > 0) {
        setTimeout(function(){
            var x = 0;
            var y = 0;
            var banner = jQuery(".home6");
            banner.css('backgroundPosition', x + 'px' + ' ' + y + 'px');
            window.setInterval(function() {
                banner.css("backgroundPosition", x + 'px' + ' ' + y + 'px');
                x++;
                y++;
            }, 30);

        }, 3000);
    }



    /*
     *
     * LOTTIE CONFIG
     *
     * */
    $(function() {
        var item = $('.bodymovin');
        $(item).each(function() {
            var element = $(this);
            var animation = bodymovin.loadAnimation({
                container: element[0],
                renderer: 'svg',
                loop: false,
                autoplay: false,
                path: element.data('icon')
            });

            $(this).on("mouseenter", function() {
                animation.play();
            });
            $(this).on("mouseleave", function() {
                animation.stop();
            });

        });


    });

    /*
     *
     * PRELOADER
     *
     * */
    var width = 100,
        perfData = window.performance.timing,
        EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
        time = parseInt((EstimatedTime/1000)%60)*100;

    // Loadbar Animation
    $(".loadbar").animate({
        width: width + "%"
    }, time);

    // Loadbar Glow Animation
    $(".glow").animate({
        width: width + "%"
    }, time);

    // Percentage Increment Animation
    var PercentageID = $("#precent"),
        start = 0,
        end = 100,
        durataion = time;
    animateValue(PercentageID, start, end, durataion);

    function animateValue(id, start, end, duration) {

        var range = end - start,
            current = start,
            increment = end > start? 1 : -1,
            stepTime = Math.abs(Math.floor(duration / range)),
            obj = $(id);

        var timer = setInterval(function() {
            current += increment;
            $(obj).text(current + "%");
            //obj.innerHTML = current;
            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    // Fading Out Loadbar on Finised
    setTimeout(function(){
        $('.preloader-wrap').fadeOut(300);
    }, time);



    /*
     *
     * MAP
     *
     * */
    var mapEl = $("#map");
    if ($(mapEl).length > 0) {
        var latlog = $(mapEl).data('latlog'),
            popupTextit = $(mapEl).data('popuptext'),
            map = L.map('map').setView(latlog, 15);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        var greenIcon = L.icon({
            iconUrl: 'images/logo.png',
            iconSize: [40, 40],
            popupAnchor: [0, -26]
        });
        L.marker(latlog, {
            icon: greenIcon
        }).addTo(map).bindPopup(popupTextit).openPopup();
    }
    
    /*
    *
    * SWITCHER CONFIG
    *
    * */
    var imported    = document.createElement('script');
    var styleE      = document.createElement('link');
    imported.src    = 'inc/switcher/js/switcher.js';
    styleE.href     = 'inc/switcher/css/switcher.css';
    styleE.rel      = 'stylesheet';
    document.head.appendChild(imported);
    document.head.appendChild(styleE);


//Enjoy...... of the End....
}) (jQuery);