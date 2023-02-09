const string = "find_and_replace_element_of_array";
const funct = (str) => str.split("_").reduce((acum,cyrrent) => acum + cyrrent[0].toUpperCase() + cyrrent.slice(1,cyrrent.length));
console.log(funct(string));