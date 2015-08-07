NewsReader.Views.FeedIndexItem = Backbone.View.extend({
  template: JST['feed_index_item'],
  tagName: 'li',

  events: {
    'click button.delete-feed': 'deleteFeed'
  },

  render: function () {
    var content = this.template({ feed: this.model });
    this.$el.html(content);

    return this;
  },

  deleteFeed: function () {
    this.model.destroy();
    this.remove();
  }
});
