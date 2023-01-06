// function generateRandomColor() {
//     let randNumber = getRandomInt(colors.length)
//     let color = colors[randNumber]
//     if (color == 'white') {
//         let numList =  listToNumb(pairsWithWhite.length)
//         console.log(numList)
//         let secondNum = getRandomInt(numList.length)
//         numList =  numList.filter (item => item !== secondNum)
//         console.log(numList)
//         let thirdNum = getRandomInt(numList.length)
//         numList =  numList.filter (item => item !== thirdNum)
//         console.log(numList)
//         let fourNum = getRandomInt(numList.length)
//         numList =  numList.filter (item => item !== fourNum)
//         return `${color} and ${pairsWithWhite[secondNum]}, ${color} and ${pairsWithWhite[thirdNum]}, ${color} and ${pairsWithWhite[fourNum]}`
//     } else {
//         return `${color}`
//     }
// }

let colors = ['white', ]
let pairsWithWhite = ['green', 'brown', 'black']

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }



function generateRandomColor(selectedColor) {
    let randNumber = getRandomInt(colors.length)
    let color = colors[randNumber] // COLOR = RANDOM COLOR SELECTED FROM LIST 
    if (color == selectedColor ) {
        pairWithLogic(pairsWithWhite, selectedColor)
    } else {
        return color
    }

}

function pairWithLogic(pairWithColorList, color) {
        let copy = pairWithColorList // COPY IS TOO PERSERVE THE ORIGINAL LIST 
        // CREATED A LIST OF NUMBERS TO REPRESENT THE LIST OF paired COLORS WITH WHITE 
        let numList =  listToNumb(pairWithColorList.length) 
        console.log(copy, numList)
        
        //GRABBING THE FIRST PAIRED COLOR FROM THE LIST
        let secondNum = getRandomInt(numList.length)
        let secondColor = copy[secondNum]
        //FILTERING OUT THE ALREADY CHOOSEN COLORS FROM THE LIST, ALSO REMOVING ASSOCIATED NUMBER FROM numList
        numList =  numList.filter (item => item !== secondNum)
        copy = copy.filter (item => item !== copy[secondNum])
        console.log(copy, numList)
        
        //GRABBING THE SECOND PAIRED CHOOSEN COLOR FROM paireWithWhite List 
        let thirdNum = getRandomInt(numList.length)
        let thirdColor = copy[thirdNum]
        //FILTERING OUT THE ALREADY CHOOSEN COLORS FROM THE LIST, ALSO REMOVING ASSOCIATED NUMBER FROM numList
        numList =  numList.filter (item => item !== thirdNum)
        copy = copy.filter (item => item !== copy[thirdNum])
        console.log(copy, numList)
       
         //GRABBING THE NEXT PAIRED CHOOSEN COLOR FROM paireWithWhite List 
        let fourNum = getRandomInt(numList.length)
        let fourthColor = copy[fourNum]
        return `${color} and ${secondColor}, ${color} and ${thirdColor}, ${color} and ${fourthColor}`

}

// ADDING NUMBERS TO THE LIIST OF THE ARRAY 
function listToNumb(listLength) {
    let numList = []
    for (let i = 0 ; i < listLength; i++){
        numList.push(i)
    } 
    return numList
} 
