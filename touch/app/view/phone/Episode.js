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
            '<div class="content"><img src="{Screenshot}" alt="Screenshot" style="float:right;margin: 0 -10px 20px 10px;" width="48%"><p><strong>Stardate:</strong> {Stardate}<br><strong>Airdate:</strong> {FirstAired}</p><p><strong>Teaser:</strong> {Overview}</p></div>'
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
