Ext.define('LCARS.view.phone.EpisodeList', {
    extend: 'Ext.List',
    xtype: 'episodelistphone',

    config: {
        grouped: true,
        indexBar: true,
        itemTpl: Ext.create('Ext.XTemplate',
            '<div class="listItem" style="clear:both;"><div class="screenshot" style="float:left;padding: 0 6px 6px 0;"><img src="{Screenshot}" alt="" height="55"></div><div class="episodeListMeta"><strong class="episodeListTitle" style="display:block;font-size:18px;font-weight:bold;">{EpisodeName}</strong><span style="color:#666;"><span class="prettyepisodeid">{PrettyEpisodeID}</span>&nbsp;&nbsp;&nbsp;<span class="airdate">{PrettyFirstAired}</span>&nbsp;&nbsp;&nbsp;<span class="playcount">{PlayCount}</span></span></div></div>'
        )
    },
    applyStore: function(store){
        var seasons = [],
            seasonNumber,
            seriesController = LCARS.app.getControllerInstances()['LCARS.controller.phone.Series'];

        store.each(function(record) {
            seasonNumber = record.get('SeasonNumber');
            if (seasons.indexOf("S0" + seasonNumber) == -1) {
                seasons.push("S0" + seasonNumber);
            }

            var playCount = seriesController.getPlayCount(record);
            if(playCount < 10){
                if(playCount == 1){
                    playCount = '00' + playCount + '&nbsp;<span class="playsEnum">play</span>';
                } else {
                    playCount = '00' + playCount + '&nbsp;<span class="playsEnum">plays</span>'  ;
                }
            } else if(playCount < 100){
                playCount = '0' + playCount + '&nbsp;<span class="playsEnum">plays</span>';
            } else {
                playCount = playCount + '&nbsp;<span class="playsEnum">plays</span>'
            }

            record.set('PlayCount', playCount);

        }, this);

        this.getIndexBar().setLetters(seasons);

        return store;
    }
});
