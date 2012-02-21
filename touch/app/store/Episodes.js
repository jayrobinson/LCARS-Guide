Ext.define('LCARS.store.Episodes', {
    extend: 'Ext.data.Store',

    config: {
        fields: [
            'filename', // screenshot
            'EpisodeName',
            'DVD_season',
            'EpisodeNumber',
            'Stardate',
            'FirstAired',
            'Overview',
            'playCount'
        ],

        proxy: {
            type: 'ajax',
            
            reader: {
                rootProperty: 'Data.Episode'
            }
        }
    }
});