const modulename=require("./Module")
//
const constant = "string"
//
const arrow_function = (parameter) =>{
    console.log ("TEXT ${parameter}")
}
//
arrow_function(parameter)
//
const EventEmiter =require("events")
const customEmit = new EventEmiter // customEmit is a new object type is EventEmiter
customEmit.on("response")
customEmit.emit ("respons")// Methode emit