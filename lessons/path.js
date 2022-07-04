const path = require('path');

console.log(path.join('one','two','three'))
console.log(path.join(__dirname,'one','two','three'))


console.log(path.join(__dirname,'..','..','..'))
console.log(path.join(__dirname,'..','..'))


let my_path = path.resolve('my_folder','orders.json')

console.log(my_path);

//удоюная функция для получения имени диска. расширения файла или просто имени имени
console.log(path.parse(my_path));

console.log(path.sep+' разделитель в ОС');
console.log('Абсолютный путь: ', path.isAbsolute(my_path))

console.log('название файла: '+path.basename(my_path));
console.log('расширение файла: '+path.extname(my_path));


//--------------------------------------


let my_url = 'https://cryptorin.ru:8000/API/getUser.php?id=123&name=xero'

let url = new URL(my_url);

console.log(url.protocol);
console.log(url.hostname);
console.log(url.origin);
console.log(url.searchParams);