function  basiclosure() {
    console.log('c');

    return function (){
        console.log('basic closure');
    }   
}


const innerfn = basiclosure();
innerfn();

// Closures have access to the outer function’s variable even after the outer function returns:

function name(firstname) {
    const dec = "The name is";
    function lastname(lname) {
        return dec +" "+firstname+" "+lname;
    }
    return lastname;
}

const sushantname = name("sushant");
console.log(sushantname("sahu"));

// Closures store references to the outer function’s variables

function Store(){
    let value = 111;
    return {
        getValue : function () {
            return value;
        },
        setValue : function (v) {
            value = v
        }
    }
}

const s = Store();
console.log(s.getValue());
s.setValue(21);
console.log(s.getValue());

let arrayofnames = [{name:"sushant",id:0}, {name:"abc",id:0}, {name:"kbc",id:0}];

function creator(names) {
    let uniqueID = 100;
    let i;
    for( i = 0 ; i < names.length; i++) {
        names[i].id = function () {
            return uniqueID + i;
        }
    }
    return names;
}

let creatednamewithproblem = creator(arrayofnames);
console.log(creatednamewithproblem[0].id());
console.log(creatednamewithproblem[1].id());

// To fix above problem
function creatorwithiffi(names) {
    let uniqueID = 100;
    let i;
    for( i = 0 ; i < names.length; i++) {
        names[i].id = (function () {
            return uniqueID + i;
        })();
    }
    return names;
}

let creatednamewithoutproblem = creatorwithiffi(arrayofnames);
console.log(creatednamewithoutproblem[0].id);
console.log(creatednamewithproblem[1].id);


