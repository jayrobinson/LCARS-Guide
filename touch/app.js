Ext.application({
    name: 'LCARS',

    icon: 'resources/img/icon.png',
    glossOnIcon: false,
    phoneStartupScreen: 'resources/img/phone_startup.png',
    tabletStartupScreen: 'resources/img/tablet_startup.png',

    models: [
        'LCARS.model.Episode',
        'LCARS.model.Series',
        'LCARS.model.Play'
    ],
    
    profiles: [
        'Tablet',
        'Phone'
    ],

    stores: [
        'LCARS.store.Series',
        'LCARS.store.Plays'
    ]
});
