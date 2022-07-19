"use strict";

const persone = {
    name: 'Alex',
    tel: '+380945555555',
    parents: {
        mom: 'Olga',
        dad: 'Misha'
    }
};

const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Anna';
console.log(persone);
console.log(clone);