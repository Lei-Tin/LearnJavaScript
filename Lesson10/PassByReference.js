let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
};

// Write your code below
function greenEnergy(obj) {
    obj['Fuel Type'] = 'avocado oil';
};

function remotelyDisable(obj) {
    obj.disabled = true;
}

console.log(spaceship);

greenEnergy(spaceship);
remotelyDisable(spaceship);

console.log(spaceship);