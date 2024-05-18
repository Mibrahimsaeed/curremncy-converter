#! /usr/bin/env node
import inquirer from "inquirer";
function usd():number{
   return (pkr*0.0036)
}
function pound():number{
    return(pkr*0.0029)
}
function euro():number{
    return(pkr*0.0033)
}
function aud():number{
    return(pkr*0.0054)
}
function cad():number{
    return(pkr*0.0049)
}
const converter=await inquirer.prompt([{
"type":"input",
"name":"amount",
"message":"Enter your amount in PKR"
},
{
    "type":"list",
    "name":"currency",
    "message":"Select currency in which you want to be converted ",
    "choices":["Dollar","Pound","Euro","Australian Dollar","Canadian Dollar"],
    
},
])
let pkr=converter.amount;
if (converter.currency === "Dollar") {
    console.log("Your converted amount is ", usd());
}
else if(converter.currency === "Pound") {
    console.log("Your converted amount is ", pound());
}
else if(converter.currency === "Euro") {
    console.log("Your converted amount is ", euro());
}
else if(converter.currency === "Australian Dollar") {
    console.log("Your converted amount is ", aud());
}
else if(converter.currency === "Canadian Dollar") {
    console.log("Your converted amount is ", cad());
}
