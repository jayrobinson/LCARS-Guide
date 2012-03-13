Ext.define('LCARS.controller.phone.Plays', {
    extend: 'LCARS.controller.Plays',

    config: {
        refs: {
            'addPlays' : 'button[action=addPlays]',
            'main': 'mainphone'
        },
        
        control: {
            addPlays: {
                tap: 'onAddPlays'
            }
        }
    }
});