// This function takes a string as input (the password)
function maskify (password){
    // If the password is less than or equal to 4 characters long,
    // just return the password as-is
    if(password.length<=4){
        return password;
    }
    // If the password is longer than 4 characters,
    // create a string of '#' characters that is the same length as the password minus the last 4 characters
    else{
       const mask = '#'.repeat(password.length - 4)
       // Return the mask string, followed by the last 4 characters of the password
        return mask + password.slice(-4);
    }
}

// Test the function with a sample password
console.log(maskify('packaggdgge'));
