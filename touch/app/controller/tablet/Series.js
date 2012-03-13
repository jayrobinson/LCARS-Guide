Ext.define('LCARS.controller.tablet.Series', {
    extend: 'LCARS.controller.Series',

    config: {
        refs: {
            'main'              : 'maintablet',
            'previousButton'    : '#previousButton',
            'nextButton'        : '#nextButton',
            'episodeList'       : 'episodelisttablet',
            'episode'           : 'episodetablet'
        },

        control : {
            serieslisttablet : {
                itemtap: 'onSeriesTap'
            },
            episodelisttablet : {
                itemtap: 'onEpisodeTap'
            },
            '#backButton': {
                tap: 'onBackButtonTap'
            }
        }
    },

    onSeriesTap: function(dataView, index, target, record) {
        this.getMain().setActiveItem({
            xtype: 'episodelisttablet',
            store: record.episodes()
        });
    },

    onEpisodeTap: function(dataView, index, target, record) {
        var main = this.getMain(),
            item;

        item = main.setActiveItem({
            xtype: 'episodetablet',
            record: record,
            title: record.get('EpisodeName')
        });

        this.updatePlayCountButton(record, item);

        this.getPreviousButton().setText('PRV');
        this.getNextButton().setText('NX');
    },

    onBackButtonTap: function() {
        var activeItem = this.getMain().getActiveItem();
        if (activeItem.xtype == 'episodetablet') {
            this.getPreviousButton().setText('ASC');
            this.getNextButton().setText('DESC');
        }
        this.getMain().pop();
    }

});
