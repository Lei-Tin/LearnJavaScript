// Setting the constant for the value of kelvin
const kelvin = 293;

// To obtain celsius value, we minus 273 from kelvin
var celsius = kelvin - 273;

// Calculating fahrenheit by celsius * 9/5 + 32
var fahrenheit = celsius * (9 / 5) + 32;

// Rounding the fahrenheit value to integer
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

var newton = celsius * (33 / 100);

newton = Math.floor(newton);

console.log(`The temperature is ${newton} in the Newton scale`);