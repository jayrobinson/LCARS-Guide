Ext.define('LCARS.controller.Episodes', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            'main' : 'main'
        },

        control : {
            episodelist : {
                itemtap: 'onEpisodeTap'
            }
        }
    },

    onEpisodeTap: function(dataView, index, target, record) {
        var titleTpl = record.get('EpisodeName') + ' S0' + record.get('DVD_season') + ' E0' + record.get('EpisodeNumber');
        var date = record.get('FirstAired');
        date = new Date(date);
        var UTCstring = date.toUTCString();

        this.getMain().push({
            xtype: 'episode',
            record: record,
            title: titleTpl
        });
    }

});
