console.log("R1D68_Factory_Pattern");
// Factory Methods

function MemberFactory() {
  this.createMember = function(name, membershipType) {
    let member;
    if (membershipType === "simple") {
      member = new SimpleMembership(name);
    } else if (membershipType === "standard") {
      member = new StandarMembership(name);
    } else if (membershipType === "super") {
      member = new SuperMembership(name);
    }

    member.type = membershipType;
    member.define = function() {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    };

    return member;
  };
}

const SimpleMembership = function(name) {
  this.name = name;
  this.cost = "$5";
};

const StandarMembership = function(name) {
  this.name = name;
  this.cost = "$25";
};

const SuperMembership = function(name) {
  this.name = name;
  this.cost = "$50";
};

const members = [];
const factory = new MemberFactory();
members.push(factory.createMember("John Doe", "simple"));
members.push(factory.createMember("Emerson", "super"));
members.push(factory.createMember("Andres", "standard"));
members.push(factory.createMember("Alejandra", "simple"));

console.log(members);

members.forEach(function(member) {
  member.define();
});
