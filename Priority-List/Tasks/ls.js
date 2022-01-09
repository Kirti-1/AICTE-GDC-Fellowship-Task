let fs = require('fs')
function fn(){
    if(fs.existsSync("./Tasks/todo.txt") && fs.existsSync("./task.txt")){
        let pending = fs.readFileSync("./task.txt","utf8")
        pending = pending.split('\n')
        if(pending.length-1 == 0){
            console.log("There are no pending tasks!")
            return
        }
        let content = fs.readFileSync("./Tasks/todo.txt", "utf8")
        content = content.split('\n')
        for(let i=0;i<content.length-1;i++){
            let line = content[i].split(',')
            console.log(line[0] + " "+ line[1] + " " + line[2])
        }
    }else{
        console.log("There are no pending tasks!")
    }
}
module.exports = {
    fn:fn
}