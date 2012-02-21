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
        this.getserieslist().push({
            xtype: 'episodelist',
            record: record,
            title: record.get('SeriesName')
        });
    }

});
