// - Arrows is function shorthand using => syntax.
// - With this  feature Lexical "this" in arrows share the same this as their
//   surrounding code

var oldBob = {
  _name: "oldBob",
  _friends: ["kostas", "george", "thomas"],
  printFriends: function () {

    var self = this;
    this._friends.forEach(function (f) {
      console.log(self._name + " knows " + f);
    });
  }
};


var bob = {
  _name: "Bob",
  _friends: ["kostas", "george", "thomas"],
  printFriends() {

    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
};

oldBob.printFriends();
bob.printFriends();
