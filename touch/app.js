Ext.application({
    name: 'LCARS',

    icon: 'resources/img/icon.png',
    glossOnIcon: false,
    statusBarStyle: 'black', // Doesn't seem to be working. Might be my phone.
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
