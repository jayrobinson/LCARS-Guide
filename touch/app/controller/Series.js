Ext.define('LCARS.controller.Series', {
    extend: 'Ext.app.Controller',

    onPreviousButtonTap: function() {
        var activeItem   = this.getMain().getActiveItem(),
            episodeList  = this.getEpisodeList(),
            episodeStore = episodeList.getStore(),
            selected     = episodeList.getSelection()[0],
            index        = episodeStore.indexOf(selected),
            record;

        if (activeItem.xtype == 'episodetablet' || activeItem.xtype == "episodephone") {
            if (index > 0) {
                record = episodeStore.getAt(index-1);
                episodeList.select(record);
                this.getEpisode().setData(record.data);
            }
        }
    },

    onNextButtonTap: function() {
        var activeItem   = this.getMain().getActiveItem(),
            episodeList  = this.getEpisodeList(),
            episodeStore = episodeList.getStore(),
            selected     = episodeList.getSelection()[0],
            index        = episodeStore.indexOf(selected),
            total        = episodeStore.getCount(),
            record;

        if (activeItem.xtype == 'episodetablet' || activeItem.xtype == "episodephone") {
            if (index != total-1) {
                record = episodeStore.getAt(index+1);
                episodeList.select(record);
                this.getEpisode().setData(record.data);
            }
        }
    }
});
