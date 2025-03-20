const validatePinCode = (pinCode) => {
    const pinRegex = /^[1-9][0-9]{2}\s?[0-9]{3}$/;
    return pinRegex.test(pinCode);
};

// Test Cases
console.log(validatePinCode("400088"));   
console.log(validatePinCode("400 088"));   
console.log(validatePinCode("560 102"));   
console.log(validatePinCode("400088B"));   
console.log(validatePinCode("400088$"));   
console.log(validatePinCode("040088"));    
console.log(validatePinCode("12345"));    
console.log(validatePinCode("123 4567"));  
console.log(validatePinCode("12A 456"));  