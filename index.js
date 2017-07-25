/**
 * Created by jianshuaz on 2017-07-17.
 */
$(document).ready(function () {

    $(".lesson-item").mouseenter(
        function () {
            if($("#lesson-list").is(".lesson-list")){
                $(this).find(".lesson-shoucang").show();
                $(this).find(".lessonplay").css("opacity","1");
                $(this).find(".lesson-infor").css("height","175px");
                $(this).find(".lesson-p").css({
                    "height":"52px",
                    "opacity":"1",
                    "display":"block",
                });
                $(this).find(".zhongji").show();
                $(this).find(".learn-number").show();
                $(this).find(".lessonicon-box").css("bottom","-2px");
            }
        }
    )

    $(".lesson-item").mouseenter(
        function () {
            if($("#lesson-list").is(".lesson-list2")){
                $(this).find(".lesson-shoucang").show();
                $(this).find(".lessonplay").css("opacity","1");
            }
        }
    )

    $(".lesson-item").mouseleave(
        function () {
            if($("#lesson-list").is(".lesson-list")){

                $(this).find(".lesson-shoucang").hide();
            $(this).find(".lessonplay").css("opacity","0");
            $(this).find(".lesson-infor").css("height","88px");
            $(this).find(".lesson-p").css({
                "height":"0px",
                "opacity":"0",
                "display":"none",
            });
            $(this).find(".zhongji").hide();
            $(this).find(".learn-number").hide();
            $(this).find(".lessonicon-box").css("bottom","4px");
            }
        }
    )
    $(".lesson-item").mouseleave(
        function () {
            if($("#lesson-list").is(".lesson-list2")){
                $(this).find(".lesson-shoucang").hide();
                $(this).find(".lessonplay").css("opacity","0");
            }
        }
    )
    $(window).scroll(function () {
        if($(window).scrollTop()>10){
            $(".top-icon").show();

        }
        if($(window).scrollTop()==0){
            $(".top-icon").hide();

        }
    });
    $(".top").click(function () {
        var speed=200;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
    });
    
    $(".list-icon").click(
        function () {
            $("#lesson-list").removeClass("lesson-list");
            $("#lesson-list").addClass("lesson-list2");
            $(".lesson-p").css({
                "height":"36px",
                "opacity":"1",
                "display":"block",
            });
            $(".zhongji").show();
            $(".learn-number").show();
            $("#pager2").css("min-height","1100px");
        }
    )
    $(".kuai-icon").click(
        function () {
            $("#lesson-list").removeClass("lesson-list2");
            $("#lesson-list").addClass("lesson-list");
            $(".lesson-p").css({
                "height":"0px",
                "opacity":"0",
                "display":"none",
            });
            $(".zhongji").hide();
            $(".learn-number").hide();
            $("#pager2").css("min-height","800px");

        }
    )
})