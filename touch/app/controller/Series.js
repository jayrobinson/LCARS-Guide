Ext.define('LCARS.controller.Series', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            'main' : 'main'
        },

        control : {
            serieslist : {
                itemtap: 'onSeriesTap'
            }
        }
    },

    onSeriesTap: function(dataView, index, target, record) {
        var episodeStore = Ext.getStore('Episodes'),
            url;

        console.log(record.get('SeriesAbbr'))

        if ( record.get('SeriesAbbr') == 'TOS' ) {
            url = '../data/1-the-original-series.json';
        } else if ( record.get('SeriesAbbr') == 'TAS' ) {
            url = '../data/2-the-animated-series.json';
        } else if ( record.get('SeriesAbbr') == 'TNG' ) {
            url = '../data/3-the-next-generation.json';
        } else if ( record.get('SeriesAbbr') == 'DS9' ) {
            url = '../data/4-deep-space-nine.json';
        } else if ( record.get('SeriesAbbr') == 'VOY' ) {
            url = '../data/5-voyager.json';
        } else if ( record.get('SeriesAbbr') == 'ENT' ) {
            url = '../data/6-enterprise.json';
        }

        episodeStore.load({
            url: url,
            callback: function() {
                console.log("Finished load")
                this.getMain().push({
                    xtype: 'episodelist',
                    title: record.get('SeriesName'),
                });
            },
            scope: this
        });
    }

});
