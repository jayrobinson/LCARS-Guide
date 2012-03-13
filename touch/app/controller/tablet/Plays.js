Ext.define('LCARS.controller.tablet.Plays', {
    extend: 'LCARS.controller.Plays',

    config: {
        refs: {
            'addPlays' : 'button[action=addPlays]',
            'main': 'maintablet'
        },
        
        control: {
            addPlays: {
                tap: 'onAddPlays'
            }
        }
    }
});