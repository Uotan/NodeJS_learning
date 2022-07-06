const { Console } = require('console')
const fs = require('fs')
const path = require('path')
const fsPromise = require('fs/promises');


fsPromise.mkdir('/').then().catch();
fsPromise.readFile('/').then().catch();
fsPromise.writeFile('/').then().catch();
fsPromise.appendFile('/').then().catch();
fsPromise.rm('/').then().catch();
fsPromise.rmdir('/').then().catch();


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



fs.writeFile(path.resolve(__dirname, 'test.txt'), 'test string 123\nqwerty\tbig space', (err) => {
    if (err) {
        throw err;
    }
    console.log('Файл записан');
})


fs.appendFile(path.resolve(__dirname, 'test.txt'), '\nappended text', (err) => {
    if (err) {
        throw err;
    }
    console.log('Файл дозаписан');
})