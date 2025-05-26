function stringFiltered(arr: []) {
    let filteredArr: string[] = [];
    //let result = [];
    for(let i=0; i< arr.length; i++) {
        if(typeof arr[i] === "string") {
             filteredArr.push(arr[i]);
        }
}
return filteredArr;
}
console.log(stringFiltered([]));