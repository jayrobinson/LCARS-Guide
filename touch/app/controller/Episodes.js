Ext.define('LCARS.controller.Episodes', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            'random' : '#random'
        },

        control: {
            random : {
                tap : 'onRandomTap'
            }
        }
    },

    randomNumber: function(from, to) {
        return Math.floor(Math.random() * (to - from + 1) + from);
    },
    
    getRandomEpisode: function() {
        var seriesStore  = Ext.getStore('Series'),
            series       = seriesStore.getAt(this.randomNumber(0,5)),
            episodeStore = series.episodes(),
            episode      = episodeStore.getAt(this.randomNumber(0,episodeStore.getCount() - 1));
        
        return episode;
    },

    onRandomTap: Ext.emptyFn
});