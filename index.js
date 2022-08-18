function saturdayFun(fun = "roller-skate") {
    return (`This Saturday, I want to ${fun}!`)
}
saturdayFun();
//saturdayFun("bathe my dog");

let mondayWork = function(work = "go to the office") {
    return (`This Monday, I will ${work}.`)
}
mondayWork();
//mondayWork("work from home");

function wrapAdjective(result = "*") {
    return function(emphatic = "a hard worker"){
        return `You are ${result}${emphatic}${result}!`;
    }
}
wrapAdjective()("awesome");
wrapAdjective("||")("a dedicated programmer!");