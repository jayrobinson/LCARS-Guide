Ext.define('LCARS.view.phone.EpisodeList', {
    extend: 'Ext.List',
    xtype: 'episodelistphone',

    config: {
        grouped: true,
        indexBar: true,
        itemTpl: Ext.create('Ext.XTemplate',
            '<div class="listItem"><div class="screenshot" style="background-image:url({Screenshot});"></div><div class="episodeListMeta"><strong class="episodeListTitle" style="">{EpisodeName}</strong><span class="episodeListMetaSub"><span class="prettyepisodeid">{PrettyEpisodeID}</span>&nbsp;&nbsp;&nbsp;<span class="airdate">{PrettyFirstAired}</span>&nbsp;&nbsp;&nbsp;<span class="playcount">{PlayCount}</span></span></div></div>'
        ),

        items: [
            {
                cls: ['ruleHeading', 'flushLeft'],
                xtype: 'titlebar',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',
                        html: 'BK',
                        action: 'back',
                        align: 'left',
                        cls: 'backButton'
                    },
                    {
                        xtype: 'component',
                        html: 'Select Series',
                        cls: 'ruleTitle'
                    },
                    {
                        xtype: 'button',
                        html: 'END',
                        align: 'right',
                        cls: 'endCapRight'
                    }
                ]
            }
        ]
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
