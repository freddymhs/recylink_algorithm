// 1. Composite function
var rokket = (dataA, dataB, dataC) => {
    return (dataA * dataB * dataC) /*return values*/
}

const a = 8, b = 2, c = 1;
console.log(rokket(a, b, c)) /*result*/


// 2. Longest string
var rokket = (list) => {
    var longestString = undefined;

    for (var i = 0; i < list.length; i++) { /*for each element*/
        longestString == undefined ? longestString = list[i] /*asign varaible*/
            : list[i].length > longestString.length ? longestString = list[i] : null; /*check the longest string*/
    }
    return longestString; /*return values*/
}
const list = ['best', 'company', 'ever']
console.log(rokket(list))

//3. String repetition
var rokket = (someString, times) => {
    var resSomeString = '';
    while (times > 0) { /*check varaible*/
        resSomeString += someString /*add conetent*/
        times--/*decrease times*/
    }
    return resSomeString /*return values*/
}

console.log(rokket('palabra', 10))

// 4. Only last names
var rokket = (someListObj) => {
    let resultado = someListObj.map((a) => { /*for each element*/
        return a.lastName /*set'resultado' value*/
    })
    return resultado  /*return values*/

}

const contacts = [
    { firstName: 'Juanito', lastName: 'Rokket' },
    { firstName: 'James', lastName: 'Bond' },
    { firstName: 'Harry', lastName: 'Potter' },
]
console.log(rokket(contacts))

// 5. Unique numbers   
var rokket = (listA, listB) => { 
    var arrResult = listA.concat(listB) /*combine 2 arrays*/
    return [...new Set(arrResult)]  /*return the uniques in array*/

}

const listA = [1, 2, 3], listB = [4, 5, 6]
console.log(rokket(listA, listB))






