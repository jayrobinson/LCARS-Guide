Ext.define('LCARS.view.phone.Main', {
    extend: 'Ext.Container',
    xtype: 'mainphone',

    requires: [
        'LCARS.view.phone.Start',
        'LCARS.view.phone.About',
        'LCARS.view.phone.SeriesList',
        'LCARS.view.phone.EpisodeList',
        'LCARS.view.phone.Episode'
    ],

    config: {
        layout: 'card',

        items: [
            {
                xtype: 'startphone'
            }
        ]
    }
});
