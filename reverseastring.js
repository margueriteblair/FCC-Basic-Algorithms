function reverseString(str) {
    strInReverse = "";
    for (let i = (str.length - 1); i >= 0; i--) {
        strInReverse = str[i];
        console.log(str[i]);
    }
    
}
reverseString("butts");












function reverseString2(str){
    let reverseStr = "";
    for (i = str.length-1; i >= 0; i--) {
        reverseStr = str[i];
        console.log(reverseStr)
    }
}
reverseString2("CareerDevs");