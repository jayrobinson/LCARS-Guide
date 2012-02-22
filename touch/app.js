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
        'LCARS.model.Episode',
        'LCARS.model.Series'
    ],
    
    profiles: [
        'Tablet',
        'Phone'
    ],

    stores: [
        'LCARS.store.Series',
    ]
});
