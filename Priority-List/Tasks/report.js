let fs = require('fs')

/*
$ ./task report
Pending : 2
1. this is a pending task [1]
2. this is a pending task with priority [4]

Completed : 3
1. completed task
2. another completed task
3. yet another completed task
*/

function fn(){
    if(fs.existsSync("./Tasks/todo.txt") && fs.existsSync("./task.txt")){
        let content = fs.readFileSync("./task.txt", "utf8")
        let pending = content.split('\n')
        console.log(`Pending : ${pending.length-1}`)
        console.log(content)
    }else{
        console.log(`Pending : 0`)
    }
    if(fs.existsSync("./Tasks/done.txt") && fs.existsSync("./completed.txt")){
        let content = fs.readFileSync("./completed.txt", "utf8")
        completed = content.split('\n')
        console.log(`Completed : ${completed.length-1}`)
        console.log(content)
    }else{
        console.log(`Completed : 0`)
    }
}
module.exports = {
    fn:fn
}