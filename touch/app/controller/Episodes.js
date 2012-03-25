Ext.define('LCARS.controller.Episodes', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            'random' : '#random'
        },

        control: {
            random : {
                tap : 'onRandomTap'
            }
        }
    },

    randomNumber: function(from, to) {
        return Math.floor(Math.random() * (to - from + 1) + from);
    },

    getRandomEpisode: function() {
        var seriesStore  = Ext.getStore('Series'),
            series       = seriesStore.getAt(this.randomNumber(0,5)),
            episodeStore = series.episodes(),
            episode      = episodeStore.getAt(this.randomNumber(0,episodeStore.getCount() - 1));

        return episode;
    },

    onPreviousButtonTap: function() {
        var main         = this.getMain(),
            activeItem   = main.getActiveItem(),
            episodeList  = this.getEpisodeList(),
            episodeStore = episodeList.getStore(),
            selected     = episodeList.getSelection()[0]||episodeStore.getAt(0),
            seriesController = this.getApplication().getControllerInstances()['LCARS.controller.phone.Series'],
            index        = episodeStore.indexOf(selected),
            record;

        if (activeItem.xtype == 'episodephone' || activeItem.xtype == "episodelistphone") {
            if (index > 0) {
                record = episodeStore.getAt(index-1);
                episodeList.select(record);

                item = main.setActiveItem({
                    xtype: 'episodephone',
                    record: record,
                    title: record.get('EpisodeName')
                });

                seriesController.updatePlayCountButton(record, item);
            }
        }
    },

    onNextButtonTap: function() {
        var main         = this.getMain(),
            activeItem   = main.getActiveItem(),
            episodeList  = this.getEpisodeList(),
            episodeStore = episodeList.getStore(),
            selected     = episodeList.getSelection()[0]||episodeStore.getAt(0),
            seriesController = this.getApplication().getControllerInstances()['LCARS.controller.phone.Series'],
            index        = episodeStore.indexOf(selected),
            total        = episodeStore.getCount(),
            record;

        if (activeItem.xtype == 'episodephone' || activeItem.xtype == "episodelistphone") {
            if (index != total-1) {
                record = episodeStore.getAt(index+1);
                episodeList.select(record);

                item = main.setActiveItem({
                    xtype: 'episodephone',
                    record: record,
                    title: record.get('EpisodeName')
                });

                seriesController.updatePlayCountButton(record, item);
            }
        }
    },

    onRandomTap: Ext.emptyFn
});
