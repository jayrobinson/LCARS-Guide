Ext.define('LCARS.controller.phone.Episodes', {
    extend: 'LCARS.controller.Episodes',

    config: {
        refs: {
            main : 'mainphone',
            episode : 'episodephone',
            share  : 'button[action=share]',
            episodeList : 'episodelistphone'
        },
        control : {
            share : {
                tap: 'onShareTap'
            },
            episode: {
                swipeepisode: 'onEpisodeSwipe'
            }
        }
    },

    onShareTap: function() {
        if (!this.actions) {
            this.actions = Ext.Viewport.add({
                xtype: 'actionsheet',
                items: [
                    {
                        text: 'Edit',
                        scope: this,
                        handler: function() {
                            //
                        }
                    },
                    {
                        text: 'Watch',
                        scope: this,
                        handler: function() {
                            //
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Share',
                        scope: this,
                        handler: function() {
                            //
                        }
                    },
                    {
                        xtype: 'button',
                        ui: 'decline',
                        text: 'Cancel',
                        scope: this,
                        handler: function() {
                            this.actions.hide();
                        }
                    }
                ]
            });
        }

        this.actions.show();
    },

    onEpisodeSwipe: function(episodeView, direction) {
        if (direction == "left") {
            this.onNextButtonTap();
        } else if (direction == "right") {
            this.onPreviousButtonTap();
        }
    },

    onRandomTap: function() {
        var episode = this.getRandomEpisode(),
            episodeNumber = episode.get('EpisodeNumber'),
            titleTpl = episode.get('EpisodeName') + ' S0' + episode.get('SeasonNumber') + ' E' + ((episodeNumber < 10) ? '0' + episodeNumber : episodeNumber),
            activeItem = this.getMain().getActiveItem(),
            seriesController = this.getApplication().getControllerInstances()['LCARS.controller.phone.Series'],
            item;

        item = this.getMain().push({
            xtype: 'episodephone',
            record: episode,
            title: titleTpl
        });

        seriesController.updatePlayCountButton(episode, item);
    },

});
