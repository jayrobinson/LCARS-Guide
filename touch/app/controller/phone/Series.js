Ext.define('LCARS.controller.phone.Series', {
    extend: 'LCARS.controller.Series',

    config: {
        refs: {
            'main' : 'mainphone'
        },

        control : {
            'button[action=back]' : {
                tap: 'onBack'
            },
            serieslistphone : {
                itemtap: 'onSeriesTap'
            },
            episodelistphone : {
                itemtap: 'onEpisodeTap'
            }
        }
    },

    onBack: function() {
        var innerItems = this.getMain().getInnerItems();
        console.log(innerItems.length);
        this.getMain().removeAt(innerItems.length - 1);
    },

    onSeriesTap: function(dataView, index, target, record) {
        this.getMain().setActiveItem({
            xtype: 'episodelistphone',
            store: record.episodes(),
            title: record.get('SeriesName')
        });
    },

    onEpisodeTap: function(dataView, index, target, record) {
        var main = this.getMain(),
            item;

        item = main.setActiveItem({
            xtype: 'episodephone',
            record: record,
            title: record.get('EpisodeName')
        });

        this.updatePlayCountButton(record, item);
    }

});
