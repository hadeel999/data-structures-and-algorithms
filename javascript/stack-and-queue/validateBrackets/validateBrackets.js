'use strict';
const Stack = require("../Stack");

function validateBrackets(string){
    let stack=new Stack();
    for (let i=0;i<string.length;i++){
        if (string[i]=="("||string[i]=="["||string[i]=="{"){
            stack.push(string[i]);
        }else if(string[i]==")"||string[i]=="]"||string[i]=="}"){
            if((stack.isEmpty())
            ||(string[i]==")"&&(stack.peek()!=="("))
            ||(string[i]=="]"&&(stack.peek()!=="["))
            ||(string[i]=="}"&&(stack.peek()!=="{"))){
                return false;
            }else{
                stack.pop();
            }
        }
    }
    return stack.isEmpty();
}

module.exports={validateBrackets:validateBrackets};