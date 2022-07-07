const { Console } = require('console')
const fs = require('fs')
const path = require('path')
const fsPromise = require('fs/promises');
const { resolve } = require('path');
const { rejects } = require('assert');


// fsPromise.mkdir('/').then().catch();
// fsPromise.readFile('/').then().catch();
// fsPromise.writeFile('/').then().catch();
// fsPromise.appendFile('/').then().catch();
// fsPromise.rm('/').then().catch();
// fsPromise.rmdir('/').then().catch();


//unlink не работает чет, потом разберемся
// if(fs.existsSync(path.resolve(__dirname,'testdir'))){
//     console.log('directory exists')
//     fs.unlink(path.resolve(__dirname,'testdir'),(err)=>{
//         console.log(err);
//     })
// }
// else{
//     fs.mkdirSync(path.resolve(__dirname,'testdir'))
// }




//console.log('start')

//создать папку синхронно
//fs.mkdirSync(path.resolve(__dirname,'testdir','dir_little'),{recursive: true} )


//удалить каталог рекурсивноыыы
// fs.rm(path.resolve(__dirname,'testdir'),{recursive: true}, (err)=>{
// if(err){
//     throw err;
// }
// else{
//     console.log('директория удалена');
// }
// })




// //создать папку ассинхронно
// fs.mkdir(path.resolve(__dirname,'testdir','little'),{recursive: true}, (err)=>{
// if(err!=null){
//     //console.log(err);
//     console.log('ошибка =(');
//     return;
// }
// else{
//     console.log('ошибок нет');
// }
// } )
// //выполнится асинхронно

//console.log('end')


////записать данные в файл - перезаписать
// fs.writeFile(path.resolve(__dirname, 'test.txt'), 'test string 123\nqwerty\tbig space', (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('Файл записан');
// })

////дозаписать данные в конец файла
// fs.appendFile(path.resolve(__dirname, 'test.txt'), '\nappended text', (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('Файл дозаписан');
// })


const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path,data, (err) => {
        if(err) {
            return reject(err.message)
        }
        resolve()
    }))
}

const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if(err) {
            return reject(err.message)
        }
        resolve()
    }))
}

const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
        if(err) {
            return reject(err.message)
        }
        resolve(data)
    }))
}

const removeFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.rm(path, (err) => {
        if(err) {
            return reject(err.message)
        }
        resolve()
    }))
}


// writeFileAsync(path.resolve(__dirname, 'test.txt'), 'data')
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'),'123'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'),'456'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'),'578'))
//     .then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


// removeFileAsync(path.resolve(__dirname, 'test.txt'))
// .then(err=>console.log(err))
// .then(console.log('файл был удален'));

//const text = process.env.TEXT || '';
// const text = "qwe qwe eee rrr ttt 111";

// writeFileAsync(path.resolve(__dirname,'text1.txt',text))
// .then(()=>readFileAsync(path.resolve(__dirname,'text1.txt')))
// .then(data=> data.split(' ').lenght)
// .then(count=>writeFileAsync(path.resolve(__dirname,'text1.txt','Count: &{count}')))




//const text = process.env.TEXT || '';
const text = 'shit tt';

writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
    .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
    .then(data => data.split(' ').length)
    .then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), `Кол-во слов ${count}`))
    .then(() => removeFileAsync(path.resolve(__dirname, 'text.txt')))
