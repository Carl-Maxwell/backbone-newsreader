NewsReader.Views.FeedIndex = Backbone.CompositeView.extend({
  template: JST['feed_index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'remove', this.removeItemView)

    this.listenTo(this.collection, 'add', this.addItemView);
    this.collection.each(this.addItemView.bind(this));
  },

  events: {
    "submit form": "createFeed"
  },

  addItemView: function (feed) {
    var subview = new NewsReader.Views.FeedIndexItem({ model: feed});
    this.addSubview('.list', subview);
  },

  removeItemView: function(model) {
    this.removeModelSubview('.list', model);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  createFeed: function (event) {
    event.preventDefault();

    var formData = $(event.currentTarget).serializeJSON();
    var feed = new NewsReader.Models.Feed();
    feed.save(formData.feed, {
      success: function (model) {
        this.collection.add(model);
      }.bind(this),
      error: function (something, response) {
        debugger
      }
    });
  }
});
