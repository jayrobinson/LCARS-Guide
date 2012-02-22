Ext.define('LCARS.view.tablet.NavButtons', {
    extend: 'Ext.Container',
    xtype: 'navbuttons',

    config: {
        layout: 'vbox',
        items: [
            {   // the object defined by brackets says we want a container item
                cls: ['orange','topLeft'],
                items: [
                    {
                        xtype: 'button',
                        text: 'BK',
                        cls: 'sweepButton',
                        id: 'backButton',
                        top: 40 // replace with CSS?
                    }
                ]
            },
            {
                cls: ['orange','bottomLeft'],
                flex: 1,
                items: [
                    {
                        xtype: 'button',
                        text: 'ASC',
                        cls: ['sweepButton','vert'],
                        id: 'previousButton',
                        top: 500 // replace with CSS?
                    },
                    {
                        xtype: 'button',
                        text: 'DESC',
                        cls: ['sweepButton','vert','large'],
                        id: 'nextButton',
                        top: 600 // replace with CSS?
                    }
                ]
            },
        ]
    }
});