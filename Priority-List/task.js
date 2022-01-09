let fs = require('fs')
let help = require('./Tasks/help.js')
let del = require('./Tasks/del.js')
let done = require('./Tasks/done.js')
let ls = require('./Tasks/ls.js')
let report = require('./Tasks/report.js')
let add = require('./Tasks/add.js')

let input = process.argv.slice(1)
let cmd = input[1]


// ./task or ./task help
switch(cmd){
    case "help": case undefined:{
        help.fn()
        break
    }
    case "add":{
        let priority = input[2]
        let task = input.splice(3).join(" ")
        add.fn(priority, task)
        break
    }
    case "ls":{
        ls.fn()
        break
    }
    case "done":{
        let index = input[2]
        done.fn(index)
        break
    }
    case "report":{
        report.fn()
        break
    }
    case "del":{
        let index = input[2]
        del.fn(index)
        break
    }
    default:{
        console.log("Invalid command");
        break
    }
}
