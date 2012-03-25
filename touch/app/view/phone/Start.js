Ext.define('LCARS.view.phone.Start', {
    extend: 'Ext.Container',
    xtype: 'startphone',

    config: {

        items: [
            {
                title: 'Start Screen',
                xtype: 'titlebar',
                docked: 'top',
                items: [
                    {
                        xtype: 'component',
                        html: 'LCARS ONLINE',
                        align: 'left'
                    },
                    {
                        xtype: 'component',
                        html: 'Current Time',
                        align: 'right'
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Series Picker',
                action: 'start',
                id: 'startButton'
            },
            {
                xtype: 'titlebar',
                docked: 'bottom',
                items: [
                    {
                        text: 'About',
                        align: 'left',
                        id: 'aboutButton'
                    },
                    {
                        text: 'Settings',
                        align: 'right',
                        id: 'settingsButton'
                    }
                ]
            }
        ]
    }
});
