Ext.define('LCARS.controller.tablet.Episodes', {
    extend: 'LCARS.controller.Episodes',

    config: {
        refs: {
            'main'        : 'maintablet',
            'episodeList' : 'episodelisttablet',
            'episode'     : 'episodetablet',
            'ascend'      : '#previousButton',
            'descend'     : '#nextButton'
        },

        control : {
            ascend : {
                tap: 'onPreviousButtonTap'
            },
            descend : {
                tap: 'onNextButtonTap'
            }
        }
    },

    onPreviousButtonTap: function() {
        var activeItem   = this.getMain().getActiveItem(),
            episodeList  = this.getEpisodeList(),
            episodeStore = episodeList.getStore(),
            selected     = episodeList.getSelection()[0]||episodeStore.getAt(0),
            index        = episodeStore.indexOf(selected),
            record;

        if (activeItem.xtype == 'episodelisttablet' || activeItem.xtype == "episodelistphone") {
            if (index > 0) {
                record = episodeStore.getAt(index-1);
                episodeList.select(record);
            }
        }
    },

    onNextButtonTap: function() {
        var activeItem   = this.getMain().getActiveItem(),
            episodeList  = this.getEpisodeList(),
            episodeStore = episodeList.getStore(),
            selected     = episodeList.getSelection()[0]||episodeStore.getAt(0),
            index        = episodeStore.indexOf(selected),
            total        = episodeStore.getCount(),
            record;

        if (activeItem.xtype == 'episodelisttablet' || activeItem.xtype == "episodelistphone") {
            if (index != total-1) {
                record = episodeStore.getAt(index+1);
                episodeList.select(record);
            }
        }
    },
    
    onRandomTap: function() {
        var episode = this.getRandomEpisode(),
            episodeNumber = episode.get('EpisodeNumber'),
            titleTpl = episode.get('EpisodeName') + ' S0' + episode.get('SeasonNumber') + ' E' + (episodeNumber < 10) ? '0' + episodeNumber : episodeNumber,
            activeItem = this.getMain().getActiveItem(),
            seriesController = this.getApplication().getControllerInstances()['LCARS.controller.tablet.Series'],
            item = activeItem;
            
        if (activeItem.xtype == 'episodetablet') {
            activeItem.setRecord(episode);
        } else {
            item = this.getMain().push({
                xtype: 'episodetablet',
                record: episode,
                title: titleTpl
            });
        }
        
        seriesController.updatePlayCountButton(episode, item);
    }

});
