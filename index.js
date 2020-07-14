/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

var votingAge = 18
if (votingAge>=18){
    console.log('true')
}else{
    console.log('false')
}


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let food = 'pizza'
if (food === 'pizza'){
    console.log('Pizza is good!')
} else if('beans'){
    console.log('This food will not do!')
}else{
    console.log('I shall starve!')
}



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

var string = '1999'
var convert = parseInt(string)
console.log(convert)


//Task d: Write a function to multiply a*b 

function multi (num1,num2){
    return num1*num2
}
console.log(multi(5,2))



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function myAge (age){
    return age
}
console.log(myAge(20*7))




/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function dogFeeder(weight,age){
    if(weight <= 5 && age >=1){
        return weight/age*0.05
    }else if (weight === 6 && age >=1){
        return weight/age*0.04
    }else if (weight === 7 && age >=1){
        return weight/age*0.04
    } else if (weight === 8 && age >=1){
        return weight/age*0.04
    } else if (weight === 9 && age >=1){
        return weight/age*0.04
    } else if (weight === 10 && age >=1){
        return weight/age*0.04
    } else if (weight === 11 && age >=1){
        return weight/age*0.03
    } else if (weight === 12 && age >=1){
        return weight/age*0.03
    } else if (weight === 13 && age >=1){
        return weight/age*0.03
    } else if (weight === 14 && age >=1){
        return weight/age*0.03
    } else if (weight === 15 && age >=1){
        return weight/age*0.03
    } else if (weight > 15 && age >=1){
        return weight/age*0.02
    } 
}
    console.log(dogFeeder(15,1))
// I feel like there is a better way of doing this. 

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function metricConv (mile){
    let km = 1.60934
    return mile * km
}
console.log(metricConv(5))


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  function feetToCm (feet){
      let cm = 30.48
      return feet * cm
  }
console.log(feetToCm(5))



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong

// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, 
// (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(number){

}


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  function grades(grade){
      if (grade >= 90){
        return 'A'
    } else if (grade >= 80 && grade < 90){
        return 'B'
    } else if (grade >= 70 && grade < 80){
        return 'C'
    } else if (grade >= 60 && grade < 70){
        return 'D'
    } else {
        return 'F'
    }
  }
console.log(grades(90))
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





