Ext.define('LCARS.view.phone.SeriesList', {
    extend: 'Ext.List',
    xtype: 'serieslistphone',

    config: {
        title: 'Select Series',
    
        store: 'Series',

        itemTpl: Ext.create('Ext.XTemplate',
            '<div class="">{SeriesName} {SeriesAbbr}</div>'
        )
    }
});