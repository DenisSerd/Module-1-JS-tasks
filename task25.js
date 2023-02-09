const string = "find_and_replace_element_of_array";
const funct = (str) => str.split("_").reduce((acum,current) => acum + current[0].toUpperCase() + current.slice(1,current.length));
console.log(funct(string));