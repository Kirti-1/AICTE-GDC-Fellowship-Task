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
function fn(index){
    if(fs.existsSync("./Tasks/todo.txt") && fs.existsSync("./task.txt")){
        let file = fs.readFileSync("./Tasks/todo.txt", "utf8")
        let content = file.split('\n')
        if(index == 0){
            console.log("Error: task with index #0 does not exist. Nothing deleted.")
            return
        }
        if(index == undefined || content.length == 1){
            console.log("Error: Missing NUMBER for deleting tasks.")
            return

        }
        if(index>content.length-1){
            console.log(`Error: task with index #${index} does not exist. Nothing deleted.`)
            return
        }
        let prioritydict = prioritydictfn(content)
        let data = ""
        let i = 1  
        let j = 1
        for (let key in prioritydict) {
            if(i!=index)
            {
                data += `${j}.,${prioritydict[key]},[${key}]\n`
                j++
            }
            i++
        }
        console.log(`Deleted task #${index}`)
        fs.writeFileSync("./Tasks/todo.txt", data)
        data = data.split('\n')
        let temp = ""
        for(let i=0;i<data.length-1;i++){
            let line = data[i].split(',')
            temp += line[0] + " " + line[1] + "\n";
        }
        fs.writeFileSync("./task.txt",temp);
    }else{
        console.log("Error: Missing NUMBER for deleting tasks.")
    }
}
module.exports = {
    fn:fn
}