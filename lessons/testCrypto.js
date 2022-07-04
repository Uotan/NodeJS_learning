const crypt = require('crypto');

let date = Date.now();

crypt.pbkdf2('123', 'qweqew', 1000000, 64, 'sha512', (err, key) => {
    console.log('1 ends: ', Date.now() - date);
})

crypt.pbkdf2('123', 'qweqew', 1000000, 64, 'sha512', (err, key) => {
    console.log('2 ends: ', Date.now() - date);
})


crypt.pbkdf2('123', 'qweqew', 1000000, 64, 'sha512', (err, key) => {
    console.log('3 ends: ', Date.now() - date);
})

crypt.pbkdf2('123', 'qweqew', 1000000, 64, 'sha512', (err, key) => {
    console.log('4 ends: ', Date.now() - date);
})

crypt.pbkdf2('123', 'qweqew', 1000000, 64, 'sha512', (err, key) => {
    console.log('5 ends: ', Date.now() - date);
})