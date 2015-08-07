NewsReader.Collections.Feeds = Backbone.Collection.extend({
  url: "/api/feeds",
  model: NewsReader.Models.Feed,

  initialize: function () {
    this.listenTo(this, "sync", this.sort)
  },

  comparator: function (model) {
    return model.get("title");
  },

  getOrFetch: function(id) {
    var model = this.get(id);

    if (!model) {
      model = new this.model({id: id});
      this.add(model);
    }
    model.fetch();

    return model;
  }
});
