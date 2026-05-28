const person = { name: "Clark Kent", occupation: "Reporter" };
const powers = { flight: true, strength: "superhuman" };
const personApowers = {...person,...powers}
console.log(personApowers);
