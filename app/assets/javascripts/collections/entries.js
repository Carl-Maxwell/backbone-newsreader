NewsReader.Collections.Entries = Backbone.Collection.extend({
  initialize: function () {
    this.listenTo(this, "sync", this.sort);
  },

  comparator: function (model) {
    return model.escape("title");
  },
});
