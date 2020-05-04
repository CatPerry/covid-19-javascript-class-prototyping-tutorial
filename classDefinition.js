class CoronaVirus {
  constructor(people, virus, ppeNumber) {
    this.people = people;
    this.virus = virus;
    this.ppeNumber = ppeNumber;
  }

  get theVirus() {
    return "I'm a freakin virus! I'm infecting " + this.multiplies() + " people today." 
  }

  get deliverableSafetyItems() {
    return this.item;
  }

  get ppeNow() {
    let ppes = ['masks', 'all PPE (personal protective equipment)', 'gowns', 'gloves'];
    let i = Math.floor(Math.random() * ppes.length);
    let typesOfPpe = () => {
      return this.item !== undefined ? this.item : ppes[i]
    }

    let injectAmericanIndividualism = (country) => {
      return country + ". HAHA! Syyyyyke!! It's all about " + country + " " + country + "! Until we need international military support; or cheap products from China to sell at low-low prices at Walmart Dollar General, or Bed Bath & Beyond; or other countries to sell our pork to...";
    }

    let curveBall = (country) => {
      return country === 'USA' ? injectAmericanIndividualism(country) : (country + ". ");
    }

    return "The amount of " + typesOfPpe() + " you'll get today is " + this.ppeNumber + " units. " + "And it's coming from " + curveBall(this.randomCountry())
  }

  get teamwork() {
    return "Does worldwide teamwork make the dream work? " + (this.isThereTeamwork === 1 ? "Yes!" : "It depends on who you ask!")
  }

  get fullStory() {
    return coronaDay42.theVirus + coronaDay42.ppeNow + coronaDay42.teamwork;
  }

  set teamwork(isThereTeamwork) {
    this.isThereTeamwork = isThereTeamwork;
  }

  // Set in class instance declaration below if desired
  // Otherwise will default to one of four values in getter ppeNow()
  set safetyItems(item) {
    if (item !== undefined) {
    this.item = item;
    } else {
      this.item = 'PPE (personal protective equipment)';
    }
  }

  multiplies() {
    return this.virus * this.people;
  }

  randomCountry() {
    let countryArray = ['China', 'South Korea', 'Germany', 'USA', 'Singapore', 'Spain', 'France', 'Italy', 'Canada'];
    let i = Math.floor(Math.random() * countryArray.length);
    return this.country = countryArray[i];
  }
}

let randomPeopleNumber = Math.floor(Math.random() * 58494);
let randomPpeNumber = Math.floor(Math.random() * 58492084);
let randomYesOrNo = Math.floor(Math.random() * 2);
const coronaDay42 = new CoronaVirus(randomPeopleNumber, 1000, randomPpeNumber);
coronaDay42.teamwork = randomYesOrNo;

console.log(coronaDay42.fullStory);

