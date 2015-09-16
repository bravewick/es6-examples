"use strict"

class CrazyDudes {
  constructor(crazinessLevel) {
    this.crazinessLevel = crazinessLevel;
  }
}

class Kostas extends CrazyDudes{
  constructor(knowledge, locations, crazinessLevel) {
    super(crazinessLevel);
    this.knowledge = knowledge;
    this.locations = locations;
    this.locations.push(Kostas.getDefaultLocation());
  }

  visit(location) {
      this.locations.push(location);
      return location;
  };

  printLocations() {
    console.log(`I 've been at: ${this.locations.join(', ')}`);
  };

  static getDefaultLocation() {
    return "Stockholm Sweden";
  };

};

const kostas = new Kostas(['js', 'html', 'angular'], ['Greece'], 100);

kostas.printLocations();
console.log('After visiting ' + kostas.visit('England'));
kostas.printLocations();
