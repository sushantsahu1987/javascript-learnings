// https://jsonplaceholder.typicode.com/posts

function f1(t) {
    return new Promise( (resolve, reject)=> {
        if(t === 2) {
            resolve('p1');
        }else {
            reject("p1 error");
        }
    });
}

function f2(t) {
    return new Promise( (resolve, reject)=> {
            if(t === 2) {
                resolve('p2');
            }else {
                reject("p2 error");
            }
    })
}
f1(2).then(res => {
    console.log('success p1 '+res);
    return f2(2);
}).then(res => {
    console.log('success p2 : '+res);
}).catch(e => {
    console.log('error');
    console.log(e);
});
