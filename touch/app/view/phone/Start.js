Ext.define('LCARS.view.phone.Start', {
    extend: 'Ext.Container',
    xtype: 'startphone',

    config: {

        items: [
            {
                cls: ['ruleHeading'],
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
                html: '<img src="/LCARS/touch/resources/img/ufp.png" height="205" width="266"><b>Access Granted</b><i>Database Retrieval<br>In Progress...</i>',
                action: 'start',
                id: 'startButton'
            },
            {
                cls: ['ruleHeading'],
                xtype: 'titlebar',
                docked: 'bottom',
                items: [
                    {
                        cls: 'ruleButton rulebuttonLeft',
                        text: 'About',
                        align: 'left',
                        id: 'aboutButton'
                    },
                    {
                        cls: 'ruleButton rulebuttonRight',
                        text: 'Settings',
                        align: 'right',
                        id: 'settingsButton'
                    }
                ]
            }
        ]
    }
});
