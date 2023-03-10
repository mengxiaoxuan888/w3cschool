var UA = window.navigator.userAgent,IsAndroid = (/Android|HTC/i.test(UA)),IsIPad = !IsAndroid && /iPad/i.test(UA),IsIPhone = !IsAndroid && /iPod|iPhone/i.test(UA),IsIOS = IsIPad || IsIPhone,clearAnimatea = null;
var testStyle=document.createElement('div').style,
camelCase=function(str){
    return str.replace(/^-ms-/, "ms-").replace(/-([a-z]|[0-9])/ig, function(all, letter){
        return (letter+"").toUpperCase();
    });
},
cssVendor=(function(){
    var ts=testStyle,
        cases=['-o-','-webkit-','-moz-','-ms-',''],i=0;
    do {
        if(camelCase(cases[i]+'transform') in ts){
            return cases[i];
        }
    } while(++i<cases.length);
    return '';
})(),
transitionend=(function(){
    return ({
        '-o-':'otransitionend',
        '-webkit-':'webkitTransitionEnd',
        '-moz-':'transitionend',
        '-ms-':'MSTransitionEnd transitionend',
        '':'transitionend'
    })[cssVendor];
})(),
isCSS = function(property){
    var ts=testStyle,
        name=camelCase(property),
        _name=camelCase(cssVendor+property);
    return (name in ts) && name || (_name in ts) && _name || '';
};
var liebaoBrowser = {
    domAnimation: function(ele){
        ele.detBtn.hover(function(){
            $(this).addClass('btn-hover');
        },function(){
            $(this).removeClass('btn-hover');
        });
        ele.navhover.hover(function(){
            $(this).find("i").addClass('nav-hover');
        },function(){
            $(this).find("i").removeClass('nav-hover');
        });
        ele.downBtn.hover(function(){
            $(this).addClass('down-btn');
        },function(){
            $(this).removeClass('down-btn');
        });
        ele.watchLb.hover(function(){
            ele.code.addClass('code-show').show();
        },function(){
            ele.code.removeClass('code-show').hide();
        });
        ele.fnLi.hover(function(){
            var radiusEle = $(this).find('div');
            $(this).addClass('span-img');
            if(ele.aniMation){
                radiusEle.addClass('zoom');
            }else{
                radiusEle.show();
            }
        },function(){
            var radiusEle = $(this).find('div');
            $(this).removeClass('span-img');
            if(ele.aniMation){
                radiusEle.removeClass('zoom');
            }else{
                radiusEle.hide();
            }
        });
    },
    banSlide: function(item,time,ele,speed){
        clearTimeout(clearAnimatea);
        var length = ele.slide.length- 1;
        /*????????????*/
        function autoPlay() {
            item++;
            if (item == length+1) {
                item = 0;
                aniObj(item);
            }else{
                aniObj(item);
            }
            spanCur(item);
            clearAnimatea = setTimeout(autoPlay, time);
        }
        clearAnimatea = setTimeout(autoPlay, time);
        /*??????????????????*/
        function slidePrev(e){
            e.preventDefault();
            if(!ele.slide.is(':animated')){
                if (item == 0) {
                    item = length;
                    aniObj(item);
                } else {
                    item--;
                    aniObj(item);
                }
                spanCur(item);
            }
        };
        function slideNext(e){
            e.preventDefault();
            if(!ele.slide.is(':animated')){
                if (item == length) {
                    item = 0;
                    aniObj(item);
                } else {
                    item++;
                    aniObj(item);
                }
                spanCur(item);
            }
        };
        /* ?????????????????? */
        ele.slideCur.click(function() {
            clearTimeout(clearAnimatea);
            ele.slideCur.removeClass('cur');
            $(this).addClass('cur');
            item = $(this).index();
            if (item <= length) {
                aniObj(item);
            }
        });
        /*??????????????????*/
        function aniObj(getNum){
            var bgcolor = ele.slide.eq(getNum).data("bgcolor");

            ele.slide.hide().css({ opacity: 0.5,zIndex: 0});
            ele.slideContent.css("backgroundColor", bgcolor);
        
            //????????????????????????,???????????????????????????
            // RGBaster.colors(ele.slide.eq(getNum).find('img').get(0), {
            //   exclude: [ 'rgb(255,255,255)', 'rgb(0,0,0)' ],
            //   success: function(payload) {
            //     $("#slideContent").css("background-color", payload.dominant);
            //   }
            // });
            ele.slide.eq(getNum).show().stop(true,true).animate({opacity:1,zIndex:8},speed);
            if(ele.aniMation){
                ele.slide.removeClass('banAnimate');
                ele.slide.eq(getNum).addClass('banAnimate');
            }
        }
        /*??????????????????*/
        function spanCur(eqNum) {
            ele.slideCur.removeClass('cur');
            ele.slideCur.eq(eqNum).addClass('cur');
        }
        /* ?????????????????? */
        ele.prev.click(slidePrev);
        ele.next.click(slideNext);
        /* ???????????????touch?????? */
        if(IsIOS || IsAndroid){
            var touchMain = document.getElementById('touchMain');
            var page = {
                x:0,
                y:0
            }
            if(typeof touchMain != 'undefined' && touchMain != null){
                var touched;
                touchMain.addEventListener('touchstart',function(e){
                    clearTimeout(clearAnimatea);
                    page.x = e.changedTouches[0].pageX;
                    page.y = e.changedTouches[0].pageY;
                });
                touchMain.addEventListener('touchend',function(e){
                    var pageX = e.changedTouches[0].pageX-page.x;
                    var pageY = e.changedTouches[0].pageY-page.y;
                    if(Math.abs(pageX)>50){
                        if(pageX>0){
                            slidePrev(e);
                        }else{
                            slideNext(e);
                        }
                    }
                    clearAnimatea = setTimeout(autoPlay, time);
                    touched=null;
                });
                /* ????????????touchend?????? */
                touchMain.addEventListener('touchmove',function(e){
                    if(null==touched){
                        var pageX = e.changedTouches[0].pageX-page.x;
                        var pageY = e.changedTouches[0].pageY-page.y;
                        touched=Math.abs(pageX-page.x)<Math.abs(pageY-page.y);
                    }
                    if(!touched)e.preventDefault();
                });
            }
        }else{
            /*??????????????????????????????*/
            ele.stopAnimte.hover(function() {
                clearTimeout(clearAnimatea);
            }, function() {
                clearAnimatea = setTimeout(autoPlay, time);
            });
        }
        /*???????????????*/
        ele.slide.eq(0).show().addClass('banAnimate');
    },
    maxImgInit: function(ele){
        if(ele.windowMain.width()>760){
            ele.maxImg.hover(function(){
                if(ele.aniMation){
                    $(this).addClass('aniimgstyle');
                }else{
                    $(this).addClass('imgstyle');
                }
            },function(){
                if(ele.aniMation){
                    $(this).removeClass('aniimgstyle');
                }else{
                    $(this).removeClass('imgstyle');
                }
            });
        }else{
            return false;
        }
    },
    windowEvent: function(ele){
        if(!IsIOS && !IsAndroid){
            if(ele.windowMain.height() < 640){
                ele.downlaodMain.removeClass('position');
                ele.downlaodMain.addClass('padding');
            }else{
                ele.downlaodMain.removeClass('padding');
                ele.downlaodMain.addClass('position');
            }
        }
    },
    flipObj: function(ele,time){
        if(!IsIOS && !IsAndroid){
            setTimeout(function(){
                if(ele.aniMation){
                    ele.codeImg.show().addClass('flip');
                    ele.phoneImg.hide();
                }else{
                    ele.codeImg.show();
                    ele.phoneImg.hide();
                }
            },time);
            ele.phoneImg.click(function(){
                ele.phoneImg.hide().removeClass('flip');
                ele.codeImg.show().addClass('flip');
            });
            ele.codeImg.click(function(){
                ele.codeImg.hide().removeClass('flip');
                ele.phoneImg.show().addClass('flip');
            });
        }else{
            $('.pc-download').css({position:'absolute',left:'0',zIndex:'11',top:'156px;'});
            $('.phone-download').css({position:'absolute',left:'0',zIndex:'12',top:'-156px'});
        }
    },
    staJS: function(){
        $(document).on('click','a',function(e){
            var statData = $(this).attr('stat');
            try {
                _hmt.push(['_trackEvent',statData, 'webLB', 'click', 'download',statData]);
            } catch (e) {}
        });
    },
    init: function(ele){
        liebaoBrowser.banSlide(0,5000,ele,500);
        liebaoBrowser.domAnimation(ele);
        liebaoBrowser.windowEvent(ele);
        liebaoBrowser.maxImgInit(ele);
        ele.windowMain.on('resize',function(){
            liebaoBrowser.windowEvent(ele);
            liebaoBrowser.maxImgInit(ele);
        });
        liebaoBrowser.flipObj(ele,2000);
        liebaoBrowser.staJS();
    }
};
$(function(){
    var domEle = {
		navhover: $('.nav-main a'), detBtn: $('.details'),
		maxImg: $('.news-img'), fnLi: $('.ft-list li'), 
		aniMation: isCSS('animation'), watchLb: $('#watch-lb'), 
		code: $('.watch-code'), 
		downBtn: $('.beta-info a'), 
		downlaodMain: $('.downlaod-main'), 
		windowMain: $(window), 
		bodyEle: $('body'), 
        stopAnimte: $(".carousel-slide, .carousel-button-prev, .carousel-button-next, .carousel-pagination"),
        slideContent: $("#main"),
		prev: $(".carousel-button-prev"),
		next: $(".carousel-button-next"), 
		slide: $('.carousel-slide'), 
		slideCur: $(".carousel-pagination-bullet"),
		phoneImg: $('.phone-img'),
		codeImg: $('.code-img') 
    };

	domEle.downlaodMain.show();
    liebaoBrowser.init(domEle);
});
