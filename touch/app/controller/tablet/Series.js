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
            },
            'previousButton': {
                tap: 'onPreviousButtonTap'
            },
            'nextButton': {
                tap: 'onNextButtonTap'
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
        this.getMain().setActiveItem({
            xtype: 'episodetablet',
            data: record.data
        });
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
