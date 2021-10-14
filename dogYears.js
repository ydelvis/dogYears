/* This Project converts Human years to Dog Years
    
    The First 2 years of a dog represents its early years which equals 10.5 human years each.
    The Remaining years represent its later years and each equals 4 human years.
    ...
    Awesome Right! 

        Go ahead - change the "myAge" variable value to your age 
        And see how old you'd be if you were a Dog :)

                                                        -By ydelvis

    #AmaliTechTraining   #Codecademy 
*/

let myAge = 21;   // my current age

let earlyYears = 2;  // Each Early year count as 10.5 human years  

earlyYears *= 10.5;  // equivalent human years for the early years

let laterYears = myAge - 2;  // Remaining years after account for early years

laterYears *= 4;  // equivalent dogyears of the lateryears  

let myAgeInDogYears = earlyYears + laterYears;  // Finally, my age in dog years

let myName = "Elvis".toLowerCase()  // my name (converted to lower caps)

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);  // display final dog years to console


// End of Code.