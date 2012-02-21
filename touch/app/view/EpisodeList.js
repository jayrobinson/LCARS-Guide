Ext.define('LCARS.view.EpisodeList', {
    extend: 'Ext.DataView',
    xtype: 'episodelist',

    config: {
        store: 'Episodes',
        itemTpl: Ext.create('Ext.XTemplate',
            '<div class="listItem"><div class="screenshot"><img src="{filename}" alt="" height="55"></div><span class="episodeListTitle">{EpisodeName}</span><br><span class="episodeNumber">S0{DVD_season} E0{EpisodeNumber}</span>&nbsp;&nbsp;&nbsp;<span class="airdate">{FirstAired}</span></div>'
        )
    }
});