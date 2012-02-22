Ext.define('LCARS.view.tablet.EpisodeList', {
    extend: 'Ext.List',
    xtype: 'episodelisttablet',

    config: {
        store: 'Episodes',

        itemTpl: Ext.create('Ext.XTemplate',
            '<div class=""><img src="{Screenshot}" alt="" width="110"><span class="episodeListTitle">{EpisodeName}</span><br><span class="episodeNumber">S0{SeasonNumber} E0{EpisodeNumber}</span>&nbsp;&nbsp;&nbsp;<span class="airdate">{FirstAired}</span></div>'
        )
    }
});