const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => animal === 'elephant');

console.log(animals[foundAnimal]);

const startsWithS = animals.findIndex(animal => animal[0] === 's');

console.log(animals[startsWithS]);