NewsReader.Routers.Router = Backbone.Router.extend({
  initialize: function (options){
    this.collection = options.collection;
    this.$el = options.$rootEl;
  },

  routes: {
    "":"feedIndex",
    "feeds/:id":"feedShow"
  },

  feedIndex: function () {
    this.collection.fetch();
    var view = new NewsReader.Views.FeedIndex({collection: this.collection});
    this.$el.html(view.render().$el);
  },

  feedShow: function (id) {
    var feed = this.collection.getOrFetch(id);
    feed.fetch();
    var view = new NewsReader.Views.FeedShow({model: feed});
    this.$el.html(view.render().$el);
  }
});
