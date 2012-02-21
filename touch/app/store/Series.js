Ext.define('LCARS.store.Series', {
    extend: 'Ext.data.Store',

    config: {
        fields: [
            'SeriesName'
        ],

        proxy: {
            type: 'ajax',
            url: '../data/0-all-series.json',
            
            reader: {
                rootProperty: 'Data.Series'
            }
        },
        
        autoLoad: true
    }
});