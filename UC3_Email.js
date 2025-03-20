const validateEmail = (email) => {
    const emailRegex = /^abc(\.[a-zA-Z]+)?@bridgelabz\.co(\.[a-zA-Z]{2,})?$/;
    return emailRegex.test(email);
};

console.log(validateEmail("abc@bridgelabz.co"));       // true
console.log(validateEmail("abc.xyz@bridgelabz.co"));   // true
console.log(validateEmail("abc@bridgelabz.co.in"));    // true
console.log(validateEmail("abc.xyz@bridgelabz.co.in"));// true
console.log(validateEmail("abc@bridgelabzcom"));      // false
console.log(validateEmail("abc@bridgelabz"));         // false
console.log(validateEmail("abc@bridgelabz.in"));      // false
console.log(validateEmail("abc@bridgelabz.co.123"));  // false
console.log(validateEmail("abc@bridgelabz.co..in"));  // false
console.log(validateEmail("abc@bridgelabz..co"));     // false