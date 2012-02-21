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
            url: '../data/3-the-next-generation.json',
            
            reader: {
                rootProperty: 'Data.Episode'
            }
        },
        
        autoLoad: true
    }
});