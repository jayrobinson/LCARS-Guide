Ext.define('LCARS.view.SeriesList', {
    extend: 'Ext.List',
    xtype: 'serieslist',

    config: {
        title: 'Select Series',
    
        store: 'Series',

        itemTpl: Ext.create('Ext.XTemplate',
            '<div class="">{SeriesName}</div>'
        )
    }
});