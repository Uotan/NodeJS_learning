const fs = require('fs')
const path = require('path')
// if(fs.existsSync(path.resolve(__dirname,'testdir'))){
//     console.log('directory exists')
//     fs.unlink(path.resolve(__dirname,'testdir')
// }
// else{
//     fs.mkdirSync(path.resolve(__dirname,'testdir'))
// }




console.log('start')

//создать папку синхронно
//fs.mkdirSync(path.resolve(__dirname,'testdir','dir_little'),{recursive: true} )

fs.rmdir(path.resolve(__dirname,'testdir'), (err)=>{
if(err){
    throw err;
}
else{
    console.log('директория удалена');
}
})






//создать папку ассинхронно
// fs.mkdir(path.resolve(__dirname,'testdir'), (err)=>{
// if(err!=null){
//     //console.log(err);
//     console.log('ошибка =(');
//     return;
// }
// else{
//     console.log('ошибок нет');
// }
// } )
//выполнится асинхронно

console.log('end')