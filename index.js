/**
 * Part 1: Creating Variables and Constants
 * In this file you should define the following variables with the exact names
 *
 * 1. fullName      -> assign it a value of your full name
 * 2. yearOfBirth   -> assign it a value of your year of birth
 * 3. hobby         -> assign it a value of your favorite hobby
 * 4. funFact       -> assign it a value of some fun fact about yourself
 * 5. image         -> assign it a value of a url of your image or ant image that represents you online
 */

// Part 1 answer 👇🏻 ...

let fullName = "Abdullah Salah AL Abbass";
let yearOfBirth = "1987";
let hobby = "AutoCAD";
let funFact = "I Have 4 kids, 2 Twins";
const image = "https://avatarfiles.alphacoders.com/374/374587.png";




/**
 * Part 2: String Interpolation
 * Create the following new variables that interpolate
 * the variables defined above into strings.
 *
 * 1. fullNameString      -> assign it to: My name is {fullName}
 * 2. yearOfBirthString   -> assign it to: I am {YOUR_AGE}, and make sure you calculate your age from your year of birth
 * 3. hobbyString         -> assign it to: My hobby is {YOUR_HOBBY}
 * 
 * Uncomment the following lines and start interpolating.
 * You can uncomment a line by removing the // at the start
 */

const fullNameString = `My name is ${fullName}`;
const yearOfBirthString = `I am ${2024 - yearOfBirth} old`;
const hobbyString = `My hobby is ${hobby}`;




/**
 * Part 3: Re-assignment
 * Increment your hacker score
 * */

let stars = 0;

function incrementBy1() {
  // Increment stars by 1 👇🏻
stars = stars + 1 ; // or we can use star++
  console.log(stars);

}
function decrementBy1() {
  // decrement stars by 1 👇🏻
 stars-- ; // or we can use stars = stars - 1;
  console.log(stars);
}

function incrementBy2() {
stars = stars + 2 ;
//stars++;
//stars++; we can use these two to add 2 each time function called since from top to bottom exced.
  console.log(stars);
  
}
function decrementBy2() {
  // decrement stars by 2 👇🏻
  stars--; // or we can use stars = stars - 2 once;
  stars--;
    console.log(stars);
  
}
