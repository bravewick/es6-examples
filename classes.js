class CrazyDudes {
  constructor(crazinessLevel) {
    this.crazinessLevel = crazinessLevel;
  }
}

class Kostas extends CrazyDudes{
  constructor(knowledge, locations, crazinessLevel) {
    super(crazinessLevel);
    this.knowledge = knowledge;
    this.locations = locations.add(getDefaultLocation());
  }

  printLocations() {
    console.log(`I 've been here: ${this.locations}`);
  };

  static getDefaultLocation() {
    return "Stockholm Sweden";
  };

}

var kostas = new Kostas(['js', 'html', 'angular'], ['Greece'], 100);

kostas.printLocations();
