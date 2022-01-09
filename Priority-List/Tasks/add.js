let fs = require('fs')
function prioritydictfn(arr){
    let dict = {}
    for(let i=0;i<arr.length-1;i++)
    {
        let line = arr[i].trim().split(",")
        let task = line[1]
        let l = line[line.length-1];
        let key = parseInt((l).substring(1,l.length-1))
        dict[key] = task
    }
    return dict
}
function fn(priority, task){
    let data = ""
    if(task == ""){
        console.log("Error: Missing tasks string. Nothing added!")
        return
    }
    if(fs.existsSync("./Tasks/todo.txt")){
        let file = fs.readFileSync("./Tasks/todo.txt", "utf8")
        let content = file.split('\n')
        let prioritydict = prioritydictfn(content)
        prioritydict[parseInt(priority)] = task
        let i = 1  
        for (const key in prioritydict) {
            data += `${i}.,${prioritydict[key]},[${key}]\n`
            i++
        }
        fs.writeFileSync("./Tasks/todo.txt", data)
    }else{
        data += `1.,${task},[${priority}]\n`
        fs.writeFileSync("./Tasks/todo.txt", data)
    }
    console.log(`Added task: "${task}" with priority ${priority}`)
    data = data.split('\n')
    let temp = ""
    for(let i=0;i<data.length-1;i++){
        let line = data[i].split(',')
        temp += line[0] + " " + line[1] + "\n";
    }
    fs.writeFileSync("./task.txt",temp);
}
module.exports = {
    fn:fn
}