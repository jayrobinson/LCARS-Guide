Ext.define('LCARS.controller.phone.Episodes', {
    extend: 'LCARS.controller.Episodes',

    config: {
        refs: {
            'main' : 'mainphone'
        }
/*
        control : {
            episodelistphone : {
                itemtap: 'onEpisodeTap'
            }
        }
*/
    },

/*
    onEpisodeTap: function(dataView, index, target, record) {
        var titleTpl = record.get('EpisodeName') + ' S0' + record.get('DVD_season') + ' E0' + record.get('EpisodeNumber');
        var date = record.get('FirstAired');
        date = new Date(date);
        var UTCstring = date.toUTCString();

        this.getMain().push({
            xtype: 'episodephone',
            record: record,
            title: titleTpl
        });
    },
*/

    onRandomTap: function() {
        var episode = this.getRandomEpisode(),
            episodeNumber = episode.get('EpisodeNumber'),
            titleTpl = episode.get('EpisodeName') + ' S0' + episode.get('SeasonNumber') + ' E' + ((episodeNumber < 10) ? '0' + episodeNumber : episodeNumber),
            activeItem = this.getMain().getActiveItem(),
            seriesController = this.getApplication().getControllerInstances()['LCARS.controller.phone.Series'],
            item;

        item = this.getMain().push({
            xtype: 'episodephone',
            record: episode,
            title: titleTpl
        });

        seriesController.updatePlayCountButton(episode, item);
    }
});
