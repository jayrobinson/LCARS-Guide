<?php

    $isiPad = (bool) strpos($_SERVER['HTTP_USER_AGENT'],'iPad');

?>
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="format-detection" content="telephone=no">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">

<title>LCARS Guide</title>

<?php /* <link rel="apple-touch-icon-precomposed" href="img/lcars.png">
<link rel="apple-touch-startup-image" href="img/splash.png"> */ ?>
<link rel="shortcut icon" href="/favicon.ico">
<link rel="stylesheet" href="css/screen.css<?php echo '?' . time(); ?>">

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script type="text/javascript">

    // Series Picker & Episode <article>: Provide offset to give proper scrollable area for iOS
    // iPad only, still need to find a way to restrict
    function provideOffset(e) {
        var oT = e.offset().top;
        var windowHeight = $(window).height();
        var a = windowHeight - oT;
        e.attr('style', function(){
            return "height:" + a + "px";
        });
    }

    // Episode view: Pull the <aside> up
    function asideOffset() {
        var a = $('.ipad header h1').outerHeight(true);
        var b = $('.ipad header h4').outerHeight(true);
        var c = ((a+b)-28);
        var d = $('.ipad #test').css('margin-top', "-"+c+"px");
    }

    // Button styles
    // miniapps.co.uk/blog/post/enable-css-active-pseudo-styles-in-mobile-safari/
    document.addEventListener("touchstart", function() {},false);

    $(window).scroll(function () {
        if($("#scrollable").scrollTop() > 100) {
            $('#backTop').toggleClass("active");
        }
    });

    $(document).ready(function() {

        // Episode: Scroll to top of article
        $('#backTop').click(function() {
            $('#scrollable').animate({scrollTop: 0},'fast');
        });
            
        // Start: Activate/Deactivate series
        $('#start #series i').click(function(){
            var series = $(this).parent().attr('id');
            if($(this).parent().attr('class') == 'disabled'){
                alert('* Reactivating '+series+' *\nIf episodes are available, they will now show up in list and search results.');
            } else {
                alert('* Deactivating '+series+' *\n'+series+' episodes hidden from list and search results.');
            }
            $(this).parent().toggleClass("disabled");
        });
        $('#start #series a').click(function(){
            var series = $(this).parent().attr('id');
            if(series == 'TNG'){
                return true;
            } else {
                alert('* Sorry *\nThere are no '+series+' episodes at this time.');
                return false;
            }
        });

        // Start, iPad: Suggest Episode headings
        $('#suggest').click(function(){
            $(this).toggleClass("suggestedEpisode");
        });

        // Episode specific buttons
        $('#next').click(function(){
            alert("Load the next episode in the series.");
        });
        $('#previous').click(function(){
            alert("Load the previous episode in the series.");
        });
        $("#playCount b").click(function(){
            alert("* Increment/decrement play count *\nYou've watched this episode 3 times.");
        });
        $('#random').click(function(){
            alert("* Random *\nLoad a random episode from any series.");
        });
        $('#episodeNav').click(function(){
            alert('Select from season/episode picker.');
        });

        // Episode, iPhone: expand sidebar when clicked
        $('#test').click(function(){
            $(this).toggleClass("clicked");
        });

        // iPad only
        asideOffset();
        provideOffset($("#scrollable"));
        provideOffset($("#numberSet"));
    });

    window.onresize = function(event) {
        // iPad only
        asideOffset();
        provideOffset($("#scrollable"));
        provideOffset($("#numberSet"));
    }

</script>
</head>
<body<?php if($isiPad){ echo ' class="ipad"'; } ?>>