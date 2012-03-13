Ext.define('LCARS.view.phone.Main', {
    extend: 'Ext.NavigationView',
    xtype: 'mainphone',

    requires: [
        'LCARS.view.phone.SeriesList',
        'LCARS.view.phone.EpisodeList',
        'LCARS.view.phone.Episode'
    ],

    config: {
        navigationBar: {
            items: [
                {
                    text: 'Random',
                    id: 'random',
                    align: 'right'
                }
            ]
        },

        items: [
            {
                xtype: 'serieslistphone'
            }
        ]
    }
});