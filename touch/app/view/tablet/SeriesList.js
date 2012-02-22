Ext.define('LCARS.view.tablet.SeriesList', {
    extend: 'Ext.List',
    xtype: 'serieslisttablet',

    config: {
        id: 'seriesListTablet',
        store: 'Series',

        itemTpl: Ext.create('Ext.XTemplate',
            '<div class="">{SeriesName} {SeriesAbbr}</div>'
        )
    }
});