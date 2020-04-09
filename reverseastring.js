function reverseString(str) {
    strInReverse = "";
    for (let i = (str.length - 1); i >= 0; i--) {
        strInReverse = str[i];
        console.log(str[i]);
    }
    
}
reverseString("butts");