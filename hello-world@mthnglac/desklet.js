const Desklet = imports.ui.desklet;

function HelloDesklet(metadata, desklet_id) {
  __proto__: Desklet.Desklet.prototype,
  __init: function(metadata, desklet_id) {
    Desklet.Desklet.prototype.__init.call(this, metadata, desklet_id);
  }
}

function main(metadata, desklet_id) {
  return new HelloDesklet(metadata, desklet_id);
}
