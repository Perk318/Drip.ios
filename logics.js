

 let colors = ['white', 'cream', 'purple', 'black', 'yellow']
 let pairsWithWhite = ['green', 'brown', 'black']
 let pairsWithCream = ['brown', 'purple', 'orange']
 let pairsWithPurple = ['yellow', 'green', 'black']
 let pairsWithBlack = ['white', 'cream', 'red']
 let pairsWithYellow = ['red', 'pink', 'blue']
 
 function getRandomInt(max) {
     return Math.floor(Math.random() * max)
 }
 
 function myFunction(pairs, colorParam, rNum) {
     rNum = getRandomInt(colors.length)
     colorParam = colors[rNum]
     let copy = pairs // COPY IS TOO PERSERVE THE ORIGINAL LIST
     // CREATED A LIST OF NUMBERS TO REPRESENT THE LIST OF paired COLORS WITH WHITE
     let numList = listToNumb(pairs.length)
     console.log('copy: ', copy, 'numList:', numList)
 
     //GRABBING THE FIRST PAIRED COLOR FROM THE LIST
     let secondNum = getRandomInt(numList.length)
     let secondColor = copy[secondNum]
     //FILTERING OUT THE ALREADY CHOOSEN COLORS FROM THE LIST, ALSO REMOVING ASSOCIATED NUMBER FROM numList
     numList = numList.filter((item) => item !== secondNum)
     copy = copy.filter((item) => item !== copy[secondNum])
     console.log('copy: ', copy, 'numList:', numList)
 
     //GRABBING THE SECOND PAIRED CHOOSEN COLOR FROM paireWithWhite List
     let thirdNum = getRandomInt(numList.length)
     let thirdColor = copy[thirdNum]
     //FILTERING OUT THE ALREADY CHOOSEN COLORS FROM THE LIST, ALSO REMOVING ASSOCIATED NUMBER FROM numList
     numList = numList.filter((item) => item !== thirdNum)
     copy = copy.filter((item) => item !== copy[thirdNum])
     console.log('copy: ', copy, 'numList:', numList)
 
     //GRABBING THE NEXT PAIRED CHOOSEN COLOR FROM paireWithWhite List
     let fourthColor = copy[0]
     console.log(colorParam)
     console.log(secondColor)
     console.log(thirdColor)
     console.log(fourthColor)
     console.log('===========================================================')
     return (`${colorParam} and ${secondColor}, ${colorParam} and ${thirdColor}, ${colorParam} and ${fourthColor}`)
     console.log('===========================================================')
 }
 
 function getColor() {}
 //pairsWithWhite
 // GRABBING THE RANDOM INTGERS OUT THE LIST OF ARRAYS
 function generateRandomColor() {
     let randNumber = getRandomInt(colors.length)
     let color = colors[randNumber] // COLOR = RANDOM COLOR SELECTED FROM LIST
 
     if (color == 'white') {
         console.log('White Selected')
         return myFunction(pairsWithWhite, color, randNumber)
     }
     if (color == 'cream') {
         console.log('Cream Selected')
         return myFunction(pairsWithCream, color, randNumber)
     }
     if (color == 'black') {
         console.log('Black Selected')
         return myFunction(pairsWithBlack, color, randNumber)
     }
     if (color == 'yellow') {
         console.log('Yellow Selected')
         return myFunction(pairsWithYellow, color, randNumber)
     }
     if (color == 'purple') {
         console.log('Purple Selected')
         return myFunction(pairsWithPurple, color, randNumber)
     }else {
         return `${color}`
     }
     
 }
 
 // ADDING NUMBERS TO THE LIIST OF THE ARRAY
 function listToNumb(listLength) {
     let numList = []
     for (let i = 0; i < listLength; i++) {
         numList.push(i)
     }
     return numList
 }
 
 generateRandomColor()
let randomColor = generateRandomColor()
const color = randomColor.split(' ')
console.log(color)

let submit = document.getElementById("submit")
let result = document.getElementById('result')
 submit.addEventListener('click', () => {
    result.value = randomColor
    console.log(randomColor)
 })
 // console.log(getRandomInt(1))