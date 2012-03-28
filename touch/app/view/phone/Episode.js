Ext.define('LCARS.view.phone.Episode', {
    extend: 'Ext.Container',
    xtype: 'episodephone',

    config: {
        styleHtmlContent: true,
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
        tpl: [
            '<div class="content"><img src="{Screenshot}" alt="Screenshot" style="float:right;margin: 0 -10px 20px 10px;" width="48%"><p><strong>Stardate:</strong> {Stardate}<br><strong>Airdate:</strong> {PrettyFirstAired}</p><p><strong>Teaser:</strong> {Overview}</p></div>'
        ],

        items: [
            {
                cls: ['ruleHeading', 'flushLeft'],
                xtype: 'titlebar',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',
                        html: 'BK',
                        action: 'back',
                        align: 'left',
                        cls: 'backButton'
                    },
                    {
                        xtype: 'component',
                        html: 'Select Series',
                        cls: 'ruleTitle'
                    },
                    {
                        xtype: 'button',
                        html: 'END',
                        align: 'right',
                        cls: 'endCapRight'
                    }
                ]
            },
            {
                xtype: 'button',
                action: 'addPlays',
                text: 'Play Count: 0'
            },
            {
                xtype: 'titlebar',
                docked: 'bottom',
                items: [
                    {
                        xtype: 'button',
                        align: 'right',
                        action: 'share',
                        text: 'Share'
                    }
                ]
            }
        ],

        listeners: {
            element: 'element',
            swipe: 'onSwipe'
        }
    },

    onSwipe: function(e) {
        this.fireEvent('swipeepisode', this, e.direction);
    }

});
