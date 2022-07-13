let cache = new WeakMap();

function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now());
    }

    return cache.get(user);

}

let lena = {name: 'Elena'};
let alex = {name: 'Alex'};

cacheUser(lena);
cacheUser(alex);

lena = null;

console.log(cache.has(lena));
console.log(cache.has(alex));


// WeakSet
// add, has, delete

let messages = [
    {text: 'Hello', from: 'John'},
    {text: 'world', from: 'Alex'},
    {text: '!!!', from: 'Max'},
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
// readMessages.add(messages[1]);
readMessages.add(messages[0]);
messages.shift();
console.log(readMessages.has(messages[0]));