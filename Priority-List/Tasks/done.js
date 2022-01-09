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
        let prioritydict = prioritydictfn(content)
        if(index == undefined){
            console.log("Error: Missing NUMBER for marking tasks as done.")
            return
        }
        if(index == 0){
            console.log(`Error: no incomplete item with index #0 exists.`)
            return
        }
        if(index>content.length-1){
            console.log(`Error: no incomplete item with index #${index} exists.`)
            return
        }
        let data = ""
        let i = 1
        let j = 1
        let k = 0
        let completedData = ""
        if(fs.existsSync("./Tasks/done.txt") && fs.existsSync("./completed.txt")){
            let text = fs.readFileSync("./Tasks/done.txt","utf8")
            completedData += text
            text = text.split('\n')
            let completeddict = prioritydictfn(text)
            k = Object.keys(completeddict).length
        }
        for (let key in prioritydict) {
            if(i!=index)
            {
                data += `${j}.,${prioritydict[key]},[${key}]\n`
                j++
            }
            else{
                k++
                console.log("Marked item as done.")
                completedData += `${k}.,${prioritydict[key]},[${key}]\n`
            }
            i++
        }
        fs.writeFileSync("./Tasks/todo.txt", data)
        fs.writeFileSync("./Tasks/done.txt",completedData)
        data = data.split('\n')
        let temp = ""
        for(let i=0;i<data.length-1;i++){
            let line = data[i].split(',')
            temp += line[0] + " " + line[1] + " " + line[2] + "\n";
        }
        fs.writeFileSync("./task.txt",temp);
        completedData = fs.readFileSync("./Tasks/done.txt","utf8")
        completedData = completedData.split('\n')
        temp = ""
        for(let i=0;i<completedData.length-1;i++){
            let line = completedData[i].split(',')
            temp += line[0] + " " + line[1] + "\n";
        }
        fs.writeFileSync("./completed.txt",temp);
    }else{
        console.log(`Error: no incomplete item with index #0 exists.`)
    }
}
module.exports = {
    fn:fn
}