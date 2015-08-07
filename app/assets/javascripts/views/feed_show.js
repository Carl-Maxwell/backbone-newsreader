NewsReader.Views.FeedShow = Backbone.CompositeView.extend({
  template: JST['feed_show'],
  events: {
    "click button.refresh": "refresh"
  },

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.entries(), 'remove', this.removeItemView)

    this.listenTo(this.model.entries(), 'add', this.addItemView);
    this.model.entries().each(this.addItemView.bind(this));
  },

  addItemView: function (feed) {
    var subview = new NewsReader.Views.FeedShowItem({ model: feed});
    this.addSubview('.list', subview);
  },

  removeItemView: function(model) {
    this.removeModelSubview('.list', model);
  },

  render: function () {
    var content = this.template({feed: this.model});
    this.$el.html(content);
    this.attachSubviews();

    if (this.model.entries().length) {
      this.$el.find('ul').removeClass('loading');
      // debugger;
    }
    return this;
  },

  refresh: function() {
    this.model.fetch();
  }
});
