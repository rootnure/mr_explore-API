console.log("explore API");

const person = {
    name: "Habib",
    age: 25,
    skills: ["HTML", "CSS", "JavaScript"],
    isHired: false,
};

console.log(person);
// JSON --> JavaScript Object Notataion
// JS Object to JSON --> JSON.stringify() method

const personJSON = JSON.stringify(person);
console.log(personJSON);
console.log("type of personJSON:", typeof personJSON);

// JSON to JS Object --> JSON.parse() method
const personObjet = JSON.parse(personJSON);
console.log(personObjet);
