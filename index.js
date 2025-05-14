let code1;
code1 = 7 + 3;
let code2 = (83 - 3) / 2;
let code3 = (19 * 2) + 5 % 2;
let message = `The vault has been secured. The combination is:`;
let codeA = code1 + '-' + code2 + '-' + code3;
let codeB = `${code1}-${code2}-${code3}`;


console.log(message + codeA);
console.log(message + codeB);


