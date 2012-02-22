Ext.define('LCARS.controller.phone.Series', {
    extend: 'LCARS.controller.Series',

    config: {
        refs: {
            'main'              : 'mainphone',
            'episodeList'       : 'episodelistphone',
            'episode'           : 'episodephone'
        },

        control : {
            serieslistphone : {
                itemtap: 'onSeriesTap'
            },
            episodelistphone : {
                itemtap: 'onEpisodeTap'
            },
            episode: {
                swipeepisode: 'onEpisodeSwipe'
            }
        }
    },

    onSeriesTap: function(dataView, index, target, record) {
        this.getMain().setActiveItem({
            xtype: 'episodelistphone',
            store: record.episodes(),
            title: record.get('SeriesName')
        });
    },

    onEpisodeTap: function(dataView, index, target, record) {
        this.getMain().setActiveItem({
            xtype: 'episodephone',
            data: record.data,
            title: record.get('EpisodeName')
        });
    },
    
    onEpisodeSwipe: function(episodeView, direction) {
        if (direction == "left") {
            this.onNextButtonTap();
        } else if (direction == "right") {
            this.onPreviousButtonTap();
        }
    }

});
