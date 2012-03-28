Ext.define('LCARS.controller.phone.Start', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main : 'mainphone',
            start : 'startphone',
            startButton: '#startButton',
            aboutButton: '#aboutButton',
            settingsButton: '#settingsButton'
        },
        control: {
            startButton: {
                tap: 'onStartTap'
            },
            aboutButton: {
                tap: 'onAboutTap'
            },
            settingsButton: {
                tap: 'onSettingsTap'
            }
        }
    },

    onStartTap: function() {
        this.getMain().setActiveItem({
            xtype: 'serieslistphone'
        });
    },

    onAboutTap: function() {
        this.getMain().setActiveItem({
            xtype: 'aboutphone'
        });
    },

    onSettingsTap: function() {
        this.getMain().setActiveItem({
            xtype: 'settingslistphone'
        });
    }
});
