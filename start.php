<?php include('inc.header.php'); ?>
<div id="start">
<div id="West">
    <img id="icon" src="img/starfleet-voyager.png" alt="Starfleet" width="100">
    <h1><strong>Select Series</strong></h1>

    <ul id="series">
        <li id="TOS">
            <i>&nbsp;</i>
            <a href="#TOS">
                <span class="total"><b> 79</b></span> <span class="acronym"><b>TOS</b></span>
            </a>
        </li>
        <li id="TAS" class="disabled">
            <i>&nbsp;</i>
            <a href="#TAS">
                <span class="total"><b> 22</b></span> <span class="acronym"><b>TAS</b></span>
            </a>
        </li>
        <li id="TNG">
            <i>&nbsp;</i>
            <a href="grid.php#TNG">
                <span class="total"><b>178</b></span> <span class="acronym"><b>TNG</b></span>
            </a>
        </li>
        <li id="DS9">
            <i>&nbsp;</i>
            <a href="#DS9">
                <span class="total"><b>176</b></span> <span class="acronym"><b>DS9</b></span>
            </a>
        </li>
        <li id="VOY">
            <i>&nbsp;</i>
            <a href="#VOY">
                <span class="total"><b>172</b></span> <span class="acronym"><b>VOY</b></span>
            </a>
        </li>
        <li id="ENT">
            <i>&nbsp;</i>
            <a href="#ENT">
                <span class="total"><b> 98</b></span> <span class="acronym"><b>ENT</b></span>
            </a>
        </li>
        <br class="clear">
    </ul>
</div>

<div id="East">
    <div id="lastWatched">
        <div id="suggest" class="lastEpisode suggestedEpisode">
            <b></b>
        </div>

        <figure>
            <a href="episode.php">
                <img src="http://src.sencha.io/292/http://images3.wikia.nocookie.net/__cb20111012192747/memoryalpha/en/images/thumb/9/9f/William_Riker%2C_2383.jpg/292px-William_Riker%2C_2383.jpg" alt="William Riker" height="234" width="292">
            </a>
        </figure>

        <h4><strong>“Future Imperfect”</strong> <span>TNG S04 E08</span></h4>

        <div class="content">
            <p>
                <strong>Date Watched</strong> 20120114<br>
                <strong>My Rating</strong> &#9733;&#9733;&#9733;&star;&star;<br>
                <strong>3 of your friends</strong> watched this episode recently.<br>
                You added <strong>2 photos</strong>, <strong>1 quote</strong>, and <strong>edited your notes</strong>.<br>
            </p>
        </div>
    </div>
    <div id="">
        <div class="ruleHeading"><b>&nbsp;</b></div>
            <ul id="numberSet">
                <?php
                    for($i=0; $i<71; $i++){
                        echo '<li>' . rand(0, 13457) . '</li>';
                    }
                ?>
            </ul>
            <br style="clear:both;">
    </div>
</div>
</div>

<script type="text/javascript">

    // Start Pages, iPad only … possibly iPhone.
    // Disable scrolling on the page for a solid, native feel
    // stackoverflow.com/questions/6598111/ios-web-app-disable-offset-scrolling
    // document.addEventListener('touchmove', function(e){ e.preventDefault(); });
    $(document).bind('touchmove', function(e){ e.preventDefault(); });

</script>

<?php include('inc.footer.php'); ?>