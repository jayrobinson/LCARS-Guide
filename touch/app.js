Ext.application({
    name: 'LCARS',

    icon: 'resources/img/icon.png',
    tabletStartupScreen: 'resources/img/tablet_startup.png',
    phoneStartupScreen: 'resources/img/phone_startup.png',
    glossOnIcon: false,

    controllers: [
        'LCARS.controller.Series',
        'LCARS.controller.Episodes'
    ],

    models: [
        
    ],

    stores: [
        'LCARS.store.Series',
        'LCARS.store.Episodes'
    ],

    views: [
        'LCARS.view.Main',
        'LCARS.view.SeriesList',
        'LCARS.view.EpisodeList',
        'LCARS.view.Episode'
    ],

    launch: function() {
        Ext.create('LCARS.view.Main', {
            fullscreen: true
        });
    }
});
