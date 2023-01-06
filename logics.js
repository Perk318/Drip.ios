 let colors = ['white', 'cream', 'purple', 'black', 'yellow' ]
let pairsWithWhite = ['green', 'brown', 'black']
let pairsWithCream = ['brown', 'purple', 'orange']
let pairsWithPurple = ['yellow', 'green', 'black']
let pairsWithBlack = ['white', 'cream', 'red']
let pairsWithYellow = ['red', 'pink', 'blue']

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// GRABBING THE RANDOM INTGERS OUT THE LIST OF ARRAYS  
function generateRandomColor() {
    let randNumber = getRandomInt(colors.length)
    let color = colors[randNumber] // COLOR = RANDOM COLOR SELECTED FROM LIST 
    if (color == 'white') {
        let copy = pairsWithWhite // COPY IS TOO PERSERVE THE ORIGINAL LIST 
        // CREATED A LIST OF NUMBERS TO REPRESENT THE LIST OF paired COLORS WITH WHITE 
        let numList =  listToNumb(pairsWithWhite.length) 
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
        console.log(copy, numList)
        copy = copy.filter (item => item !== copy[fourNum])
        return `${color} and ${secondColor}, ${color} and ${thirdColor}, ${color} and ${fourthColor}`
    } 
    if (color == 'cream') {
        let copy = pairsWithCream // COPY IS TOO PERSERVE THE ORIGINAL LIST 
        // CREATED A LIST OF NUMBERS TO REPRESENT THE LIST OF paired COLORS WITH WHITE 
        let numList =  listToNumb(pairsWithCream.length) 
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
        copy = copy.filter (item => item !== copy[fourNum])
        return `${color} and ${secondColor}, ${color} and ${thirdColor}, ${color} and ${fourthColor}`
    }
    if (color == 'purple') {
        let copy = pairsWithPurple // COPY IS TOO PERSERVE THE ORIGINAL LIST 
        // CREATED A LIST OF NUMBERS TO REPRESENT THE LIST OF paired COLORS WITH WHITE 
        let numList =  listToNumb(pairsWithPurple.length) 
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
        copy = copy.filter (item => item !== copy[fourNum])
        return `${color} and ${secondColor}, ${color} and ${thirdColor}, ${color} and ${fourthColor}`
    }
    if (color == 'black') {
        let copy = pairsWithBlack // COPY IS TOO PERSERVE THE ORIGINAL LIST 
        // CREATED A LIST OF NUMBERS TO REPRESENT THE LIST OF paired COLORS WITH WHITE 
        let numList =  listToNumb(pairsWithBlack.length) 
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
        copy = copy.filter (item => item !== copy[fourNum])
        return `${color} and ${secondColor}, ${color} and ${thirdColor}, ${color} and ${fourthColor}`
    }
    if (color == 'yellow') {
        let copy = pairsWithYellow // COPY IS TOO PERSERVE THE ORIGINAL LIST 
        // CREATED A LIST OF NUMBERS TO REPRESENT THE LIST OF paired COLORS WITH WHITE 
        let numList =  listToNumb(pairsWithYellow.length) 
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
        copy = copy.filter (item => item !== copy[fourNum])
        return `${color} and ${secondColor}, ${color} and ${thirdColor}, ${color} and ${fourthColor}`
    } else {
        return `${color}`
    }
    
}

// ADDING NUMBERS TO THE LIIST OF THE ARRAY 
function listToNumb(listLength) {
    let numList = []
    for (let i = 0 ; i < listLength; i++){
        numList.push(i)
    } 
    return numList
} 



console.log(generateRandomColor())
// console.log(getRandomInt(1))