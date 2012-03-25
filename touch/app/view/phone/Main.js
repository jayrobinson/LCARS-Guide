Ext.define('LCARS.view.phone.Main', {
    extend: 'Ext.NavigationView',
    xtype: 'mainphone',

    requires: [
        'LCARS.view.phone.Start',
        'LCARS.view.phone.About',
        'LCARS.view.phone.SeriesList',
        'LCARS.view.phone.EpisodeList',
        'LCARS.view.phone.Episode'
    ],

    config: {
        navigationBar: {
            // items: [
            //     {
            //         text: 'Random',
            //         id: 'random',
            //         align: 'right'
            //     }
            // ]
        },

        items: [
            {
                xtype: 'startphone'
            }
        ]
    }
});
